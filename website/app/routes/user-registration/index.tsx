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
import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
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

  console.log({ email, fullname });

  if (!email || !fullname) {
    return json({ error: "Missing email or fullname" }, { status: 400 });
  }

  return json({ email, fullname });
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

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

  return (
    <ChakraProvider theme={theme}>
      <Grid gridTemplateColumns={"repeat(2, 1fr)"} minH={["100vh"]}>
        <Grid placeItems={"center"} background={"blue.300"}>
          <Image
            src="/images/user-registration/stepping-up.png"
            alt="user registration form"
            w={"50%"}
            borderRadius={"md"}
          />
        </Grid>
        <Grid placeItems={"center"}>
          <Form method="post" ref={formRef}>
            <VStack gap={16} alignItems="flex-start">
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
                  Submit
                </Button>
                <VStack alignItems={"flex-start"}>
                  <Text
                    as="span"
                    fontSize={"smaller"}
                    color={"gray.500"}
                    lineHeight={1}
                    fontFamily={"Inter, sans-serif"}
                  >
                    {t("onboarding.consentStatement1")}
                  </Text>
                  <Text
                    as="span"
                    fontSize={"small"}
                    color={"gray.500"}
                    lineHeight={1}
                  >
                    {t("onboarding.consentStatement2")}
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </Form>
        </Grid>
      </Grid>
    </ChakraProvider>
  );
}
