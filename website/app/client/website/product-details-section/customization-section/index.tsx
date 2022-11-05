import Section from "../../common/section";
import TitleH2 from "../../common/titles/title-h2";

import EditorButton from "../../components/editor-button";

export default function CustomizationSection() {
  return (
    <Section className="px-4 py-32 md:px-0">
      <div className="grid grid-rows-2 items-center gap-8 md:grid-cols-2 md:grid-rows-1">
        <div className="">
          <div className="mb-8 flex flex-col gap-4">
            <TitleH2>Customização para o seu negocio</TitleH2>
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-md font-body md:max-w-prose md:text-xl">
                Com poucos cliques você cria e edita o seu contador. Escolha as
                cores, o estilo e o formato que você deseja, pode até alterar o
                cor de fundo. É fácil e rápido. <br />
              </p>
              <p className="text-md font-body font-bold leading-6 md:text-xl">
                Só a fantasia é o limite.
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
