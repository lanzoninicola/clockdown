import Footer from "~/client/website/footer";
import HeroSection from "~/client/website/hero-section";
import HowItWorks from "~/client/website/how-it-works-section";
import PlatformsSection from "~/client/website/platforms-section";
import PricingSection from "~/client/website/pricing-table-section";
import WhySection from "~/client/website/why-section";
import ProductDetailsSection from "~/client/website/product-details-section";

export default function Index() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ProductDetailsSection />
      <PlatformsSection />
      <HowItWorks />
      <PricingSection />
      <Footer />
    </>
  );
}
