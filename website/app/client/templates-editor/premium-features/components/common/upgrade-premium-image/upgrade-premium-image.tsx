import beTheHero from "../../../assets/images/be-the-hero.png";

interface UpgradePremiumImageProps {
  width?: string;
}

export default function UpgradePremiumImage({
  width,
}: UpgradePremiumImageProps) {
  return <img src={beTheHero} alt="upgrade to premium" width={width} />;
}
