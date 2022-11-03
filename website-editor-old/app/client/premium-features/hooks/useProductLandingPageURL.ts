import { useContextSelector } from "use-context-selector";
import { PremiumFeaturesContext } from "../../premium-features-provider/context/premium-features-context";

export default function useProductLandingPageURL() {
  const landingPageURL = useContextSelector(
    PremiumFeaturesContext,
    (ctx) => ctx.landingPageURL
  );

  return landingPageURL;
}
