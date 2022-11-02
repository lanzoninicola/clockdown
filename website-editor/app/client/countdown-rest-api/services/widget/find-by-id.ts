import {
  CountdownSettingsAndThemeModel,
  StringOrNumber,
} from "../../../countdown-widget/types";
import { WIDGET_REST_API_ENDPOINTS } from "../../constants/widget/endpoints";
import { APIResponse } from "../../types";

//TODO: IMPORTANT!!! use AbortController https://wanago.io/2022/04/11/abort-controller-race-conditions-react/

/**
 * Returns the editor settings for the given countdown id.
 *
 * @param id - CountdownModel ID
 * @returns APIResponse<CountdownModel[]>
 *
 * Response codes:
 * - "success": The record was found.
 * - "error": An error occurred.
 * - "warning": No records exists for the given id.
 *
 * If a record in the database is not found, the API will not return a payload.
 */
export const findById = async (
  id: StringOrNumber | null | undefined
): Promise<APIResponse<CountdownSettingsAndThemeModel>> => {
  if (id === null || id === undefined) {
    return {
      code: "error",
      message: "No countdown id was provided.",
    };
  }

  const { endpoint, method } = WIDGET_REST_API_ENDPOINTS.findById;

  return await (
    await fetch(endpoint(id), {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};
