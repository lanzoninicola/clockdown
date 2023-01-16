import { useState, useEffect, useRef } from "react";

interface UseStepsProps {
  steps: number;
  startOnStep?: number;
  interval?: number;
}

export default function useSteps({
  steps,
  startOnStep = 1,
  interval = 5000,
}: UseStepsProps) {
  const timer = useRef<NodeJS.Timer | null>(null);

  const [currentActiveStep, setCurrentActiveStep] = useState<number>(
    startOnStep - 1
  );

  const pause = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const selectStep = (step: number) => {
    pause();
    setCurrentActiveStep(step);
  };

  useEffect(() => {
    timer.current = setInterval(
      () => {
        setCurrentActiveStep((prev) => {
          if (prev === steps - 1) {
            return 0;
          }
          return prev + 1;
        });
      },

      interval
    );

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [steps, interval]);

  return { currentActiveStep, setCurrentActiveStep, selectStep, pause };
}
