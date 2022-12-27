import "~/client/templates-editor/styles/global.css";

import { EditorProvider } from "~/client/templates-editor/countdown-state-management/editor";
import EditorPage from "~/client/templates-editor/editor/editor-page";
import MainContent from "~/client/templates-editor/global/common/layout/main-content/main-content";
import Header from "~/client/templates-editor/global/header/header";
import PremiumFeatureProvider from "~/client/templates-editor/premium-features-provider/premium-features-provider";

interface ClockdownAppProps {
  loggedUser: {
    email: string;
    fullname?: string;
    role?: string;
  };
}

const ClockdownApp = ({ loggedUser }: ClockdownAppProps) => {
  return (
    <PremiumFeatureProvider
      config={{
        productLandingPageURL: "https://clockdown.tech/#pricing-table",
        premiumPlans: ["pro"],
      }}
      userRole={loggedUser.role}
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
