import usePremiumFeaturesContext from "../../premium-features-provider/hooks/usePremiumFeaturesContext";

export default function useIsPremiumInstallation() {
  const { isPremiumEnabled } = usePremiumFeaturesContext();

  return isPremiumEnabled;
}
