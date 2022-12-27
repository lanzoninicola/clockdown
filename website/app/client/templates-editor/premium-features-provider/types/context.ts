import type { PremiumFeaturesAction } from "./actions";

export interface PremiumFeaturesStateData {
  /** The URL of product landing page */
  productLandingPageURL: string;
  /** The premium plans available for the product */
  premiumPlans: string[];
  /** The premium features is enabled */
  isPremiumEnabled: boolean;
}

export interface PremiumFeaturesStateSetter {
  dispatch: (action: PremiumFeaturesAction) => void;
}

export type PremiumFeaturesContextData = PremiumFeaturesStateData &
  PremiumFeaturesStateSetter;
