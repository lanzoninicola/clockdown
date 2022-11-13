import {
  Button,
  ChakraProvider,
  Divider,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useTransition, Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/client/common/auth/components";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import authRedirectWithPayload from "~/server/auth/remix-auth/utils/redirect-with-payload.server";

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
      <VStack gap={8} alignItems="center">
        <h2 className="font-accent text-2xl font-bold uppercase tracking-wider">
          {t("onboarding.login.title")}
        </h2>

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
        <Divider />
        <HStack
          gap={2}
          borderRadius={"md"}
          w="100%"
          justifyContent={"center"}
          paddingBlock={8}
        >
          <Text>{t("onboarding.firstTime")}</Text>
          <Link to="/signup">
            <button className="rounded-lg border-2 border-accent-base bg-transparent px-6 py-2 font-body text-sm font-bold  uppercase text-black shadow-md hover:bg-accent-500">
              {t("onboarding.signup.buttonLabel")}
            </button>
          </Link>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}
