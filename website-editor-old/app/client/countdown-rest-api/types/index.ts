/**
 * Shape of the REST API response.
 *
 * {
 *   code: "error" | "success";
 *   message: string;
 *   data: {
 *      operation: string;
 *      status: number;
 *      payload?: {
 *       operation: string;
 *       status: number;
 *       payload: T  // "T" parameter of APIResponse interface
 *      }
 *   };
 * }
 */

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
  payload: undefined;
}

/** Payload when server error occured */
export interface ErrorResponse {
  status: 500;
  payload: undefined;
}
