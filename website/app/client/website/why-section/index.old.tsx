export default function WhySection() {
  return (
    <section
      id="why"
      className="flex flex-col gap-8 bg-blue-sm px-4 md:items-center  md:justify-center md:bg-blue-md md:py-32"
    >
      <div className="flex flex-col justify-center gap-8 md:max-w-1440">
        <article className="flex flex-col justify-center gap-4  ">
          <h2 className="md:leading-1 text-center font-accent text-2xl font-bold uppercase tracking-wide text-white md:text-6xl">
            Porque preciso de um contador regressivo
          </h2>
          <p className="text-center font-body text-lg md:mx-auto md:max-w-[850px] md:text-2xl">
            Prepara-se para o lançamento de um novo produto, evento ou promoção
            e use o contador para aumentar as vendas. Você pode usar o contador
            para qualquer tipo de evento, seja um evento de marketing, um evento
            de vendas ou um evento de lançamento.
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
                urgência, o medo de perder uma boa oportunidade. Use o contador
                regressivo e provoque esse sentimento em seus clientes.
              </p>
            </article>
            <article className="md:w-1/2">
              <h2 className="md:leading-1 font-titles text-xl font-bold text-white md:text-2xl">
                Aumento de Vendas
              </h2>
              <p className="font-body md:text-lg">
                Não dê a seus clientes em potencial muito tempo para pensar -
                mostre um cronômetro de site pessoal para cada visitante que os
                levará a comprar antes que o tempo acabe. Grande aumento das
                compras por impulso ou na tomada de decisão rápida.
              </p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
