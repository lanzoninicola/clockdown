export default function CustomizationSection() {
  return (
    <section className="flex flex-col gap-8 bg-blue-sm px-4 py-32  md:items-center md:justify-center md:bg-blue-md">
      <div className="flex flex-col gap-4 md:max-w-1440 md:flex-row">
        <div className="flex h-1/2 flex-col gap-4 md:h-full md:max-h-750 md:w-1/2">
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
          <button className="max-w-max rounded-md bg-gray-400 px-4 py-2">
            <span className="tracki font-body font-bold uppercase text-white ">
              Crie o seu novo contador
            </span>
          </button>
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
