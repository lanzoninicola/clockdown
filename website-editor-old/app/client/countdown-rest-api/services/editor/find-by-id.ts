import { CountdownSettingsAndThemeModel } from "../../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { APIResponse } from "../../types";

/**
 * Returns the editor settings for the given countdown id.
 *
 * @param id - CountdownModel ID
 * @returns APIResponse<EditorSettings | string>
 *
 * Response codes:
 * - "success": The record was found.
 * - "error": An error occurred.
 * - "warning": No records exists for the given id.
 *
 * If a record in the database is not found, the API will not return a payload.
 */
const findById = async (
  id: number
): Promise<APIResponse<CountdownSettingsAndThemeModel>> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.findById;

  return await (
    await fetch(endpoint(id), {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default findById;
