// create a hook to handle the form state with useReducer including loading and error  and the reducer function
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNotifications } from "../../notifications";
import { useOnboardingRestApi } from "../../onboarding-rest-api";
import useOnboardingContext from "../provider/hooks/useOnboardingContext";
import { OnboardingFormState } from "../provider/types/context";

export default function useOnboardingModalForm() {
  const { formState, dispatch } = useOnboardingContext();
  const { doOnboarding } = useOnboardingRestApi();
  const { error: errorNotification } = useNotifications();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "ONBOARDING_FORM_ON_CHANGE",
      payload: {
        name: e.target.name as keyof OnboardingFormState,
        value: e.target.value.trim(),
      },
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "ONBOARDING_FORM_ON_CHANGE",

      payload: {
        name: e.target.name as keyof OnboardingFormState,
        value: e.target.checked,
      },
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: "ONBOARDING_FORM_SUBMIT" });

    const { fullname, email, consent_terms_privacy, consent_newsletter } =
      formState;

    doOnboarding({
      fullname,
      email,
      consent_terms_privacy,
      consent_newsletter,
    })
      .then((res) => {
        if (res.data.status >= 400) {
          dispatch({
            type: "ONBOARDING_FORM_FAILURE_RESPONSE",
            payload: "Generic error",
          });
          return;
        }

        if (res.data.status >= 400) {
          throw new Error(res.message);
        }

        if (res.data.status === 200) {
          dispatch({ type: "ONBOARDING_FORM_SUCCESS_RESPONSE" });
        }
      })
      .catch((err) => {
        let errorMessage = "ERROR: ";

        err instanceof Error
          ? (errorMessage += err.message)
          : typeof err === "string"
          ? (errorMessage += err)
          : (errorMessage += "Something went wrong");

        dispatch({
          type: "ONBOARDING_FORM_FAILURE_RESPONSE",
          payload: errorMessage,
        });
      });
  };

  return {
    formState,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  };
}
