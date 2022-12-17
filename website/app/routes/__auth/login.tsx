import {
  ChakraProvider,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { User } from "@prisma/client";
import { json } from "@remix-run/node";
import {
  Link,
  useActionData,
  useOutletContext,
  useTransition,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/client/common/auth/components";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import authenticateAndRedirectWithPayload from "~/server/auth/remix-auth/utils/authenticate-and-redirect-with-payload.server";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import Logo from "~/client/common/logo/logo";
import type { LoginSignUpOutletContext } from "../__auth";
import SimpleTimer from "~/client/common/simple-timer";
import tryCatch from "~/server/utils/try-catch.server";
import { AuthorizationError } from "remix-auth";

export const action: ActionFunction = async ({ request }) => {
  const clonedData = request.clone();
  const formData = await clonedData.formData();

  const email = formData.get("email") as string;
  const fullname = formData.get("fullname") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return json({ error: "Missing email or fullname" }, { status: 400 });
  }

  /** ====================================== */

  const query = new URL(request.url).searchParams;
  const authContext = query.get("context");

  if (authContext === "checkout") {
    return await authenticateAndRedirectWithPayload({
      request,
      successRedirectURL: "/checkout/payment",
    });
  }

  /** ====================================== */

  return await authenticateAndRedirectWithPayload({
    request,
    successRedirectURL: "/app",
  });
};

/**
 * I can arrive here from the authentication workflow fired by the checkout process or by the app itself.
 */

export default function LoginPage() {
  const { t } = useTranslation();
  const { authContext } = useOutletContext<LoginSignUpOutletContext>();

  const actionData = useActionData();
  const transition = useTransition();
  const formState = transition.submission
    ? "submitting"
    : actionData?.subscription
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-8 md:max-w-[400px]">
        <Logo />
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-accent text-2xl font-bold uppercase tracking-wider">
            {t("onboarding.login.title")}
          </h2>
          {authContext === "checkout" && (
            <h3 className="text-md text-center font-body">
              {t("onboarding.checkout.login.subtitle")}
            </h3>
          )}
          {authContext === "app" && (
            <h3 className="text-md text-center font-body">
              Para finalizar, faça login na sua conta
            </h3>
          )}
          <div className="flex flex-row justify-center px-8 opacity-20 ">
            <SimpleTimer
              seconds={59}
              itemClazzName={`font-accent text-md font-bold md:text-xl`}
            />
          </div>
        </div>
      </div>

      <ChakraProvider theme={theme}>
        <AuthForm
          context="login"
          formState={formState}
          error={actionData?.error}
          defaultValues={{
            email: actionData?.email,
            fullname: actionData?.fullname,
            password: actionData?.password,
          }}
        />
      </ChakraProvider>

      <div className="border-b-2 border-b-black/50 "></div>

      <div className="flex w-full items-center justify-center gap-4 rounded-md py-8">
        <span className="font-body">{t("onboarding.firstTime")}</span>
        <Link to={`/signup?context=${authContext}`}>
          <button className="rounded-lg border-2 border-accent-base bg-transparent px-6 py-2 font-body text-sm font-bold  uppercase text-black shadow-md hover:bg-accent-500">
            {t("onboarding.signup.buttonLabel")}
          </button>
        </Link>
      </div>
    </div>
  );
}
