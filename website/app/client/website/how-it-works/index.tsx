import { useState } from "react";

export default function HowItWorks() {
  return (
    <section className="flex min-h-screen flex-col items-center gap-8 bg-tea-all md:py-32">
      <div className="flex flex-col justify-center gap-8 md:max-w-1440">
        <h2 className="md:leading-1 text-md  font-accent font-bold uppercase tracking-wide md:text-4xl">
          Como funciona
        </h2>
      </div>
      <div>
        <HowItWorksSteps steps={4} />
      </div>
    </section>
  );
}

interface HowItWorksStepsProps {
  steps: number;

  children?: React.ReactNode;
}

function HowItWorksSteps({
  steps,

  children,
}: HowItWorksStepsProps) {
  const [currentActiveStep, setCurrentActiveStep] = useState<number>(1);

  return (
    <div className="flex flex-row items-center gap-16">
      {Array.from({ length: steps }).map((_, index) => (
        <StepButton key={index} isActive={currentActiveStep === index + 1}>
          {index + 1}
        </StepButton>
      ))}
    </div>
  );
}

interface StepButtonProps {
  isActive: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

function StepButton({ isActive = false, children, onClick }: StepButtonProps) {
  return (
    <button
      type="button"
      className="grid h-8 w-8 place-items-center rounded-full bg-blue-md disabled:opacity-25"
      disabled={isActive === false}
      onClick={() => alert("clicked")}
    >
      <span className="font-accent font-bold text-black">{children}</span>
    </button>
  );
}
