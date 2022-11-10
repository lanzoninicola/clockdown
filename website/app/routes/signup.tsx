import { ChakraProvider, Grid, Image } from "@chakra-ui/react";
import { User } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/client/common/auth/components";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";
import redirectWithPayload from "~/server/auth/remix-auth/utils/redirect-with-payload.server";

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

  if (!email || !fullname || !password) {
    return json({ error: "Missing email or fullname" }, { status: 400 });
  }

  return redirectWithPayload<Omit<User | "id", "password">>(request, "/app", {
    email,
    fullname,
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

  return (
    <ChakraProvider theme={theme}>
      <Grid
        gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
        gridTemplateRows={["120px, 1fr", "1fr"]}
        minH={["100vh"]}
      >
        <Grid placeItems={"center"} background={"blue.300"}>
          <Image
            src="/images/user-registration/stepping-up.png"
            alt="user registration form"
            w={"50%"}
            borderRadius={"md"}
          />
        </Grid>
        <Grid placeItems={"center"} paddingInline={["2rem", 0, 0]}>
          <AuthForm
            context="signup"
            formState={formState}
            defaultValues={{
              email: actionData?.email,
              fullname: actionData?.fullname,
              password: actionData?.password,
            }}
          />
        </Grid>
      </Grid>
    </ChakraProvider>
  );
}
