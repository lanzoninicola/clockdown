import type { PremiumFeaturesAction } from "./actions";

export interface PremiumFeaturesStateData {
  /** The URL of product landing page */
  productLandingPageURL: string;
  /** The URL of waiting list form */
  waitingListFormURL: string;
  /** The premium plans available for the product */
  premiumPlans: string[];
  /** The premium features module is enabled */
  premiumFeaturesModuleEnabled: boolean;
  /** The user is a premium subscriber */
  userRole: PremiumFeaturesUserRoles;
  /** The user is a premium subscriber */
  isPremiumUser: boolean;
}

export interface PremiumFeaturesStateSetter {
  dispatch: (action: PremiumFeaturesAction) => void;
}

export type PremiumFeaturesContextData = PremiumFeaturesStateData &
  PremiumFeaturesStateSetter;

export type PremiumFeaturesUserRoles = "ADMIN" | "SUBSCRIBER" | "USER";
