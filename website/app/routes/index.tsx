export default function Index() {
  return (
    <>
      <div className="h-16"></div>
      <section className="flex min-h-screen justify-center bg-hero-bg bg-cover bg-center px-4">
        <div className="flex flex-col gap-4 md:max-w-1440 md:flex-row">
          <div className="flex h-1/2 flex-col justify-evenly md:h-full md:max-h-750 md:w-1/2">
            <div className="w-full">
              <h2 className="font-titles text-xl font-bold">
                #1 dica para impulsionar as vendas
              </h2>
              <h1 className="md:leading-1 font-accent text-xl font-bold uppercase md:text-6xl">
                Desperta o Sentido de Urgência
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
      <section className="flex flex-col gap-8 bg-blue-sm px-4 py-32  md:items-center md:justify-center md:bg-blue-md">
        <div className="flex flex-col justify-center gap-8 md:max-w-1440 ">
          <article className="flex flex-col gap-4">
            <h2 className="md:leading-1 text-center font-accent text-2xl font-bold uppercase tracking-wide text-white md:text-6xl">
              Porque preciso de um contador regressivo
            </h2>
            <p className="text-center font-body text-lg">
              O contador regressivo é uma ferramenta que mostra quanto tempo
              resta para uma data especificada - quantos dias, horas, minutos e
              segundos faltam para Black Friday, Halloween ou qualquer outro
              evento.
            </p>
          </article>
          <article className="flex flex-col gap-4 md:flex-row">
            <article className="md:w-1/2">
              <h2 className="md:leading-1 text-md font-accent font-bold uppercase text-white md:text-xl">
                Desperta o Sentido de Urgência
              </h2>
              <p className="font-body">
                Um dos sentidos mais fortes para gatilhos mentais é o de
                urgência, o medo de perder uma boa oportunidade. Use o contador
                regressivo e provoque esse sentimento em seus clientes.
              </p>
            </article>
            <article className="md:w-1/2">
              <h2 className="md:leading-1 text-md font-accent font-bold uppercase text-white md:text-xl">
                Aumento de Vendas
              </h2>
              <p className="font-body">
                Não dê a seus clientes em potencial muito tempo para pensar -
                mostre um cronômetro de site pessoal para cada visitante que os
                levará a comprar antes que o tempo acabe. Grande aumento das
                compras por impulso ou na tomada de decisão rápida.
              </p>
            </article>
          </article>
        </div>
      </section>
    </>
  );
}
