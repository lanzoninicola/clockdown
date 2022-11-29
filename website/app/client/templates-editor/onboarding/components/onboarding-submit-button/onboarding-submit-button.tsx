import { Button } from "@chakra-ui/react";
import { t } from "i18next";
import capitalize from "~/client/common/utils/capitalize";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";

interface OnboardingSubmitButtonProps {
  /** The button label */
  label?: string;
  /** The onClick event */
  onClick?: () => void;
}

export default function OnboardingSubmitButton({
  label,
  onClick,
}: OnboardingSubmitButtonProps) {
  const { formState, handleSubmit } = useOnboardingModalForm();
  const { fullname, email, consent_terms_privacy } = formState;

  return (
    <Button
      isLoading={formState.isLoading}
      isDisabled={
        fullname === "" || email === "" || consent_terms_privacy === false
      }
      loadingText={capitalize(t("global.saving"))}
      className="theme-font"
      colorScheme="blue"
      size={"sm"}
      onClick={onClick || handleSubmit}
      data-test="onboarding-form-submit"
    >
      {label || capitalize(t("onboarding.buttonLabel"))}
    </Button>
  );
}
