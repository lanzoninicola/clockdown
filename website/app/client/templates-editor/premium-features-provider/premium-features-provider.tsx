import { useEffect, useReducer } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { PremiumFeaturesContext } from "./context/premium-features-context";
import { premiumFeatureReducer } from "./reducers/premium-features-reducer";
import { PremiumFeaturesConfig } from "./types";

interface PremiumFeatureProviderProps {
  children: React.ReactNode;
  config: PremiumFeaturesConfig;
}

export default function PremiumFeatureProvider({
  children,
  config,
}: PremiumFeatureProviderProps) {
  const [state, dispatch] = useReducer(premiumFeatureReducer, {
    ...INITIAL_STATE,
  });

  useEffect(() => {
    dispatch({
      type: "PREMIUM_FEATURES_INIT_LANDING_PAGE",
      payload: config.productPublicWebsiteURL,
    });
  }, [config]);

  return (
    <PremiumFeaturesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PremiumFeaturesContext.Provider>
  );
}
