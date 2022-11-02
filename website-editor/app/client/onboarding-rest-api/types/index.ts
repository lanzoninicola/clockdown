export interface OnboardingRequestPayload {
  fullname: string;
  email: string;
  consent_newsletter: boolean;
  consent_terms_privacy: boolean;
}

export interface APIResponse<T = unknown> {
  code:
    | "error"
    | "success"
    | "rest_missing_callback_param"
    | "internal_server_error";
  message: string;
  data:
    | SuccessResponse
    | SuccessResponseWithPayload<T>
    | MissingParameterResponse
    | ErrorResponse;
}

/** Payload on succesfully response */
export interface SuccessResponse {
  operation: string;
  status: 200;
  payload: null;
}

export interface SuccessResponseWithPayload<T> {
  operation: string;
  status: 200;
  payload: T;
}

/** Payload when a parameter missing on request sent*/
export interface MissingParameterResponse {
  status: 400;
  params: string[];
}

/** Payload when server error occured */
export interface ErrorResponse {
  status: 500;
}

/**
 * REST API request configuration.
 * Contain the information of method, endpoint, headers for the REST API call.
 *
 */

export interface BaseRestApiRequestConfig {
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers: Record<string, string>;
}

export interface WithEndpointParamsId extends BaseRestApiRequestConfig {
  endpoint: (email: string) => string;
}

export interface WithEndpointEmptyParams extends BaseRestApiRequestConfig {
  endpoint: () => string;
}
