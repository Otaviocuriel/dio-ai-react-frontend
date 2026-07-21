import { useCallback, useEffect, useRef, useState } from 'react'

import { buildAIPrompt, buildFinancialQuestionPrompt } from '@/data/aiPrompt'
import type { ChatMessage, SimulationRecord } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { getFinancialAnswer, getInsight, type InsightData } from '@/service/aiService'

export const useInsight = (id: string) => {
  const isRequestPending = useRef(false)
  const { getFormData, updateSimulation } = useSimulationStorage()

  const [insight, setInsight] = useState<InsightData | null>(() => {
    const simulation = getFormData(id)

    if (simulation?.insight) {
      return simulation.insight
    }

    return null
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => {
    const simulation = getFormData(id)

    return simulation?.chatHistory ?? []
  })
  const [isChatLoading, setIsChatLoading] = useState(false)
  const [chatError, setChatError] = useState<string | null>(null)

  const fetchInsight = useCallback(
    async (simulationId: string) => {
      const simulation = getFormData(simulationId)

      if (!simulation) {
        setError('Simulação não encontrada.')
        return null
      }

      isRequestPending.current = true
      setIsLoading(true)
      setError(null)

      try {
        const prompt = buildAIPrompt(simulation)
        const data = await getInsight(prompt)
        setInsight(data)

        updateSimulation(simulationId, {
          ...simulation,
          insight: data,
        } as SimulationRecord)

        return data
      } catch {
        setError('Erro ao gerar o diagnóstico. Tente novamente.')
        return null
      } finally {
        isRequestPending.current = false
        setIsLoading(false)
      }
    },
    [getFormData, updateSimulation],
  )

  useEffect(() => {
    if (insight || isLoading || error || isRequestPending.current) {
      return
    }

    fetchInsight(id)
  }, [id, insight, isLoading, error, fetchInsight])

  useEffect(() => {
    const simulation = getFormData(id)

    setChatHistory(simulation?.chatHistory ?? [])
    setChatError(null)
    setIsChatLoading(false)
  }, [id])

  const askQuestion = useCallback(
    async (question: string) => {
      const trimmedQuestion = question.trim()

      if (!trimmedQuestion) {
        return null
      }

      const simulation = getFormData(id)

      if (!simulation) {
        setChatError('Simulação não encontrada.')
        return null
      }

      setChatError(null)
      setIsChatLoading(true)

      const currentInsight = insight ?? (await fetchInsight(id))

      if (!currentInsight) {
        setChatError('Não foi possível carregar os insights desta simulação.')
        setIsChatLoading(false)
        return null
      }

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: trimmedQuestion,
      }
      const conversationAfterQuestion = [...chatHistory, userMessage]

      setChatHistory(conversationAfterQuestion)
      updateSimulation(id, {
        ...simulation,
        insight: currentInsight,
        chatHistory: conversationAfterQuestion,
      })

      try {
        const prompt = buildFinancialQuestionPrompt(
          simulation,
          JSON.stringify(currentInsight),
          trimmedQuestion,
          conversationAfterQuestion,
        )
        const answer = await getFinancialAnswer(prompt)
        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: answer,
        }
        const updatedConversation = [...conversationAfterQuestion, assistantMessage]

        setChatHistory(updatedConversation)
        updateSimulation(id, {
          ...simulation,
          insight: currentInsight,
          chatHistory: updatedConversation,
        })

        return answer
      } catch {
        const errorMessage = 'Não consegui responder agora. Tente novamente.'
        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: errorMessage,
        }
        const updatedConversation = [...conversationAfterQuestion, assistantMessage]

        setChatHistory(updatedConversation)
        setChatError(errorMessage)
        updateSimulation(id, {
          ...simulation,
          insight: currentInsight,
          chatHistory: updatedConversation,
        })

        return null
      } finally {
        setIsChatLoading(false)
      }
    },
    [chatHistory, fetchInsight, id, insight, updateSimulation, getFormData],
  )

  return {
    insight,
    isLoading,
    error,
    fetchInsight,
    chatHistory,
    isChatLoading,
    chatError,
    askQuestion,
  }
}