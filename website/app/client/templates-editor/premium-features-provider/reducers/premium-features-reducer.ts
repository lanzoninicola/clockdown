import type { PremiumFeaturesStateData } from "../types";
import type { PremiumFeaturesAction } from "../types/actions";
import lowercase from "../utils/lowercase";

export const premiumFeatureReducer = (
  state: PremiumFeaturesStateData,
  action: PremiumFeaturesAction
): PremiumFeaturesStateData => {
  switch (action.type) {
    /** This action is used to setup the module */
    case "PREMIUM_FEATURES_INIT_CONFIG":
      return {
        ...state,
        productLandingPageURL: action.payload.productLandingPageURL,
        premiumPlans: action.payload.premiumPlans,
      };

    case "PREMIUM_FEATURES_ENABLED":
      return {
        ...state,
        isPremiumEnabled:
          lowercase(action.payload.role) === "subscriber" ||
          lowercase(action.payload.role) === "admin" ||
          lowercase(action.payload.role) === "superadmin"
            ? true
            : false,
      };

    default:
      return state;
  }
};
