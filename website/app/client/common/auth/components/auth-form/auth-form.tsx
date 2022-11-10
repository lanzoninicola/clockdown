import {
  Input,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Form, Link } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { AuthFormState } from "../../types";
import ConsentStatement from "../consent-statement/consent-statement";
import SubmitAuthButton from "../submit-auth-button/submit-auth-button";

interface AuthFormProps {
  context: "signup" | "login";
  formState: AuthFormState;
  defaultValues?: {
    email?: string;
    fullname?: string;
    password?: string;
  };
}

export default function AuthForm({
  context,
  formState,
  defaultValues,
}: AuthFormProps) {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  return (
    <VStack gap={8} alignItems="flex-start">
      <Form method="post" ref={formRef}>
        <VStack gap={[8, 16, 16]} alignItems="flex-start">
          <VStack alignItems="flex-start">
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={"blue.500"}
              whiteSpace={[null, "pre-line"]}
            >
              {context === "signup"
                ? t("onboarding.signup.title")
                : t("onboarding.login.title")}
            </Text>
            {context === "signup" && (
              <Text
                fontSize={"sm"}
                color={"gray.500"}
                whiteSpace={[null, "pre-line"]}
              >
                {t("onboarding.signup.subtitle")}
              </Text>
            )}
          </VStack>
          <VStack gap={8} w="100%" alignItems={"flex-start"}>
            <VStack gap={4}>
              {context === "signup" && (
                <FormControl isRequired>
                  <FormLabel
                    htmlFor="fullname"
                    fontFamily={"Inter, sans-serif"}
                    fontSize={"xs"}
                    mb={0}
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
                    defaultValue={defaultValues?.fullname}
                    size={"lg"}
                  />
                </FormControl>
              )}
              <FormControl isRequired>
                <FormLabel
                  htmlFor="email"
                  fontSize={"xs"}
                  fontFamily={"Inter, sans-serif"}
                  mb={0}
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
                  defaultValue={defaultValues?.email}
                  size={"lg"}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="password"
                  fontSize={"xs"}
                  fontFamily={"Inter, sans-serif"}
                  mb={0}
                >
                  {t("global.password")}
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type={"password"}
                  disabled={formState === "submitting"}
                  placeholder={t("onboarding.passwordPlaceholder")}
                  fontFamily={"Inter, sans-serif"}
                  defaultValue={defaultValues?.email}
                  size={"lg"}
                />
              </FormControl>
            </VStack>
          </VStack>
          <VStack gap={1} alignItems={"flex-start"} w="100%">
            <SubmitAuthButton loadingText={t("global.saving")}>
              {context === "signup"
                ? t("onboarding.signup.buttonLabel")
                : t("onboarding.login.buttonLabel")}
            </SubmitAuthButton>
            {context === "signup" && <ConsentStatement />}
          </VStack>
        </VStack>
      </Form>
      {context === "login" && (
        <>
          <Divider />
          <VStack>
            <HStack gap={4}>
              <Text>{t("onboarding.firstTime")}</Text>
              <Link to="/signup">
                <Button colorScheme={"gray"}>
                  {t("onboarding.signup.buttonLabel")}
                </Button>
              </Link>
            </HStack>
          </VStack>
        </>
      )}
    </VStack>
  );
}
