import { ChakraProvider, theme } from "@chakra-ui/react";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AuthForm } from "~/client/common/auth/components";
import getUserAuthenticated from "~/server/auth/remix-auth/utils/get-user-authenticated.server";

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

export default function CheckoutSignUp() {
  const { t } = useTranslation();

  // const loaderData = useLoaderData();
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
          Cadastra-se para continuar
        </p>
        <AuthForm
          context="signup"
          formState={formState}
          error={"Usuario ya existe"}
          // error={actionData?.status > 400 ? actionData.message : undefined}
          defaultValues={{
            email: actionData?.email,
            fullname: actionData?.fullname,
            password: actionData?.password,
          }}
        />
      </div>
    </ChakraProvider>
  );
}
