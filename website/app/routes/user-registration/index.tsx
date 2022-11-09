import {
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { fetch, json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { theme } from "~/client/templates-editor/chackra-ui/theme/theme";

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

  if (!email || !fullname) {
    return json({ error: "Missing email or fullname" }, { status: 400 });
  }

  const response = await fetch("http://localhost:8090/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ email, fullname }),
  });

  if (response.status === 200) {
    return redirect("/user-registration/success");
  }

  return json({ error: response.body }, { status: response.status });
};

export default function UserRegistrationPage() {
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

  const formRef = useRef<HTMLFormElement>(null);

  console.log(actionData);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

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
          <Form method="post" ref={formRef}>
            <VStack gap={[8, 16, 16]} alignItems="flex-start">
              <VStack alignItems="flex-start">
                <Text
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  color={"blue.500"}
                  whiteSpace={[null, "pre-line"]}
                >
                  {t("onboarding.title")}
                </Text>
                <Text
                  fontSize={"sm"}
                  color={"gray.500"}
                  whiteSpace={[null, "pre-line"]}
                >
                  {t("onboarding.subtitle")}
                </Text>
              </VStack>
              <VStack gap={8} w="100%" alignItems={"flex-start"}>
                <VStack>
                  <FormControl isRequired>
                    <FormLabel
                      htmlFor="fullname"
                      fontFamily={"Inter, sans-serif"}
                      fontSize={"xs"}
                    >
                      {t("global.name")}
                    </FormLabel>
                    <Input
                      id="fullname"
                      name="fullname"
                      disabled={formState === "submitting"}
                      placeholder={t("onboarding.namePlaceholder")}
                      fontFamily={"Inter, sans-serif"}
                      autoComplete="off"
                      defaultValue={actionData?.fullname}
                      size={"lg"}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      htmlFor="email"
                      fontSize={"xs"}
                      fontFamily={"Inter, sans-serif"}
                    >
                      {t("global.email")}
                    </FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type={"email"}
                      disabled={formState === "submitting"}
                      placeholder={t("onboarding.emailPlaceholder")}
                      fontFamily={"Inter, sans-serif"}
                      defaultValue={actionData?.email}
                      size={"lg"}
                    />
                  </FormControl>
                </VStack>
              </VStack>
              <VStack gap={1} alignItems={"flex-start"} w="100%">
                <Button
                  type="submit"
                  // isDisabled={
                  //   fullname === "" || email === "" || consent_terms_privacy === false
                  // }
                  loadingText={t("global.saving")}
                  className="theme-font"
                  colorScheme="blue"
                  data-test="onboarding-form-submit"
                >
                  {t("onboarding.buttonLabel")}
                </Button>
                <Text
                  as="span"
                  fontSize={"smaller"}
                  color={"gray.500"}
                  fontFamily={"Inter, sans-serif"}
                  whiteSpace={[null, "pre-line"]}
                >
                  {t("onboarding.consentStatement")}
                </Text>
              </VStack>
            </VStack>
          </Form>
        </Grid>
      </Grid>
    </ChakraProvider>
  );
}
