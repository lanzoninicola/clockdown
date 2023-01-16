import usePremiumFeaturesContext from "~/client/templates-editor/premium-features-provider/hooks/usePremiumFeaturesContext";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";

export default function WaitlistLinkButton() {
  const { waitingListFormURL } = usePremiumFeaturesContext();

  return (
    <a href={waitingListFormURL} target="_blank" rel="noreferrer">
      <button
        type="button"
        className="flex w-full items-center gap-2 rounded-lg bg-yellow-200 py-2 px-16"
      >
        <span className="font-body font-bold uppercase tracking-wide">
          Join the waitlist
        </span>
        <BiLinkExternal className="text-black" />
      </button>
    </a>
  );
}
