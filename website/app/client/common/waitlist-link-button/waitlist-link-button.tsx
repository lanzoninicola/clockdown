import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import { useLoaderData } from "@remix-run/react";
import { type GlobalLoaderData } from "~/routes";

export function WaitlistLinkButton() {
  const loaderData = useLoaderData<GlobalLoaderData>();

  const { locale, waitlistData } = loaderData;

  const waitingListFormURL = locale
    ? waitlistData.formURLs[locale]
    : waitlistData.formURLs.en;

  return (
    <a href={waitingListFormURL} target="_blank" rel="noreferrer">
      <button
        type="button"
        className="flex w-full items-center gap-2 rounded-lg bg-yellow-200 py-2 px-4 md:px-16"
      >
        <span className="w-full font-body font-bold uppercase tracking-wide">
          {waitlistData.pageContent.cta}
        </span>
        <BiLinkExternal className="text-black" />
      </button>
    </a>
  );
}
