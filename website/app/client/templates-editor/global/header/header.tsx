import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AvatarDropdown } from "~/modules/remix-account/client";

import BreakpointsBar from "../../editor/editor-preview/components/breakpoints-bar/breakpoints-bar";
import HtmlEmbeddedCode from "../../editor/html-embedded-code/html-embedded-code";
import useIsPremiumInstallation from "../../premium-features/hooks/useIsPremiumInstallation";
import { Logo } from "../common";

export default function Header({
  loggedUser,
}: {
  loggedUser: { email: string; fullname?: string } | null;
}) {
  const { t } = useTranslation();
  const isPremiumUser = useIsPremiumInstallation();

  return (
    <div className="fixed top-0 left-0 z-[100] flex flex-col">
      <div className="grid min-h-[50px] w-screen grid-cols-3 items-center justify-items-center gap-x-4 bg-gray-200 px-4">
        <div className="grid grid-cols-4 place-items-center items-center gap-4">
          <Logo />
          {/* <PremiumFeatureGuard
            variant="modal"
            hide={true}
            customText={t("premiumFeatures.modal.body.newCountdown", {
              maxCountdowns: "one",
            })}
            ctaVariant={4}
          >
            <ModalNewCountdown />
          </PremiumFeatureGuard>
          <PremiumFeatureGuard hide>
            <EditorSave />
          </PremiumFeatureGuard> */}
          {/* <LanguagesMenu /> */}
        </div>
        <BreakpointsBar />
        <div className="flex items-center gap-4 justify-self-end">
          {loggedUser ? (
            <AvatarDropdown user={loggedUser} />
          ) : (
            <Link to="/login?context=app">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-5 py-1.5 text-sm font-medium text-black hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FiUser />
                Login
              </button>
            </Link>
          )}

          <HtmlEmbeddedCode inlineBlock={true} variant={"secondary"} />
        </div>
      </div>

      {isPremiumUser === false && (
        <Link to="/checkout" target="_blank">
          <div className="grid w-full cursor-pointer place-items-center bg-yellow-300 py-1 hover:bg-yellow-400">
            <span className="font-body text-sm font-bold uppercase tracking-wider text-black">
              {t(`premiumFeatures.upgradeCTA.variant1`)}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
