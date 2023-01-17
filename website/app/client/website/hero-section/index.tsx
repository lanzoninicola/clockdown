import { useLoaderData } from "@remix-run/react";
import { type HomePageLoaderData } from "~/routes";
import Section from "../common/section";
import EditorButton from "../components/editor-button";

export default function HeroSection() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const content = loaderData.pageContent.hero;

  return (
    <Section id="hero" className="bg-hero-bg bg-cover bg-center py-16 ">
      <div className="grid grid-rows-2 items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col gap-16">
          <div>
            <div className="mb-8 flex flex-col">
              <h1 className="mb-4 font-accent text-2xl font-bold uppercase tracking-wide md:text-4xl md:leading-[130%]">
                {content.headline}
              </h1>
              <h3 className="font-accent text-xl font-bold uppercase tracking-wide text-accent-500 ">
                {content.subheadline}
              </h3>
            </div>
            <h3 className="text-md font-titles ">{content.subsubheadline}</h3>
          </div>
          <EditorButton variant="accent" label={content.cta} />
        </div>
        <div className="grid place-items-center">
          <picture>
            <img
              src="/images/hero.png"
              alt="hero"
              className="h-450 animate-float md:h-[851px] "
            />
          </picture>
        </div>
      </div>
    </Section>
  );
}
