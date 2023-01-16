import { useLoaderData } from "@remix-run/react";
import { type HomePageLoaderData } from "~/routes";
import FadeIn from "../common/fade-in/fade-in";

import useSteps from "../common/hooks/useSteps";
import Section from "../common/section";

export default function UseCasesSection() {
  const loaderData: HomePageLoaderData = useLoaderData();
  const sectionContent = loaderData?.pageContent?.useCases;

  const { currentActiveStep, selectStep } = useSteps({
    steps: sectionContent.list.length,
    startOnStep: 1,
    interval: 5000,
  });
  //   console.log(t("website.useCases.headline"));
  return (
    <Section
      id="use-cases"
      className="bg-blue-500 px-4 py-16 md:h-[50vh] md:px-64"
    >
      <div
        className="relative grid h-full grid-rows-[.25fr_1fr] gap-4 md:grid-cols-2 md:grid-rows-1"
        data-element="steps-content"
      >
        <div className="container mx-auto flex h-full items-center justify-center font-accent">
          <h1 className="font-accents text-4xl text-white md:leading-tight">
            {sectionContent.headline}
          </h1>
        </div>
        <div className="grid h-full grid-rows-[1fr_.5fr] justify-center gap-16 md:ml-16">
          <FadeIn key={currentActiveStep} clazzName="md:self-end self-center">
            <div className="flex max-w-[600px] flex-col items-center justify-center ">
              <div className="flex flex-col gap-4">
                <h3 className=" font-accent text-lg font-bold uppercase tracking-wider text-black md:text-xl ">
                  {sectionContent.list[currentActiveStep].title}
                </h3>
                <p className="text-md max-w-prose font-titles text-white md:text-xl">
                  {sectionContent.list[currentActiveStep].body}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="flex items-center gap-4 self-start">
            {sectionContent.list.map((useCase, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-full border-2 border-white ${
                  currentActiveStep === index ? "bg-white" : ""
                } ${currentActiveStep === index ? "h-4 w-4" : "h-2 w-2"}`}
                onClick={() => selectStep(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
