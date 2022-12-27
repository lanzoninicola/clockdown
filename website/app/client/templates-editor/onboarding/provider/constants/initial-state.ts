import { OnboardingStateData } from "../types";

const INITIAL_STATE: OnboardingStateData = {
  config: {
    produtLandingPageURL: "",
    commercerApiURL: "",
    termsAndConditionsURL: "",
    privacyPolicyURL: "",
    maxFailureCount: 2,
  },
  status: "pending",
  formState: {
    fullname: "",
    email: "",
    consent_newsletter: false,
    consent_terms_privacy: false,
    isError: false,
    error: "",
    failureCount: 0,
    isLoading: false,
    isSuccessful: false,
    modalConfig: "default",
  },
  isModalOpen: false,
  actionDispatched: "",
};

export default INITIAL_STATE;
