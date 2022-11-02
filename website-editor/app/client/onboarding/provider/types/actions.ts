import { OnboardingFormState } from "./context";

export interface OnboardingPendingAction {
  type: "ONBOARDING_PENDING";
  payload: string;
}

export interface OnboardingShowModalAction {
  type: "ONBOARDING_SHOW_MODAL";
}

export interface OnboardingHideModalAction {
  type: "ONBOARDING_HIDE_MODAL";
}
export interface OnboardingFormChangeAction {
  type: "ONBOARDING_FORM_ON_CHANGE";
  payload: {
    name: keyof OnboardingFormState;
    value: string | boolean;
  };
}

export interface OnboardingFormSubmitAction {
  type: "ONBOARDING_FORM_SUBMIT";
}

export interface OnboardingFormSuccessAction {
  type: "ONBOARDING_FORM_SUCCESS_RESPONSE";
}

export interface OnboardingFormFailureAction {
  type: "ONBOARDING_FORM_FAILURE_RESPONSE";
  payload: string;
}

export interface OnboardingPreCheckStatusResponseFailedAction {
  type: "ONBOARDING_CHECK_STATUS_RESPONSE_IS_REQUIRED";
}

export interface OnboardingPreCheckStatusResponseSuccessAction {
  type: "ONBOARDING_CHECK_STATUS_RESPONSE_IS_NOT_REQUIRED";
}

export interface OnboardingFormFailureMaxAction {
  type: "ONBOARDING_FORM_FAILURE_MAX";
}

export interface OnboardingSkipDueError {
  type: "ONBOARDING_SKIP_DUE_ERROR";
}

export type OnboardingAction =
  | OnboardingPendingAction
  | OnboardingShowModalAction
  | OnboardingHideModalAction
  | OnboardingFormChangeAction
  | OnboardingFormSubmitAction
  | OnboardingFormSuccessAction
  | OnboardingFormFailureAction
  | OnboardingFormFailureMaxAction
  | OnboardingPreCheckStatusResponseFailedAction
  | OnboardingPreCheckStatusResponseSuccessAction
  | OnboardingSkipDueError;
