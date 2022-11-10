import "~/client/templates-editor/styles/global.css";

import { ChakraProvider, useToast } from "@chakra-ui/react";
import { json, LoaderFunction } from "@remix-run/node";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import { EditorProvider } from "~/client/templates-editor/countdown-state-management/editor";
import EditorPage from "~/client/templates-editor/editor/editor-page";
import MainContent from "~/client/templates-editor/global/common/layout/main-content/main-content";
import Header from "~/client/templates-editor/global/header/header";
import PremiumFeatureProvider from "~/client/templates-editor/premium-features-provider/premium-features-provider";
import isAuthenticated from "~/server/auth/remix-auth/utils/is-authenticated.server";
import { useLoaderData } from "@remix-run/react";
import { User } from "@prisma/client";
import { useEffect } from "react";
import ClockdownApp from "~/client/templates-editor/app";

interface LoaderData {
  userAuth: { email: string; fullname?: string };
}

export const loader: LoaderFunction = async ({ request }) => {
  let userAuthData = await isAuthenticated(request);

  return json({ userAuth: userAuthData });
};

const App = () => {
  const loaderData: LoaderData = useLoaderData();
  const { userAuth } = loaderData;

  return (
    <ChakraProvider theme={theme}>
      <ClockdownApp onboardedUser={userAuth} />
    </ChakraProvider>
  );
};

export default App;
