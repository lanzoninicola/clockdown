import type { User } from "@prisma/client";
import { useEffect, useReducer } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { PremiumFeaturesContext } from "./context/premium-features-context";
import { premiumFeatureReducer } from "./reducers/premium-features-reducer";
import type {
  PremiumFeaturesContextData,
  PremiumFeaturesUserRoles,
} from "./types/context";

interface PremiumFeatureProviderProps {
  children: React.ReactNode;
  config: Partial<PremiumFeaturesContextData>;
  userRole: PremiumFeaturesUserRoles;
}

export default function PremiumFeatureProvider({
  children,
  config,
  userRole,
}: PremiumFeatureProviderProps) {
  const [state, dispatch] = useReducer(premiumFeatureReducer, {
    ...INITIAL_STATE,
  });

  useEffect(() => {
    dispatch({
      type: "PREMIUM_FEATURES_INIT_CONFIG",
      payload: {
        productLandingPageURL:
          config?.productLandingPageURL || INITIAL_STATE.productLandingPageURL,
        premiumPlans: config?.premiumPlans || INITIAL_STATE.premiumPlans,
      },
    });
  }, [config]);

  useEffect(() => {
    dispatch({
      type: "PREMIUM_FEATURES_ENABLED",
      payload: {
        role: userRole as User["role"],
      },
    });
  }, [userRole]);

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
