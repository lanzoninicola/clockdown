interface PremiumFeaturesInitLandingPageAction {
  type: "PREMIUM_FEATURES_INIT_LANDING_PAGE";
  /** the landing page URL */
  payload: string;
}

interface PremiumFeaturesCheckStatus {
  type: "PREMIUM_FEATURES_CHECK_STATUS";
}

interface PremiumFeaturesCheckStatusResponseSuccess {
  type: "PREMIUM_FEATURES_CHECK_STATUS_RESPONSE_SUCCESS";
  /** the premium features status */
  payload: {
    isPro: boolean;
    isAgency: boolean;
  };
}

interface PremiumFeaturesCheckStatusResponseFailed {
  type: "PREMIUM_FEATURES_CHECK_STATUS_RESPONSE_FAILED";
}

export type PremiumFeaturesAction =
  | PremiumFeaturesCheckStatus
  | PremiumFeaturesCheckStatusResponseSuccess
  | PremiumFeaturesCheckStatusResponseFailed
  | PremiumFeaturesInitLandingPageAction;
