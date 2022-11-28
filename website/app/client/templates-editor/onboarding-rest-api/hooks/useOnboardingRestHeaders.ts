type RestApiHeaders = Record<string, string>;

export default function useOnboardingRestHeader(): RestApiHeaders {
  const headers = {
    "Content-Type": "application/json",
  };

  return headers;
}
