import type { User } from "@prisma/client";
import type { PremiumFeaturesContextData } from "./context";

interface PremiumFeaturesInitConfigAction {
  type: "PREMIUM_FEATURES_INIT_CONFIG";
  payload: {
    /** The URL of product landing page */
    productLandingPageURL: PremiumFeaturesContextData["productLandingPageURL"];
    /** The premium features level available for the module */
    premiumPlans: PremiumFeaturesContextData["premiumPlans"];
  };
}

interface PremiumFeaturesEnabledAction {
  type: "PREMIUM_FEATURES_ENABLED";
  payload: {
    role: User["role"];
  };
}

export type PremiumFeaturesAction =
  | PremiumFeaturesInitConfigAction
  | PremiumFeaturesEnabledAction;
