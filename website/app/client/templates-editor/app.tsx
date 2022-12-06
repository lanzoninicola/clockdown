import "~/client/templates-editor/styles/global.css";

import { EditorProvider } from "~/client/templates-editor/countdown-state-management/editor";
import EditorPage from "~/client/templates-editor/editor/editor-page";
import MainContent from "~/client/templates-editor/global/common/layout/main-content/main-content";
import Header from "~/client/templates-editor/global/header/header";
import PremiumFeatureProvider from "~/client/templates-editor/premium-features-provider/premium-features-provider";

interface ClockdownAppProps {
  onboardedUser: {
    email: string;
    fullname?: string;
  };
}

const ClockdownApp = ({ onboardedUser }: ClockdownAppProps) => {
  return (
    <PremiumFeatureProvider
      config={{
        productPublicWebsiteURL: "https://clockdown.tech/",
      }}
    >
      <EditorProvider
        config={{
          productPublicWebsiteURL: "https://clockdown.tech",
        }}
      >
        <MainContent>
          <Header onboardedUser={onboardedUser} />
          <EditorPage />
        </MainContent>
      </EditorProvider>
    </PremiumFeatureProvider>
  );
};

export default ClockdownApp;
