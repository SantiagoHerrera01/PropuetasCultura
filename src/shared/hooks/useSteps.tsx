import { useState } from "react";

type useStepsProps = {
  initialStep?: number;
  stepsNumber: number;
};

const useSteps = (props: useStepsProps) => {
  const { initialStep, stepsNumber } = props;
  const [currentStep, setCurrentStep] = useState(initialStep || 0);

  const nextStep = () => {
    setCurrentStep((idx: number) => {
      if (idx + 1 >= stepsNumber) return idx;
      return idx + 1;
    });
  };

  const prevStep = () => {
    setCurrentStep((idx: number) => {
      if (idx - 1 < 0) return idx;
      return idx - 1;
    });
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const resetSteps = () => {
    setCurrentStep(initialStep || 0);
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    resetSteps
  };
};

export default useSteps;
