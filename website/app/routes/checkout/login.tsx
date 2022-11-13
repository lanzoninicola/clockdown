import { ChakraProvider, Divider, HStack, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { Link, useActionData, useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/client/common/auth/components";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import getUserAuthenticated from "~/server/auth/remix-auth/utils/get-user-authenticated.server";
import authRedirectWithPayload from "~/server/auth/remix-auth/utils/redirect-with-payload.server";

interface LoaderData {
  userAuth: { email: string; fullname?: string };
}

export const loader: LoaderFunction = async ({ request }) => {
  const query = new URL(request.url).searchParams;

  const plan = query.get("plan");

  let userAuthData = await getUserAuthenticated(request);

  if (userAuthData !== null) {
    return redirect("/checkout/payment");
  }

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const fullname = formData.get("fullname") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return json({ error: "Missing email or fullname" }, { status: 400 });
  }

  return authRedirectWithPayload<Omit<User | "id", "password">>(
    request,
    "/app",
    { email, fullname }
  );
};

export default function LoginPage() {
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

  return (
    <ChakraProvider theme={theme}>
      <div className="flex flex-col gap-4">
        <p className="text-center font-body text-sm font-bold">
          Entra para continuar
        </p>
        <AuthForm
          context="login"
          formState={formState}
          error={"Usuario ya existe"}
          // error={actionData?.status > 400 ? actionData.message : undefined}
          defaultValues={{
            email: actionData?.email,
            fullname: actionData?.fullname,
            password: actionData?.password,
          }}
        />
        <Divider />
        <HStack
          gap={2}
          borderRadius={"md"}
          w="100%"
          justifyContent={"center"}
          paddingBlock={8}
        >
          <Text>{t("onboarding.firstTime")}</Text>
          <Link to="/checkout/signup">
            <button className="rounded-lg border-2 border-accent-base bg-transparent px-6 py-2 font-body text-sm font-bold  uppercase text-black shadow-md hover:bg-accent-500">
              {t("onboarding.signup.buttonLabel")}
            </button>
          </Link>
        </HStack>
      </div>
    </ChakraProvider>
  );
}
