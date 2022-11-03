import { Button } from "@chakra-ui/react";
import { t } from "i18next";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";

interface OnboardingSubmitButton {
  /** The button label */
  label?: string;
  /** The onClick event */
  onClick?: () => void;
}

export default function OnboardingSubmitButton({
  label,
  onClick,
}: OnboardingSubmitButton) {
  const { formState, handleSubmit } = useOnboardingModalForm();
  const { fullname, email, consent_terms_privacy } = formState;

  return (
    <Button
      isLoading={formState.isLoading}
      isDisabled={
        fullname === "" || email === "" || consent_terms_privacy === false
      }
      loadingText={t("global.saving").capitalize()}
      className="theme-font"
      colorScheme="blue"
      size={"sm"}
      onClick={onClick || handleSubmit}
      data-test="onboarding-form-submit"
    >
      {label || t("onboarding.buttonLabel").capitalize()}
    </Button>
  );
}
