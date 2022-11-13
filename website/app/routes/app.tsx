import "~/client/templates-editor/styles/global.css";

import { ChakraProvider } from "@chakra-ui/react";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ClockdownApp from "~/client/templates-editor/app";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import isAuthenticated from "~/server/auth/remix-auth/utils/is-authenticated.server";

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
