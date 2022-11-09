import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import "~/client/templates-editor/styles/global.css";
import PremiumFeatureProvider from "~/client/templates-editor/premium-features-provider/premium-features-provider";
import { EditorProvider } from "~/client/templates-editor/countdown-state-management/editor";
import MainContent from "~/client/templates-editor/global/common/layout/main-content/main-content";
import Header from "~/client/templates-editor/global/header/header";
import EditorPage from "~/client/templates-editor/editor/editor-page";
import { authenticator } from "~/server/auth/remix-auth/auth.server";
import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request);

  console.log("user", user);

  return null;
};

const ClockdownApp = () => (
  <ChakraProvider theme={theme}>
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
  </ChakraProvider>
);

export default ClockdownApp;
