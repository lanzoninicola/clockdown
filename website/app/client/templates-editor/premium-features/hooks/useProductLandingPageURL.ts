import { useContextSelector } from "use-context-selector";
import { PremiumFeaturesContext } from "../../premium-features-provider/context/premium-features-context";

export default function useProductLandingPageURL() {
  const productLandingPageURL = useContextSelector(
    PremiumFeaturesContext,
    (ctx) => ctx.productLandingPageURL
  );

  return productLandingPageURL;
}
