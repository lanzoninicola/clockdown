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
    subsubheadline: string;
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
  footer: {
    quote: {
      text: string;
      explanation: string;
    };
    menus: {
      home: {
        title: string;
        links: {
          home: string;
          why: string;
          productDetails: string;
          howItWorks: string;
          pricing: string;
        };
      };
      legal: {
        title: string;
        links: {
          terms: string;
          privacy: string;
        };
      };
    };
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
  cta: string;
}

export interface HomePageLoaderData {
  locale: GlobalLoaderData["locale"];
  pageContent: HomePageContent;
  waitlistData: GlobalLoaderData["waitlistData"];
}

export interface WaitlistData {
  formURLs: {
    pt: string;
    en: string;
  };
  pageContent: {
    cta: string;
  };
}

export interface GlobalLoaderData {
  locale: "en" | "pt";
  waitlistData: WaitlistData;
}

export let loader = async ({ request }: LoaderArgs) => {
  let locale = await i18next.getLocale(request);
  const t = await i18next.getFixedT(request);
  const pageContent = {
    hero: {
      headline: t("website.hero.headline"),
      subheadline: t("website.hero.subheadline"),
      subsubheadline: t("website.hero.subsubheadline"),
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
    pricing: {
      headline: t("website.pricing.headline"),
      subheadline: t("website.pricing.subheadline"),
      starter: {
        headline: t("website.pricing.starter.headline"),
        subheadline: t("website.pricing.starter.subheadline"),
        price: {
          currency: t("website.pricing.starter.price.currency"),
          interval: t("website.pricing.starter.price.interval"),
          note: t("website.pricing.starter.price.note"),
        },
        features: Array.from({ length: 6 }, (_, i) =>
          t(`website.pricing.starter.features.${i}`)
        ),
        cta: t("website.pricing.starter.cta"),
      },
      pro: {
        headline: t("website.pricing.pro.headline"),
        subheadline: t("website.pricing.pro.subheadline"),
        price: {
          currency: t("website.pricing.pro.price.currency"),
          interval: t("website.pricing.pro.price.interval"),
          note: t("website.pricing.pro.price.note"),
        },
        features: Array.from({ length: 5 }, (_, i) =>
          t(`website.pricing.pro.features.${i}`)
        ),
        cta: t("website.pricing.pro.cta"),
      },
    },
    footer: {
      quote: {
        text: t("website.footer.quote.text"),
        explanation: t("website.footer.quote.explanation"),
      },
      menus: {
        home: {
          title: t("website.footer.menus.home.title"),
          links: {
            home: t("website.footer.menus.home.links.home"),
            why: t("website.footer.menus.home.links.why"),
            productDetails: t("website.footer.menus.home.links.productDetails"),
            howItWorks: t("website.footer.menus.home.links.howItWorks"),
            pricing: t("website.footer.menus.home.links.pricing"),
          },
        },

        legal: {
          title: t("website.footer.menus.legal.title"),
          links: {
            terms: t("website.footer.menus.legal.links.terms"),
            privacy: t("website.footer.menus.legal.links.privacy"),
          },
        },
      },
    },
  };

  const waitlistData = {
    formURLs: {
      pt: "https://forms.gle/zqPKkNkTtFRHWSqbA",
      en: "https://forms.gle/8pmazeb96i5ZkENH9",
    },
    pageContent: {
      cta: t("waitlist.cta"),
    },
  };

  return json({
    locale,
    pageContent,
    waitlistData,
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
