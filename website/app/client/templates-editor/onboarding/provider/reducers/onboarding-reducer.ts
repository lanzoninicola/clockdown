import { OnboardingStateData, OnboardingAction } from "../types";

export const onboardingReducer = (
  state: OnboardingStateData,
  action: OnboardingAction
): OnboardingStateData => {
  switch (action.type) {
    case "LOAD_STATE":
      return action.payload;

    case "ONBOARDING_SHOW_MODAL":
      return {
        ...state,
        isModalOpen: true,
        actionDispatched: action.type,
      };
    case "ONBOARDING_HIDE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        actionDispatched: action.type,
      };
    case "ONBOARDING_FORM_ON_CHANGE":
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.payload.name]: action.payload.value,
        },
        actionDispatched: action.type,
      };
    case "ONBOARDING_FORM_SUBMIT":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: true,
          error: state.formState.error !== "" ? "" : state.formState.error,
        },
        actionDispatched: action.type,
      };
    case "ONBOARDING_FORM_SUCCESS_RESPONSE":
      return {
        ...state,
        status: "completed",
        formState: {
          ...state.formState,
          isLoading: false,
          isSuccessful: true,
          isError: false,
          error: "",
          failureCount: 0,
          modalConfig: "success",
        },
        actionDispatched: action.type,
      };
    case "ONBOARDING_FORM_FAILURE_RESPONSE":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: false,
          isError: true,
          failureCount: state.formState.failureCount + 1,
          error: action.payload,
          modalConfig: "failure",
        },
        actionDispatched: action.type,
      };

    case "ONBOARDING_CHECK_STATUS_RESPONSE_IS_REQUIRED":
      return {
        ...state,
        status: "pending",
        actionDispatched: action.type,
      };

    case "ONBOARDING_CHECK_STATUS_RESPONSE_IS_NOT_REQUIRED":
      return {
        ...state,
        status: "completed",
        actionDispatched: action.type,
      };

    case "ONBOARDING_FORM_FAILURE_MAX":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: false,
          modalConfig: "failure_max",
        },
        actionDispatched: action.type,
      };

    case "ONBOARDING_SKIP_DUE_ERROR":
      return {
        ...state,
        formState: {
          ...state.formState,
          failureCount: 0,
        },
        status: "skipped",
        actionDispatched: action.type,
      };

    default:
      return state;
  }
};
