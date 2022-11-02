import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../client/chackra-ui/theme/theme";
import "../client/style/global.css";
import { OnboardingProvider } from "../client/onboarding";
import PremiumFeatureProvider from "../client/premium-features-provider/premium-features-provider";
import { EditorProvider } from "../client/countdown-state-management/editor";
import MainContent from "~/client/global/common/layout/main-content/main-content";
import Header from "~/client/global/header/header";
import EditorPage from "~/client/editor/editor-page";

const ClockdownApp = () => (
  <ChakraProvider theme={theme}>
    <OnboardingProvider
      config={{
        productPublicWebsiteURL: "https://clockdown.xyz/",
        commercerApiURL: "https://clockdown.xyz/wp-json/commerce/v1",
        termsAndConditionsURL: "https://clockdown.xyz/terms-and-conditions",
        privacyPolicyURL: "https://clockdown.xyz/privacy-policy",
        maxFailureCount: 3,
      }}
    >
      <PremiumFeatureProvider
        config={{
          productPublicWebsiteURL: "https://clockdown.xyz/",
        }}
      >
        <EditorProvider
          config={{
            productPublicWebsiteURL: "https://clockdown.xyz/",
          }}
        >
          <MainContent>
            <Header />
            <EditorPage />
          </MainContent>
        </EditorProvider>
      </PremiumFeatureProvider>
    </OnboardingProvider>
  </ChakraProvider>
);

export default ClockdownApp;
