import { client } from "../client/client";
import type { APIResponse, OnboardingRequestPayload } from "../types";

export default function useOnboardingRestApi() {
  const doOnboarding = async (
    payload: OnboardingRequestPayload
  ): Promise<APIResponse> => {
    return client(doOnboardingConfig.endpoint(), {
      method: "POST",
      data: payload,
      headers: doOnboardingConfig.headers,
    });
  };

  return { doOnboarding };
}
