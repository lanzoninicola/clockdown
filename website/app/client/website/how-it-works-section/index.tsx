import { useEffect, useState } from "react";
import FadeIn from "../common/fade-in/fade-in";
import Section from "../common/section";
import TitleH2 from "../common/titles/title-h2";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-tea-base  py-32 md:min-h-[1400px]">
      <TitleH2 className="mb-8 text-center">Como funciona</TitleH2>
      <div>
        <HowItWorksSteps steps={4} startOnStep={1} />
      </div>
    </Section>
  );
}

interface HowItWorksStepsProps {
  steps: number;
  startOnStep: number;
}

function HowItWorksSteps({ steps, startOnStep }: HowItWorksStepsProps) {
  const [currentActiveStep, setCurrentActiveStep] = useState<number>(
    startOnStep - 1
  );

  const stepComponents = [
    {
      title: "Escolha a data e o fuso horário para o seu contador regressivo",
      subtitle:
        "Seus clientes estão espalhados por todo o mundo? Não há problema com isso.",
      body: "",
    },
    {
      title: "Personalizar conforme a necessidade",
      subtitle: "Não se preocupe, nós não julgamos ninguém!",
      body: "",
    },
    {
      title: "Gere e copia o código",
      subtitle: "É aqui que a magia acontece",
      body: "",
    },
    {
      title: "Cola o código no seu site",
      subtitle: "Colar, salvar e vender mais...",
      body: "",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCurrentActiveStep((prev) => {
          if (prev === steps - 1) {
            return 0;
          }
          return prev + 1;
        });
      },

      5000
    );

    return () => clearInterval(timer);
  }, [steps]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16">
      <div className="flex flex-row items-center gap-16">
        {Array.from({ length: steps }).map((_, index) => (
          <StepButton
            key={index}
            isActive={currentActiveStep === index}
            onClick={() => setCurrentActiveStep(index)}
          >
            {index + 1}
          </StepButton>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-1">
          <h3 className="text-center font-titles text-xl font-bold md:text-3xl">
            {stepComponents[currentActiveStep].title}
          </h3>
          <h4 className="text-md text-center font-titles md:text-xl">
            {stepComponents[currentActiveStep].subtitle}
          </h4>
        </div>

        <StepBodyImage step={currentActiveStep + 1} />
      </div>
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
      className={`grid h-8 w-8 place-items-center rounded-full bg-blue-md ${
        !isActive && "opacity-25"
      } `}
      onClick={onClick}
    >
      <span className="font-accent font-bold text-black">{children}</span>
    </button>
  );
}

function StepBodyImage({ step }: { step: number }) {
  return (
    <FadeIn key={step}>
      <img src={`/images/how-it-works/pt/${step}.png`} alt="" />
    </FadeIn>
  );
}
