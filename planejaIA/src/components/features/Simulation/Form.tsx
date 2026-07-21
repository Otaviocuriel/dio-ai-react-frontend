import { FormStep } from './FormStep'
import { StepProgress } from './Progress'
import { simulationFormSteps, type SimulationFormData, type SimulationRecord } from '@/data/simulation'
import { useEffect, useState } from 'react'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { useNavigate } from 'react-router-dom'

interface SimulationFormProps {
  initialData?: SimulationRecord | null
}

export function SimulationForm({ initialData = null }: SimulationFormProps) {
  const { saveFormData, updateSimulation } = useSimulationStorage()
  const navigate = useNavigate()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<SimulationFormData>(
    (initialData ?? {}) as SimulationFormData
  )
  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleNextStep = (value: string) => {
    const updatedFormData = { ...formData, [currentStep.id]: value }
    setFormData(updatedFormData)

    if (currentStepIndex + 1 > totalSteps - 1 ){
      const id = initialData?.id ?? saveFormData(updatedFormData)

      if (initialData?.id) {
        updateSimulation(initialData.id, {
          ...updatedFormData,
          id: initialData.id,
        })
      }

      void navigate(`/resultado/${id}`)

      return
    }
    
    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePreviousStep = () =>{
    if (currentStepIndex === 0) {
      return
    }
    
    setCurrentStepIndex((prev) => prev - 1 )
  }

  return (
    <>
      <StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        HideBackButton={currentStepIndex === 0}
        initialValue={formData[currentStep.id as keyof SimulationFormData] ?? ''}
      />
    </>
  )
}
