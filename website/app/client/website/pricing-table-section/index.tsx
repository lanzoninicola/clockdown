import PayPalButton from "../components/paypal-button";

export default function PricingSection() {
  const commonFeatures = [
    "Nenhuma habilidade de código necessária",
    "Personaliza o título, as etiquetas",
    "Escolha uma fonte exclusiva",
    "Escolha cores extravagantes",
    "Modelos gratuitos prontos para uso",
    "Nascido para ser responsivo",
  ];

  const proFeatures = [
    "Botão de chamada à ação personalizado",
    "Adicionar seu link personalizado",
    "Nenhum limite de customização",
    "Modelos profissionais",
    "Suporte ao cliente",
  ];

  return (
    <section id="pricing-table">
      <div className="mx-auto max-w-screen-xl py-16 px-4 md:py-32 md:px-6">
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          <h2 className="md:leading-1 text-md mb-4 font-accent font-bold uppercase tracking-wide md:text-3xl">
            Planos
          </h2>
          <p className="mb-5 font-body font-light  sm:text-xl">
            Simplificamos tudo, independentemente do tamanho do seu negócio e do
            tráfego para o seu site.
          </p>
        </div>
        <PricingCards>
          <PricingCard
            title={"Starter"}
            subtitle={"Comecemos aqui e vamos crescer juntos"}
            currency={"R$"}
            price={"0"}
            priceDescription={"/por mês"}
            commonFeatures={commonFeatures}
            proFeatures={[]}
          />
          <PricingCard
            title={"Pro"}
            subtitle={"Mais poder mais diversão mais venda"}
            currency={"R$"}
            price={"10"}
            priceDescription={"/por mês"}
            priceAdditionalDescription={"*pagamento anual"}
            commonFeatures={commonFeatures}
            proFeatures={proFeatures}
          >
            {/* <PayPalButton /> */}
          </PricingCard>
        </PricingCards>
      </div>
    </section>
  );
}

interface PricingCardsProps {
  children?: React.ReactNode;
}

function PricingCards({ children }: PricingCardsProps) {
  return (
    <div className="mx-auto w-max space-y-8 sm:gap-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
      {children}
    </div>
  );
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  currency: string;
  price: string;
  priceDescription: string;
  priceAdditionalDescription?: string;
  commonFeatures: string[];
  proFeatures: string[];
  children?: React.ReactNode;
}

function PricingCard({
  title,
  subtitle,
  currency,
  price,
  priceDescription,
  priceAdditionalDescription,
  commonFeatures,
  proFeatures,
  children,
}: PricingCardProps) {
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-xl bg-slate-50 p-6 text-center text-gray-900 shadow-xl xl:p-8">
      <h3 className="mb-4 font-accent text-xl font-semibold uppercase text-blue-500">
        {title}
      </h3>
      <p className="font-titles font-light text-gray-500 dark:text-gray-400 sm:text-lg ">
        {subtitle}
      </p>
      <div className="my-8 flex flex-col">
        <div className=" mb-4 flex items-baseline justify-center">
          <span className="mr-1 font-titles text-xl font-bold ">
            {currency}
          </span>
          <span className="mr-2 font-titles text-5xl font-bold ">{price}</span>
          <span>{priceDescription}</span>
        </div>
        <span className="font-body text-sm text-gray-400">
          {priceAdditionalDescription}
        </span>
      </div>

      {/* List {/*/}
      <ul className="mb-8 space-y-4 text-left">
        {commonFeatures.map((f, idx) => (
          <PricingCardItem key={idx}>{f}</PricingCardItem>
        ))}
        {proFeatures.map((f, idx) => (
          <PricingCardItem key={idx} bolded={true}>
            {f}
          </PricingCardItem>
        ))}
      </ul>
      {children}
    </div>
  );
}

interface PricingCardItemProps {
  children: React.ReactNode;
  bolded?: boolean;
}

function PricingCardItem({ children, bolded }: PricingCardItemProps) {
  return (
    <li
      className={`flex items-center space-x-3 font-body ${
        bolded && "font-bold "
      }`}
    >
      <TickIcon />
      <span>{children}</span>
    </li>
  );
}

function TickIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-blue-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
