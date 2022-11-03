import CustomizationSection from "~/client/website/customization-section";
import HowItWorks from "~/client/website/how-it-works";
import PlatformsSection from "~/client/website/platforms-section";

export default function Index() {
  return (
    <>
      <section className="flex min-h-screen justify-center bg-hero-bg bg-cover bg-center px-4 md:py-16">
        <div className="flex flex-col gap-4 md:max-w-1440 md:flex-row">
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
      <section className="flex flex-col gap-8 bg-blue-sm px-4 md:items-center  md:justify-center md:bg-blue-md md:py-32">
        <div className="flex flex-col justify-center gap-8 md:max-w-1440">
          <article className="flex flex-col justify-center gap-4  ">
            <h2 className="md:leading-1 text-center font-accent text-2xl font-bold uppercase tracking-wide text-white md:text-6xl">
              Porque preciso de um contador regressivo
            </h2>
            <p className="text-center font-body text-lg md:mx-auto md:max-w-[850px] md:text-2xl">
              Prepara-se para o lançamento de um novo produto, evento ou
              promoção e use o contador para aumentar as vendas. Você pode usar
              o contador para qualquer tipo de evento, seja um evento de
              marketing, um evento de vendas ou um evento de lançamento.
            </p>
          </article>
          <article className="flex  justify-center gap-4 md:flex-row">
            <div className="flex flex-col gap-4 md:max-w-[800px] md:flex-row md:gap-8">
              <article className="md:w-1/2">
                <h2 className="md:leading-1 font-titles text-xl font-bold text-white md:text-2xl">
                  Desperta o Sentido de Urgência
                </h2>
                <p className="font-body md:text-lg">
                  Um dos sentidos mais fortes para gatilhos mentais é o de
                  urgência, o medo de perder uma boa oportunidade. Use o
                  contador regressivo e provoque esse sentimento em seus
                  clientes.
                </p>
              </article>
              <article className="md:w-1/2">
                <h2 className="md:leading-1 font-titles text-xl font-bold text-white md:text-2xl">
                  Aumento de Vendas
                </h2>
                <p className="font-body md:text-lg">
                  Não dê a seus clientes em potencial muito tempo para pensar -
                  mostre um cronômetro de site pessoal para cada visitante que
                  os levará a comprar antes que o tempo acabe. Grande aumento
                  das compras por impulso ou na tomada de decisão rápida.
                </p>
              </article>
            </div>
          </article>
        </div>
      </section>
      <section className="flex min-h-screen flex-col items-center bg-tea-all px-4 md:py-64">
        <div className="flex flex-col items-center gap-4 md:my-16 md:w-full md:flex-row">
          <div className="flex h-1/2 flex-col gap-4 md:h-full md:max-h-750 md:w-1/2 md:pl-64">
            <h2 className="md:leading-1 text-md font-accent font-bold uppercase tracking-wide md:text-3xl">
              Templates exclusivos <br />
              que se adaptam <br />a qualquer tema
            </h2>
            <p className="text-md font-body md:w-[55ch] md:text-xl">
              Há temas para todos os gostos, mas se você ainda não consegue
              encontrar o seu, você pode sempre criá-lo do zero. É fácil e
              rápido, basta escolher as cores e o estilo que você deseja.
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
              Modelos de contador responsivos para o seu site, blog, loja
              virtual. Você pode usá-los em qualquer dispositivo, seja um
              smartphone, tablet ou desktop.
            </p>
          </div>
        </div>
      </section>
      <CustomizationSection />
      <PlatformsSection />
      <HowItWorks />
    </>
  );
}
