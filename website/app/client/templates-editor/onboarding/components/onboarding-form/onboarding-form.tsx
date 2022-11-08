import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";
import ConsentGroup from "./consent-group/consent-group";

export interface OnboardingFormProps {
  /** Used to focus on an input field */
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
}

export default function OnboardingForm({
  initialFocusRef,
}: OnboardingFormProps) {
  const { formState, handleInputChange, handleSubmit } =
    useOnboardingModalForm();
  const { t } = useTranslation();

  const { fullname, email } = formState;

  return (
    <Form method="post">
      <Grid gridTemplateRows={"1fr 1fr"} gap={5} w="100%" maxW={"400px"}>
        <VStack alignItems={"flex-start"} w="100%">
          <FormControl isRequired>
            <FormLabel
              htmlFor="fullname"
              className="theme-font"
              fontSize={"xs"}
            >
              {t("global.name")}
            </FormLabel>
            <Input
              id="fullname"
              name="fullname"
              ref={initialFocusRef}
              placeholder={t("onboarding.namePlaceholder")}
              onChange={handleInputChange}
              className="theme-font"
              isDisabled={formState.isLoading}
              autoComplete="off"
              size={"sm"}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email" className="theme-font" fontSize={"xs"}>
              {t("global.email")}
            </FormLabel>
            <Input
              id="email"
              name="email"
              placeholder={t("onboarding.emailPlaceholder")}
              onChange={handleInputChange}
              className="theme-font"
              isDisabled={formState.isLoading}
              size={"sm"}
            />
          </FormControl>
        </VStack>
        {fullname !== "" && email !== "" && <ConsentGroup />}
        <Button
          type="submit"
          isLoading={formState.isLoading}
          isDisabled={fullname === "" || email === ""}
          loadingText={t("global.saving").capitalize()}
          className="theme-font"
          colorScheme="blue"
          size={"sm"}
          onClick={handleSubmit}
          data-test="onboarding-form-submit"
        >
          {label || t("onboarding.buttonLabel").capitalize()}
        </Button>
      </Grid>
    </Form>
  );
}
