import { FormControl, Input, VStack } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import ConsentStatement from "../consent-statement/consent-statement";
import SubmitAuthButton from "../submit-auth-button/submit-auth-button";

import type { AuthFormState } from "../../../types";
interface AuthFormProps {
  context: "signup" | "login" | "checkout";
  formState: AuthFormState;
  error?: string | null;
  defaultValues?: {
    email?: string;
    fullname?: string;
    password?: string;
  };
  spacingX?: string;
}

export default function AuthForm({
  context,
  formState,
  defaultValues,
  error = null,
  spacingX = "2rem",
}: AuthFormProps) {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  return (
    <VStack
      gap={8}
      alignItems="flex-start"
      data-element="auth-form"
      paddingInline={spacingX}
    >
      <Form method="post" ref={formRef} replace>
        <VStack gap={8} alignItems="flex-start">
          <VStack gap={8} w="100%">
            <VStack gap={4} w="100%">
              {context === "signup" && (
                <FormControl isRequired>
                  <Input
                    id="fullname"
                    name="fullname"
                    disabled={formState === "submitting"}
                    placeholder={t("onboarding.namePlaceholder")}
                    _placeholder={{ color: "black" }}
                    fontFamily={"Inter, sans-serif"}
                    autoComplete="off"
                    defaultValue={defaultValues?.fullname}
                    size={"lg"}
                    borderColor={"black"}
                  />
                </FormControl>
              )}
              <FormControl isRequired>
                <Input
                  id="email"
                  name="email"
                  type={"email"}
                  disabled={formState === "submitting"}
                  placeholder={t("onboarding.emailPlaceholder")}
                  _placeholder={{ color: "black" }}
                  fontFamily={"Inter, sans-serif"}
                  defaultValue={defaultValues?.email}
                  size={"lg"}
                  borderColor={"black"}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  id="password"
                  name="password"
                  type={"password"}
                  disabled={formState === "submitting"}
                  placeholder={t("onboarding.passwordPlaceholder")}
                  _placeholder={{ color: "black" }}
                  fontFamily={"Inter, sans-serif"}
                  defaultValue={defaultValues?.email}
                  size={"lg"}
                  minLength={8}
                  borderColor={"black"}
                />
              </FormControl>
            </VStack>
          </VStack>
          {error && (
            <div className="w-[300px] rounded-md bg-red-200 px-4 py-2">
              <span className="w-full font-body text-sm font-bold text-red-600">
                {error}
              </span>
            </div>
          )}
          <VStack gap={1} w="100%">
            <SubmitAuthButton
              isLoading={formState === "submitting"}
              loadingText={
                context === "signup"
                  ? t("onboarding.signup.loadingLabel")
                  : t("onboarding.login.loadingLabel")
              }
              isDisabled={formState === "submitting"}
            >
              {context === "signup"
                ? t("onboarding.signup.buttonLabel")
                : t("onboarding.login.buttonLabel")}
            </SubmitAuthButton>
            {context === "signup" && <ConsentStatement />}
          </VStack>
        </VStack>
      </Form>
    </VStack>
  );
}
