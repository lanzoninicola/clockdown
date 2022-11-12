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

export const loader: LoaderFunction = async () => {
  return json({
    termsAndConditionsURL: "https://clockdown.xyz/terms-and-conditions",
    privacyPolicyURL: "https://clockdown.xyz/privacy-policy",
    maxFailureCount: 3,
  });
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
    {
      email,
      fullname,
    }
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
      <VStack gap={8} alignItems="flex-start">
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          color={"blue.500"}
          whiteSpace={[null, "pre-line"]}
        >
          {t("onboarding.login.title")}
        </Text>
        <AuthForm
          context="login"
          formState={formState}
          defaultValues={{
            email: actionData?.email,
            fullname: actionData?.fullname,
            password: actionData?.password,
          }}
        />
        <Divider />
        <HStack
          gap={4}
          bg="gray.50"
          borderRadius={"md"}
          w="100%"
          justifyContent={"center"}
          paddingBlock={8}
        >
          <Text>{t("onboarding.firstTime")}</Text>
          <Link to="/signup">
            <Button colorScheme={"blue"} variant={"outline"}>
              {t("onboarding.signup.buttonLabel")}
            </Button>
          </Link>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}
