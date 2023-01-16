import Footer from "~/client/website/footer";
import HeroSection from "~/client/website/hero-section";
import HowItWorks from "~/client/website/how-it-works-section";
import PlatformsSection from "~/client/website/platforms-section";
import PricingSection from "~/client/website/pricing-table-section";
import WhySection from "~/client/website/why-section";
import ProductDetailsSection from "~/client/website/product-details-section";
import UseCasesSection from "~/client/website/use-cases-section/use-cases-section";
import i18next from "~/i18n.server";
import { type LoaderArgs, json } from "@remix-run/node";

export interface HomePageContent {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  useCases: {
    headline: string;
    list: {
      title: string;
      body: string;
    }[];
  };
  reasons: {
    headline: string;
    cta: string;
    list: {
      title: string;
      body: string;
    }[];
  };
  productDetails: {
    list: {
      title: string;
      body: string;
    }[];
  };
  platforms: {
    headline: string;
  };
  howItWorks: {
    headline: string;
    list: {
      title: string;
      body: string;
    }[];
  };
  pricing: {
    headline: string;
    subheadline: string;
    starter: HomePagePlan;
    pro: HomePagePlan;
  };
}

export interface HomePagePlan {
  headline: string;
  subheadline: string;
  price: {
    currency: string;
    interval: string;
    note: string;
  };
  features: string[];
}

export interface HomePageLoaderData {
  locale: string;
  pageContent: HomePageContent;
}

export let loader = async ({ request }: LoaderArgs) => {
  let locale = await i18next.getLocale(request);
  const t = await i18next.getFixedT(request);
  const pageContent = {
    hero: {
      headline: t("website.hero.headline"),
      subheadline: t("website.hero.subheadline"),
      cta: t("website.hero.cta"),
    },
    useCases: {
      headline: t("website.useCases.headline"),
      list: Array.from({ length: 7 }, (_, i) => ({
        title: t(`website.useCases.${i}.title`),
        body: t(`website.useCases.${i}.body`),
      })),
    },
    reasons: {
      headline: t("website.reasons.headline"),
      cta: t("website.reasons.cta"),
      list: Array.from({ length: 4 }, (_, i) => ({
        title: t(`website.reasons.${i}.title`),
        body: t(`website.reasons.${i}.body`),
      })),
    },
    productDetails: {
      list: Array.from({ length: 3 }, (_, i) => ({
        title: t(`website.productDetails.${i}.title`),
        body: t(`website.productDetails.${i}.body`),
      })),
    },
    platforms: {
      headline: t("website.platforms.headline"),
    },
    howItWorks: {
      headline: t("website.howItWorks.headline"),
      list: Array.from({ length: 3 }, (_, i) => ({
        title: t(`website.howItWorks.${i}.title`),
        body: t(`website.howItWorks.${i}.body`),
      })),
    },
  };

  return json({
    locale,
    pageContent,
  });
};
export default function Index() {
  return (
    <>
      <HeroSection />
      <UseCasesSection />
      <WhySection />
      <ProductDetailsSection />
      <PlatformsSection />
      <HowItWorks />
      <PricingSection />
      <Footer />
    </>
  );
}
