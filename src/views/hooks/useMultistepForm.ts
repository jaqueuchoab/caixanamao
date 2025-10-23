import { useState } from 'react';
import { FormStep } from 'src/@types/form-step';

interface UseMultiStepFormProps {
	steps: FormStep[];
}

export default function useMultiStepForm({ steps }: UseMultiStepFormProps) {
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

	async function nextStep() {
		setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
	}

	function previousStep() {
		setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
	}

	function navigateToStep(stepIndex: number) {
		setCurrentStepIndex(stepIndex - 1);
	}

	return {
		currentStep: steps[currentStepIndex].step,
		currentStepIndex,

		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,

		nextStep,
		previousStep,
		navigateToStep,
	};
}
