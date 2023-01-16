import { useLoaderData } from "@remix-run/react";
import StepButton from "~/client/common/primitives/step-button/step-button";
import { type HomePageLoaderData } from "~/routes";
import FadeIn from "../common/fade-in/fade-in";
import useSteps from "../common/hooks/useSteps";
import Section from "../common/section";
import TitleH2 from "../common/titles/title-h2";

export default function HowItWorks() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const sectionContent = loaderData.pageContent.howItWorks;
  const steps = sectionContent.list;

  return (
    <Section id="how-it-works" className="bg-tea-base  py-32 md:min-h-[1400px]">
      <TitleH2 className="mb-8 text-center">{sectionContent.headline}</TitleH2>
      <div>
        <HowItWorksSteps
          steps={steps}
          stepsNumber={steps.length}
          startOnStep={1}
        />
      </div>
    </Section>
  );
}

interface HowItWorksStepsProps {
  steps: {
    title: string;
    body: string;
  }[];
  stepsNumber: number;
  startOnStep: number;
}

function HowItWorksSteps({
  steps,
  stepsNumber,
  startOnStep,
}: HowItWorksStepsProps) {
  const { currentActiveStep, selectStep } = useSteps({
    steps: stepsNumber,
    startOnStep,
    interval: 5000,
  });

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16">
      <div className="flex flex-row items-center gap-16">
        {Array.from({ length: stepsNumber }).map((_, index) => (
          <StepButton
            key={index}
            isActive={currentActiveStep === index}
            onClick={() => selectStep(index)}
          >
            {index + 1}
          </StepButton>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col gap-1">
          <h3 className="text-center font-titles text-xl font-bold md:text-3xl">
            {steps[currentActiveStep].title}
          </h3>
          <h4 className="text-md text-center font-titles md:text-xl">
            {steps[currentActiveStep].body}
          </h4>
        </div>

        <StepBodyImage stepNumber={currentActiveStep + 1} />
      </div>
    </div>
  );
}

function StepBodyImage({ stepNumber }: { stepNumber: number }) {
  const { locale } = useLoaderData<HomePageLoaderData>();
  return (
    <FadeIn key={stepNumber}>
      <img src={`/images/how-it-works/${locale}/${stepNumber}.png`} alt="" />
    </FadeIn>
  );
}
