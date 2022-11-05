export default function TemplatesSection() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-tea-base px-4 md:py-64">
      <div className="flex flex-col items-center gap-4 md:my-16 md:w-full md:flex-row">
        <div className="flex h-1/2 flex-col gap-4 md:h-full md:max-h-750 md:w-1/2 md:pl-64">
          <h2 className="md:leading-1 text-md font-accent font-bold uppercase tracking-wide md:text-3xl">
            Templates exclusivos <br />
            que se adaptam <br />a qualquer tema
          </h2>
          <p className="text-md font-body md:w-[55ch] md:text-xl">
            Há temas para todos os gostos, mas se você ainda não consegue
            encontrar o seu, você pode sempre criá-lo do zero. É fácil e rápido,
            basta escolher as cores e o estilo que você deseja.
          </p>
        </div>

        <div className="relative flex h-1/2 items-center justify-center bg-backdrop-blue bg-cover bg-center md:h-full md:w-1/2">
          <img
            src="/images/mobile-phone-bg.png"
            alt="Exemplo de template"
            className="h-[450px] md:h-[650px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:my-16 md:w-full md:flex-row">
        <div className="relative flex h-1/2 items-center justify-center bg-backdrop-blue bg-cover bg-center md:h-full md:w-1/2">
          <img
            src="/images/mobile-phone-bg.png"
            alt="Exemplo de template"
            className="h-[450px] md:h-[650px]"
          />
        </div>

        <div className="flex h-1/2 flex-col gap-4 md:h-full md:max-h-750 md:w-1/2">
          <h2 className="md:leading-1 text-md font-accent font-bold uppercase tracking-wide md:text-3xl">
            Para qualquer <br />
            dispositivo
          </h2>
          <p className="text-md font-body md:w-[45ch] md:text-xl">
            Modelos de contador responsivos para o seu site, blog, loja virtual.
            Você pode usá-los em qualquer dispositivo, seja um smartphone,
            tablet ou desktop.
          </p>
        </div>
      </div>
    </section>
  );
}
