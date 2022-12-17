import "~/client/templates-editor/styles/global.css";

import { ChakraProvider } from "@chakra-ui/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ClockdownApp from "~/client/templates-editor/app";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import isUserAuthenticated from "~/server/auth/remix-auth/utils/is-user-authenticated.server";
import isGodMode from "~/server/utils/is-god-mode";

interface LoaderData {
  userAuth: { email: string; fullname?: string };
  zeus: boolean;
}

export const loader: LoaderFunction = async ({ request }) => {
  let userAuthData = await isUserAuthenticated(request);
  const zeus = isGodMode(request);

  return json({
    userAuth: userAuthData,
    zeus,
  });
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
