import useSWR from "swr";

import { COUNTDOWNS_REST_API_ENDPOINTS } from "../constants/countdowns/endpoints";
import { findAll } from "../services/countdowns";
import { APIResponse } from "../types";
import { CountdownModel } from "../../countdown-widget/types";

interface UseCountdownListSWR {
  countdowns: CountdownModel[] | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | undefined;
}

export default function useCountdownsList(): UseCountdownListSWR {
  const { data: response, error } = useSWR<APIResponse<CountdownModel[]>>(
    COUNTDOWNS_REST_API_ENDPOINTS.findAll.endpoint(),
    findAll
  );

  const shouldError =
    error || (response && response.data && response.data?.status >= 400);

  return {
    countdowns: response?.data.payload ?? undefined,
    isLoading: !error && !response,
    isError: shouldError,
    errorMessage: shouldError && response?.message,
  };
}
