import { VStack, Checkbox, Link, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Teext from "../../../../global/common/layout/teext/teext";
import useOnboardingModalForm from "../../../hooks/useOnboardingModalForm";
import useOnboardingConfig from "../../../provider/hooks/useOnboardingConfig";
import FormRequiredIndicator from "../form-required-indicator/form-required-indicator";
import CheckboxLabel from "./checkbox-label/checkbox-label";

export default function ConsentGroup() {
  const { handleCheckboxChange } = useOnboardingModalForm();
  const { privacyPolicyURL, termsAndConditionsURL } = useOnboardingConfig();
  const { t } = useTranslation();

  return (
    <VStack spacing={4} alignItems={"flex-start"}>
      <Checkbox
        size="md"
        name="consent_newsletter"
        onChange={handleCheckboxChange}
      >
        <CheckboxLabel>{t("onboarding.newsletterConsent")}</CheckboxLabel>
      </Checkbox>
      <Checkbox
        size="md"
        name="consent_terms_privacy"
        onChange={handleCheckboxChange}
        isRequired={true}
      >
        <CheckboxLabel>
          <FormRequiredIndicator /> {t("onboarding.privacyAndTermsConsent")}
        </CheckboxLabel>
      </Checkbox>
      <HStack spacing={0} alignItems={"center"} gap={2} w="100%">
        <Link href={termsAndConditionsURL} isExternal>
          <Teext as="span" fontSize={".75rem"} color={"gray.400"}>
            {t("onboarding.termsAndConditions")}
          </Teext>
        </Link>

        <Link href={privacyPolicyURL} isExternal>
          <Teext as="span" fontSize={".75rem"} color={"gray.400"}>
            {t("onboarding.privacyPolicy")}
          </Teext>
        </Link>
      </HStack>
    </VStack>
  );
}
