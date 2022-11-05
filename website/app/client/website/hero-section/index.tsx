export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen justify-center bg-hero-bg bg-cover bg-center px-4 md:py-16"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 md:min-w-[768px]  md:flex-row lg:min-w-[1024px] xl:min-w-[1280px]">
        <div className="flex h-1/2 flex-col justify-evenly md:h-full md:max-h-750 md:w-1/2">
          <div className="w-full">
            <h2 className="font-titles text-xl font-bold">
              Uma dica gratuita para impulsionar as vendas
            </h2>
            <h1 className="font-accent text-xl font-bold uppercase md:text-6xl md:leading-[130%]">
              Despertar o sentido de Urgência
            </h1>
          </div>
          <button className="max-w-max rounded-md bg-blue-400 px-4 py-2">
            <span className="tracki font-body font-bold uppercase text-white ">
              Criar um novo contador
            </span>
          </button>
        </div>

        <div className="flex h-1/2 justify-center md:h-full md:w-1/2">
          <img
            src="/images/mobile-phone-bg.png"
            alt="hero"
            className="h-450 md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
