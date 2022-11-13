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
  error: string;
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
  error = "",
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
        <VStack gap={8} alignItems="flex-start">
          <VStack gap={8} w="100%" alignItems={"flex-start"}>
            <VStack gap={4}>
              {context === "signup" && (
                <FormControl isRequired>
                  {/* <FormLabel
                    htmlFor="fullname"
                    fontFamily={"Inter, sans-serif"}
                    fontSize={"xs"}
                    mb={0}
                  >
                    {t("global.name")}
                  </FormLabel> */}
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
                    width={["calc(100vw - 2rem)", "400px"]}
                  />
                </FormControl>
              )}
              <FormControl isRequired>
                {/* <FormLabel
                  htmlFor="email"
                  fontSize={"xs"}
                  fontFamily={"Inter, sans-serif"}
                  mb={0}
                >
                  {t("global.email")}
                </FormLabel> */}
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
                {/* <FormLabel
                  htmlFor="password"
                  fontSize={"xs"}
                  fontFamily={"Inter, sans-serif"}
                  mb={0}
                >
                  {t("global.password")}
                </FormLabel> */}
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
          {/* {error && (
            <div className="w-full rounded-md bg-red-200 px-4 py-2 md:w-[400px]">
              <span className="font-body text-sm font-bold text-red-600">
                {error}
              </span>
            </div>
          )} */}
          <VStack gap={1} alignItems={"flex-start"} w="100%">
            <SubmitAuthButton
              loadingText={t("global.saving")}
              isLoading={formState === "submitting"}
              isDisabled={
                formState === "submitting" ||
                formState === "success" ||
                formState === "error"
              }
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
