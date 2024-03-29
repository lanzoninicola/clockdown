import { useLoaderData } from "@remix-run/react";
import { type HomePageLoaderData } from "~/routes";
import Carousel from "../../common/carousel";
import FadeIn from "../../common/fade-in/fade-in";
import Section from "../../common/section";
import TitleH2 from "../../common/titles/title-h2";

export default function TemplatesSection() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const sectionContent = loaderData.pageContent.productDetails;

  return (
    <>
      <Section className="bg-tea-base py-16 md:py-32">
        <div className="flex flex-col gap-32">
          <div className="grid-rows-auto grid gap-4 md:grid-cols-2 md:grid-rows-1  md:items-center ">
            <div className="flex flex-col">
              <TitleH2>{sectionContent.list[0].title}</TitleH2>
              <p className="text-md font-body md:w-[55ch] md:text-xl">
                {sectionContent.list[0].body}
              </p>
            </div>
            <div className="grid place-items-center md:place-items-end">
              <Carousel interval={4000}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <FadeIn key={index}>
                    <img
                      src={`/images/templates/${index + 1}.png`}
                      alt="Exemplo de template"
                      className="h-[450px] md:h-[650px]"
                    />
                  </FadeIn>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="grid-rows-auto grid gap-16 md:grid-cols-2 md:grid-rows-1 md:items-center">
            <div className="grid place-items-center md:place-items-start">
              <img
                src="/images/home-all-devices.png"
                alt="Para todos os dispositivos"
              />
            </div>
            <div className="flex flex-col">
              <TitleH2>{sectionContent.list[1].title}</TitleH2>
              <p className="text-md font-body md:w-[55ch] md:text-xl">
                {sectionContent.list[1].body}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
