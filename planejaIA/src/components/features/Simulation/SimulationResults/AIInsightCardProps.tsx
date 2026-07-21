import 'react-loading-skeleton/dist/skeleton.css'

import { useEffect, useMemo, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Bot, Send } from 'lucide-react'

import { useInsight } from '@/hooks/useInsight'
import { Button } from '@/components/shared/Button'
import { Input } from '@/components/shared/Input'

import { Content } from '../Insights/Content'
import { Error } from '../Insights/Error'

interface AIInsightCardProps {
  simulationId: string
}

export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
  const {
    insight,
    isLoading,
    error,
    fetchInsight,
    chatHistory,
    isChatLoading,
    chatError,
    askQuestion,
  } = useInsight(simulationId)
  const [question, setQuestion] = useState('')
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatHistory, isChatLoading])

  const canSend = useMemo(() => question.trim().length > 0 && !isChatLoading, [question, isChatLoading])

  const handleAsk = async () => {
    const currentQuestion = question
    setQuestion('')
    await askQuestion(currentQuestion)
  }

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <Bot size={16} className="text-primary" />
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && (
        <div className="flex">
          <Skeleton
            count={10.5}
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
            className="mb-3 flex rounded-lg"
            containerClassName="flex-1"
            inline
          />
        </div>
      )}
      {!isLoading && error && (
        <Error
          simulationId={simulationId}
          message={error}
          onRetry={() => {
            fetchInsight(simulationId)
          }}
        />
      )}
      {!isLoading && insight && !error && <Content insight={insight} />}

      {!isLoading && insight && !error && (
        <div className="mt-6 border-t border-border pt-5">
          <div className="mb-4 flex flex-col gap-3">
            {chatHistory.length === 0 && (
              <p className="text-muted-foreground text-sm">
                Pergunte algo sobre a sua simulação para continuar a conversa.
              </p>
            )}

            {chatHistory.map((message) => (
              <div
                key={message.id}
                className={[
                  'max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                  message.role === 'user'
                    ? 'ml-auto bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground',
                ].join(' ')}
              >
                {message.content}
              </div>
            ))}

            {isChatLoading && (
              <div className="bg-secondary text-muted-foreground max-w-[92%] rounded-2xl px-4 py-3 text-sm">
                Pensando na resposta...
              </div>
            )}

            {chatError && (
              <p className="text-sm text-red-500">{chatError}</p>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Faça uma pergunta sobre sua simulação"
            />
            <Button
              variant="primary"
              icon={Send}
              className="sm:w-auto"
              disabled={!canSend}
              onClick={() => void handleAsk()}
            >
              Perguntar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}