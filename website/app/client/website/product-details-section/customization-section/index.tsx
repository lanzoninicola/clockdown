import EditorButton from "../../components/editor-button";

export default function CustomizationSection() {
  return (
    <section className="flex flex-col gap-8 bg-blue-sm px-4 py-32  md:items-center md:justify-center md:bg-blue-md">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 md:min-w-[768px] md:flex-row lg:min-w-[1024px] xl:min-w-[1280px]">
        <div className="h-1/2 md:h-full md:max-h-750 md:w-1/2">
          <div className="mb-8 flex flex-col gap-4">
            <h2 className="md:leading-1 text-md  font-accent font-bold uppercase tracking-wide md:text-4xl">
              Customização para o seu negocio
            </h2>
            <p className="text-md font-body md:w-[55ch] md:text-xl">
              Com poucos cliques você cria e edita o seu contador.
            </p>
            <p className="text-md font-body md:w-[55ch] md:text-xl">
              Escolha as cores, o estilo e o formato que você deseja. Você pode
              até alterar o cor de fundo. É fácil e rápido.
            </p>
            <p className="text-md font-body md:w-[55ch] md:text-xl">
              Só a fantasia é o limite.
            </p>
          </div>
          <EditorButton variant="secondary" />
        </div>

        <div className="flex h-1/2 justify-center md:h-full md:w-1/2">
          <img
            src="/images/customization/customization.png"
            alt="Customize cores, estilo e formato do seu contador"
          />
        </div>
      </div>
    </section>
  );
}
