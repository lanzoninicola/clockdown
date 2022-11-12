import { ChakraProvider } from "@chakra-ui/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/client/common/auth/components";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import authRedirectWithPayload from "~/server/auth/remix-auth/utils/redirect-with-payload.server";
import UserSignupInteractor from "~/server/domain/interactors/user-signup.interactor.server";
import UserSignupValidator from "~/server/domain/interactors/validators/user-signup.validator";
import PrismaUsersRepository from "~/server/repositories/prisma-users.repository.server";
import tryCatch from "~/server/utils/try-catch.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const fullname = formData.get("fullname") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return json({ error: "Missing email or password" }, { status: 400 });
  }

  const repository = new PrismaUsersRepository();
  const validator = new UserSignupValidator(repository);
  const interactor = new UserSignupInteractor(repository, validator);

  return await tryCatch(async () => {
    await interactor.execute({ email, fullname, password });

    // return authRedirectWithPayload<Omit<User | "id", "password">>(
    //   request,
    //   "/app",
    //   {
    //     email,
    //     fullname,
    //   }
    // );

    return null;
  });
};

export default function SignUpPage() {
  const { t } = useTranslation();

  //  const loaderData: LoaderData = useLoaderData();
  const actionData = useActionData();
  const transition = useTransition();
  const formState = transition.submission
    ? "submitting"
    : actionData?.subscription
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

  console.log(actionData);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-titles text-2xl font-bold text-blue-500">
          {t("onboarding.signup.title")}
        </h2>
        <h3 className="font-body text-sm text-gray-400 md:whitespace-pre-line">
          {t("onboarding.signup.subtitle")}
        </h3>
      </div>
      <ChakraProvider theme={theme}>
        <AuthForm
          context="signup"
          formState={formState}
          defaultValues={{
            email: actionData?.email,
            fullname: actionData?.fullname,
            password: actionData?.password,
          }}
        />
      </ChakraProvider>
    </div>
  );
}
