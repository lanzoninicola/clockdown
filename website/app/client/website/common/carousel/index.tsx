import React from "react";
import FadeIn from "../fade-in/fade-in";

interface CarouselProps {
  children: React.ReactNode;
  interval?: number;
}

export default function Carousel({ children, interval }: CarouselProps) {
  const [currentActiveStep, setCurrentActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(0);
  const stepComponents = React.Children.toArray(children);

  React.useEffect(() => {
    setSteps(stepComponents.length);
  }, [stepComponents]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActiveStep((prev) => {
        if (prev === steps - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [steps, interval]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16">
      {/* <div className="flex flex-row items-center gap-16">
        {Array.from({ length: steps }).map((_, index) => (
          <StepButton
            key={index}
            isActive={currentActiveStep === index}
            onClick={() => setCurrentActiveStep(index)}
          >
            {index + 1}
          </StepButton>
        ))}
      </div> */}
      <div className="flex  flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-1">
          <h3 className="text-center font-titles text-xl font-bold md:text-3xl">
            {stepComponents[currentActiveStep].props.title}
          </h3>
          <h4 className="text-md text-center font-titles md:text-xl">
            {stepComponents[currentActiveStep].props.subtitle}
          </h4>
        </div>
        {stepComponents[currentActiveStep]}
      </div>
    </div>
  );
}

/**
interface StepButtonProps {
  isActive: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

function StepButton({ isActive = false, children, onClick }: StepButtonProps) {
  return (
    <button
      type="button"
      className={`grid h-8 w-8 place-items-center rounded-full bg-blue-md ${
        !isActive && "opacity-25"
      } `}
      onClick={onClick}
    >
      <span className="font-accent font-bold text-black">{children}</span>
    </button>
  );
}
 */
