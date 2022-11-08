import { PremiumFeaturesStateData } from "../types";
import { PremiumFeaturesAction } from "../types/actions";

export const premiumFeatureReducer = (
  state: PremiumFeaturesStateData,
  action: PremiumFeaturesAction
): PremiumFeaturesStateData => {
  switch (action.type) {
    case "PREMIUM_FEATURES_INIT_LANDING_PAGE":
      return {
        ...state,
        landingPageURL: action.payload,
      };
    case "PREMIUM_FEATURES_CHECK_STATUS":
      return {
        ...state,
      };
    case "PREMIUM_FEATURES_CHECK_STATUS_RESPONSE_SUCCESS":
      return {
        ...state,
        isPro: action.payload.isPro,
        isAgency: action.payload.isAgency,
      };
    case "PREMIUM_FEATURES_CHECK_STATUS_RESPONSE_FAILED":
      return {
        ...state,
      };

    default:
      return state;
  }
};
