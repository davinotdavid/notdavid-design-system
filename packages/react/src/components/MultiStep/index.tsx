import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  numberOfSteps: number
  currentStep?: number
}

export function MultiStep({ numberOfSteps, currentStep = 1 }: MultiStepProps) {
  const stepsArray = Array.from({ length: numberOfSteps }, (_, i) => i + 1)

  return (
    <MultiStepContainer>
      <Label size="sm">
        Step {currentStep} of {numberOfSteps}
      </Label>

      <Steps css={{ '--number-of-steps': numberOfSteps }}>
        {stepsArray.map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
