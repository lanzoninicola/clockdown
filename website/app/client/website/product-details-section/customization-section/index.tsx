import { useLoaderData } from "@remix-run/react";
import { type HomePageLoaderData } from "~/routes";
import Section from "../../common/section";
import TitleH2 from "../../common/titles/title-h2";

import EditorButton from "../../components/editor-button";

export default function CustomizationSection() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const sectionContent = loaderData.pageContent.productDetails;

  return (
    <Section className="px-4 py-32 md:px-0">
      <div className="grid grid-rows-2 items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <div className="">
          <div className="mb-8 flex flex-col gap-4">
            <TitleH2>{sectionContent.list[2].title}</TitleH2>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-md font-body md:max-w-prose md:text-xl">
                {sectionContent.list[2].body}
              </p>
            </div>
          </div>
          <EditorButton variant="accent" />
        </div>

        <div className="grid place-items-center">
          <img
            src="/images/customization/customization.png"
            alt="Customize cores, estilo e formato do seu contador"
          />
        </div>
      </div>
    </Section>
  );
}
