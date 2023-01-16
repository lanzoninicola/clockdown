import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import ButtonAccentOutline from "~/client/common/primitives/button-accent-outline/button-accent-outline";
import ButtonAccentSolid from "~/client/common/primitives/button-accent-solid/button-accent-solid";
import Section from "../common/section";
import TitleH2 from "../common/titles/title-h2";
import TitleH3 from "../common/titles/title-h3";
import { type HomePageLoaderData } from "~/routes";
import { WaitlistLinkButton } from "~/client/common/waitlist-link-button/waitlist-link-button";
import ButtonOutline from "~/client/common/primitives/button-outline/button-outline";

export default function PricingSection() {
  const loaderData = useLoaderData<HomePageLoaderData>();

  const sectionContent = loaderData.pageContent.pricing;

  return (
    <Section id="pricing-table" className="py-16 md:py-32">
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        <TitleH2>{sectionContent.headline}</TitleH2>
        <p className="mb-5 font-body font-light  sm:text-xl">
          {sectionContent.subheadline}
        </p>
      </div>
      <PricingCards>
        <PricingCard
          title={"Starter"}
          subtitle={sectionContent.starter.subheadline}
          currency={sectionContent.starter.price.currency}
          price={"0"}
          priceDescription={"/por mês"}
          commonFeatures={sectionContent.starter.features}
          proFeatures={[]}
        >
          <Link to="/app" className="w-full">
            <ButtonOutline clazzName="tracking-wider w-full">
              {sectionContent.starter.cta}
            </ButtonOutline>
          </Link>
        </PricingCard>
        <PricingCard
          title={"Pro"}
          subtitle={sectionContent.pro.subheadline}
          currency={sectionContent.pro.price.currency}
          price={"10"}
          priceDescription={"/por mês"}
          priceAdditionalDescription={"*pagamento anual"}
          hidePrice={true}
          commonFeatures={sectionContent.starter.features}
          proFeatures={sectionContent.pro.features}
        >
          {/* <Link to={"/signup?checkout=pro"} className="w-full">
            <ButtonAccentSolid clazzName="tracking-wider w-full">
              {sectionContent.pro.cta}
            </ButtonAccentSolid>
          </Link> */}
          <WaitlistLinkButton />
        </PricingCard>
      </PricingCards>
    </Section>
  );
}

interface PricingCardsProps {
  children?: React.ReactNode;
}

function PricingCards({ children }: PricingCardsProps) {
  return (
    <div className="grid gap-4 md:mx-auto md:w-max md:grid-cols-2 md:gap-8">
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
  hidePrice?: boolean;
  highlight?: boolean;
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
  hidePrice = false,
  highlight = false,
}: PricingCardProps) {
  const clazzName = highlight ? "shadow" : "";

  return (
    <div
      className={`border-3 mx-auto grid min-h-[800px] max-w-lg grid-rows-[200px_450px_auto] rounded-xl border-blue-500 bg-slate-50 p-6 text-center text-gray-900 shadow-xl xl:p-8 ${clazzName}`}
    >
      <div>
        <div>
          <TitleH3 className="tracking-widest text-blue-500">{title}</TitleH3>
          <p className="text-md font-titles font-light text-gray-500 dark:text-gray-400 ">
            {subtitle}
          </p>
        </div>
        {hidePrice === false && (
          <div className="my-8 flex flex-col">
            <div className=" mb-4 flex items-baseline justify-center">
              <span className="mr-1 font-titles text-xl font-bold ">
                {currency}
              </span>
              <span className="mr-2 font-titles text-5xl font-bold ">
                {price}
              </span>
              <span>{priceDescription}</span>
            </div>
            <span className="font-body text-sm text-gray-400">
              {priceAdditionalDescription}
            </span>
          </div>
        )}
      </div>

      {/* List {/*/}
      <ul className="space-y-2 text-left md:space-y-4">
        {commonFeatures.map((f, idx) => (
          <PricingCardItem key={idx}>{f}</PricingCardItem>
        ))}
        {proFeatures.map((f, idx) => (
          <PricingCardItem key={idx} bolded={true}>
            {f}
          </PricingCardItem>
        ))}
      </ul>
      <div className="grid place-items-center">{children}</div>
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
