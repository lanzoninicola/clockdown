import usePremiumFeaturesContext from "../../premium-features-provider/hooks/usePremiumFeaturesContext";

export default function useIsPremiumInstallation() {
  const { isPro, isAgency } = usePremiumFeaturesContext();

  return isPro || isAgency;
}
