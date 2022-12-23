import { ChakraProvider } from "@chakra-ui/react";
import { json } from "@remix-run/node";
import {
  Link,
  useActionData,
  useOutletContext,
  useTransition,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/modules/remix-auth/client/components";
import Logo from "~/client/common/logo/logo";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import authenticateAndRedirectWithPayload from "~/server/auth/remix-auth/utils/authenticate-and-redirect-with-payload.server";
import UserSignupInteractor from "~/server/domain/interactors/user-signup.interactor.server";
import UserSignupValidator from "~/server/domain/interactors/validators/user-signup.validator";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";
import tryCatch from "~/server/utils/try-catch.server";

import { LoginSignUpOutletContext } from "../__auth";

import type { User } from "@prisma/client";
import type {
  ActionFunction,
  LoaderArgs,
  LoaderFunction,
} from "@remix-run/node";
import SimpleTimer from "~/client/common/simple-timer";

export const action: ActionFunction = async ({ request }) => {
  const clonedRequest = request.clone();
  const formData = await clonedRequest.formData();

  const email = formData.get("email") as string;
  const fullname = formData.get("fullname") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return json({ error: "Missing email or password" }, { status: 400 });
  }

  try {
    const repository = new PrismaUsersRepository();
    const validator = new UserSignupValidator(repository);
    const interactor = new UserSignupInteractor(repository, validator);

    await interactor.execute({
      fullname,
      email,
      password,
    });

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
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};

export default function SignUpPage() {
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

  console.log("actionData", actionData);

  return (
    <div className="z-20 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8 md:max-w-[400px]">
        <Logo />
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-accent text-2xl font-bold uppercase tracking-wider">
            {t("onboarding.signup.title")}
          </h2>
          <h3 className="text-md text-center font-body">
            {authContext === "checkout"
              ? t("onboarding.checkout.signup.subtitle")
              : t("onboarding.signup.subtitle")}
          </h3>
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
          context="signup"
          formState={formState}
          error={
            actionData?.status >= 400
              ? actionData.message
              : null || actionData?.error
          }
          defaultValues={{
            email: actionData?.email,
            fullname: actionData?.fullname,
            password: actionData?.password,
          }}
        />
      </ChakraProvider>

      <div className="w-full border-b-2 border-b-gray-300"></div>

      <div className="flex w-full items-center justify-center gap-4 rounded-md py-8">
        <span className="font-body">{t("onboarding.alreadyRegistered")}</span>
        <Link to={`/login?context=${authContext}`}>
          <button className="rounded-lg border-2 border-accent-base bg-transparent px-6 py-2 font-body text-sm font-bold  uppercase text-black shadow-md hover:bg-accent-500">
            {t("onboarding.login.buttonLabel")}
          </button>
        </Link>
      </div>
    </div>
  );
}
