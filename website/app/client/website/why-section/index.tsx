import Section from "../common/section";
import EditorButton from "../components/editor-button";

export default function WhySection() {
  return (
    <Section id={"why"} className={" py-32"}>
      <div className="grid gap-16 px-4 md:grid-cols-2 md:px-0">
        <div className="flex flex-col justify-center gap-8 ">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="md:leading-1 text-md  font-accent font-bold uppercase tracking-wide md:text-3xl">
              Porque preciso de um contador regressivo
            </h2>
            <p className="md:text-md font-body text-lg md:max-w-[55ch]">
              Prepara-se para o lançamento de um novo produto, evento ou
              promoção e use o contador para aumentar as vendas. Você pode usar
              o contador para qualquer tipo de evento, seja um evento de
              marketing, um evento de vendas ou um evento de lançamento.
            </p>
          </div>
          <EditorButton />
        </div>
        <div className="grid gap-16 md:grid-cols-2 md:grid-rows-2 ">
          <div>
            <h3 className="md:leading-1 mb-4 font-accent font-bold uppercase tracking-wide text-blue-500">
              Motivar seus visitantes a agir
            </h3>
            <p className="md:text-md font-body">
              Faça com que seus visitantes tenham medo de perder muito e
              obrigue-os a comprar imediatamente. O tempo restante até a
              conclusão do termo será exibido, criando um senso de urgência.
            </p>
          </div>
          <div>
            <h3 className="md:leading-1 mb-4 font-accent font-bold uppercase text-blue-500">
              Encoraje seus visitantes a comprar
            </h3>
            <p className="md:text-md font-body">
              Não permita que seus clientes em potencial tenham muito tempo para
              considerar; em vez disso, exiba o temporizador Clockdown para cada
              visitante para encorajá-los a comprar antes que o tempo expire.
            </p>
          </div>
          <div>
            <h3 className="md:leading-1 mb-4 font-accent font-bold uppercase text-blue-500">
              Desperta o Sentido de Urgência
            </h3>
            <p className="md:text-md font-body">
              Um dos sentidos mais fortes para gatilhos mentais é o de urgência,
              o medo de perder uma boa oportunidade. Use o contador regressivo e
              provoque esse sentimento em seus clientes.
            </p>
          </div>
          <div>
            <h3 className="md:leading-1 mb-4 font-accent font-bold uppercase text-blue-500">
              Decisão mais rápida é melhor
            </h3>
            <p className="md:text-md font-body">
              Basta escolher quando o Clockdown deve começar e terminar, e então
              selecionar a ação a ser executada quando o timer expirar. Você
              também pode fornecer uma mensagem que aparecerá acima do timer e
              os motivará a tomar medidas
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
