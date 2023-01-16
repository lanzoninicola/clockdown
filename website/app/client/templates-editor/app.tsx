import "~/client/templates-editor/styles/global.css";

import { EditorProvider } from "~/client/templates-editor/countdown-state-management/editor";
import EditorPage from "~/client/templates-editor/editor/editor-page";
import MainContent from "~/client/templates-editor/global/common/layout/main-content/main-content";
import Header from "~/client/templates-editor/global/header/header";
import PremiumFeatureProvider from "~/client/templates-editor/premium-features-provider/premium-features-provider";
import { type PremiumFeaturesUserRoles } from "./premium-features-provider/types/context";

interface ClockdownAppProps {
  loggedUser: {
    email: string;
    fullname?: string;
    role?: string;
  } | null;
}

const ClockdownApp = ({ loggedUser }: ClockdownAppProps) => {
  return (
    <PremiumFeatureProvider
      config={{
        productLandingPageURL: "https://clockdown.tech/#pricing-table",
        waitingListFormURL:
          "https://docs.google.com/forms/d/e/1FAIpQLSegUPJi6PRixbkEKkBBgHJJb_AXmJZyOqMEs_R5Q-Fk8UDycg/viewform?usp=sf_link",
        premiumPlans: ["pro"],
        premiumFeaturesModuleEnabled: true,
      }}
      userRole={(loggedUser?.role as PremiumFeaturesUserRoles) || "USER"}
    >
      <EditorProvider
        config={{
          produtLandingPageURL: "https://clockdown.tech",
        }}
      >
        <MainContent>
          <Header loggedUser={loggedUser} />
          <EditorPage />
        </MainContent>
      </EditorProvider>
    </PremiumFeatureProvider>
  );
};

export default ClockdownApp;
