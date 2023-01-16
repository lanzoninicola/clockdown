import { useLoaderData } from "@remix-run/react";
import { type HomePageLoaderData } from "~/routes";
import Section from "../common/section";
import TitleH2 from "../common/titles/title-h2";
import TitleH3 from "../common/titles/title-h3";
import EditorButton from "../components/editor-button";

export default function WhySection() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const sectionContent = loaderData.pageContent.reasons;

  return (
    <Section id="why" className="py-32 px-4 md:px-0">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <TitleH2 className="max-w-[20ch] text-center">
              {sectionContent.headline}
            </TitleH2>
            {/* <p className="text-md text-center font-body md:max-w-[55ch] md:text-lg">
              Prepara-se para o lançamento de um novo produto, evento ou
              promoção e use o contador para aumentar as vendas. Você pode usar
              o contador para qualquer tipo de evento, seja um evento de
              marketing, um evento de vendas ou um evento de lançamento.
            </p> */}
          </div>
          <div className="grid place-items-center">
            <EditorButton variant="accent" label={sectionContent.cta} />
          </div>
        </div>
        <div className="grid grid-rows-4 gap-8 md:grid-cols-2 md:grid-rows-2">
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={1} />
              <TitleH3 className="md:text-md">
                {sectionContent.list[0].title}
              </TitleH3>
            </div>
            <p className="md:text-md font-body">
              {sectionContent.list[0].body}
            </p>
          </Card>
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={2} />
              <TitleH3>{sectionContent.list[1].title}</TitleH3>
            </div>

            <p className="md:text-md font-body">
              {sectionContent.list[1].body}
            </p>
          </Card>
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={3} />
              <TitleH3>{sectionContent.list[2].title}</TitleH3>
            </div>

            <p className="md:text-md font-body">
              {sectionContent.list[2].body}
            </p>
          </Card>
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={4} />
              <TitleH3>{sectionContent.list[3].title}</TitleH3>
            </div>

            <p className="md:text-md font-body">
              {sectionContent.list[3].body}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

interface CardProp {
  children: React.ReactNode;
}

function Card({ children }: CardProp) {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 rounded-xl bg-slate-50 p-6 text-gray-900 shadow-xl xl:p-8">
      {children}
    </div>
  );
}

function NumberRound({ number }: { number: number }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-full border-4 border-solid border-blue-500">
      <span className="text-md font-body font-bold leading-none text-blue-500">
        {number}
      </span>
    </div>
  );
}
