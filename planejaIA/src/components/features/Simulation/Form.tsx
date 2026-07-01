import { PiggyBank } from 'lucide-react'
import { FormStep } from './FormStep'
import { StepProgress } from './Progress'
import { simulationFormSteps } from '@/data/simulation'
import { useState } from 'react'

export function SimulationForm() {
  const [inputValue, setInputValue] = useState('')
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = () => {
    if (currentStepIndex + 1 > totalSteps - 1 ){
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
      <StepProgress currentStep={currentStepIndex + 1}
       totalSteps={totalSteps} />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        HideBackButton={currentStepIndex === 0}
      />
    </>
  )
}
