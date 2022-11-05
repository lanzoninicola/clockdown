import Section from "../common/section";
import TitleH2 from "../common/titles/title-h2";
import TitleH3 from "../common/titles/title-h3";
import EditorButton from "../components/editor-button";

export default function WhySection() {
  return (
    <Section id="why" className="py-32 px-4 md:px-0">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <TitleH2 className="text-center">
              <span className="text-blue-500">Quatros razões</span> para usar{" "}
              <br />o Contador regressivo
            </TitleH2>
            <p className="text-md text-center font-body md:max-w-[55ch] md:text-lg">
              Prepara-se para o lançamento de um novo produto, evento ou
              promoção e use o contador para aumentar as vendas. Você pode usar
              o contador para qualquer tipo de evento, seja um evento de
              marketing, um evento de vendas ou um evento de lançamento.
            </p>
          </div>
          <div className="grid place-items-center">
            <EditorButton variant="accent" />
          </div>
        </div>
        <div className="grid grid-rows-4 gap-8 md:grid-cols-2 md:grid-rows-2">
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={1} />
              <TitleH3 className="md:text-md">
                Motivar seus visitantes a agir
              </TitleH3>
            </div>
            <p className="md:text-md font-body">
              Faça com que seus visitantes tenham medo de perder muito e
              obrigue-os a comprar imediatamente. O tempo restante até a
              conclusão do termo será exibido, criando um senso de urgência.
            </p>
          </Card>
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={2} />
              <TitleH3>Encoraje seus visitantes a comprar</TitleH3>
            </div>

            <p className="md:text-md font-body">
              Não permita que seus clientes em potencial tenham muito tempo para
              considerar; em vez disso, exiba o temporizador Clockdown para cada
              visitante para encorajá-los a comprar antes que o tempo expire.
            </p>
          </Card>
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={3} />
              <TitleH3>Desperta o Sentido de Urgência</TitleH3>
            </div>

            <p className="md:text-md font-body">
              Um dos sentidos mais fortes para gatilhos mentais é o de urgência,
              o medo de perder uma boa oportunidade. Use o contador regressivo e
              provoque esse sentimento em seus clientes.
            </p>
          </Card>
          <Card>
            <div className="grid grid-flow-col gap-4">
              <NumberRound number={4} />
              <TitleH3>Decisão mais rápida é melhor</TitleH3>
            </div>

            <p className="md:text-md font-body">
              Basta escolher quando o Clockdown deve começar e terminar, e então
              selecionar a ação a ser executada quando o timer expirar. Você
              também pode fornecer uma mensagem que aparecerá acima do timer e
              os motivará a tomar medidas
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
