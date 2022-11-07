import React, { Dispatch } from "react";
import { OnboardingAction } from "./actions";

export type OnboardingContextData = OnboardingStateData & {
  dispatch: Dispatch<OnboardingAction>;
};

export interface OnboardingStateData {
  config: OnboardingModuleConfig;
  /** The onboarding status. If "pending" the onboarding is required, if "completed" not */
  status: "pending" | "completed" | "skipped";
  /** The onboarding form state */
  formState: OnboardingFormState;
  /** Track if the onboarding modal is open but this is NOT CONTROL the state of modal. The modal state MUST be controlled by useDisclosure hook */
  isModalOpen: boolean;
  /** The last action dispatched */
  actionDispatched: string;
}

export interface OnboardingModuleConfig {
  /** The public website URL of clockdown product */
  productPublicWebsiteURL: string;
  /** The URL of commerce REST-API */
  commercerApiURL: string;
  /** The URL of terms and conditions page */
  termsAndConditionsURL: string;
  /** The URL of privacy policy page */
  privacyPolicyURL: string;
  /** Max failure count */
  maxFailureCount: number;
}

export interface OnboardingFormState {
  fullname: string;
  email: string;
  consent_newsletter: boolean;
  consent_terms_privacy: boolean;
  /** When the form submission returns an error */
  isError: boolean;
  /** Track the error message */
  error: string;
  /** Tracking how many times the process fail. Upto 2 leave the user to continue using the software */
  failureCount: number;
  /** When the form submission is in progress */
  isLoading: boolean;
  /** Form submission completed */
  isSuccessful: boolean;
  /** Modal config */
  modalConfig: ModalConfigState;
}

export type ModalConfigState =
  | "default"
  | "success"
  | "failure"
  | "failure_max";

export type UIModalConfig = Record<ModalConfigState, UIModalConfigDetails>;

export interface UIModalConfigDetails {
  title: string;
  subtitle: string;
  image: string;
  body: string | React.ReactElement | null;
  footer: string | React.ReactElement;
}
