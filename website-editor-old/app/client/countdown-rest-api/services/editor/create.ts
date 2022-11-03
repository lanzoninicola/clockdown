import { CountdownSettingsAndTheme } from "../../../countdown-state-management/common/types";
import {
  CountdownModel,
  CountdownSettingsAndThemeModel,
} from "../../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { APIResponse } from "../../types";
import { getRestHeaders } from "../../utils";

/**
 * Creates a new editor settings record for the given countdown id.
 * @param id - CountdownModel ID
 * @param editorSettings - Editor settings
 * @returns APIResponse
 *
 * Response codes:
 * - "success": The record was successfully created.
 * - "error": An error occurred.
 * - "warning": The record already exists.
 *
 * No payload is returned.
 *
 */
const create = async (
  id: CountdownModel["id"],
  settings?: CountdownSettingsAndTheme
): Promise<APIResponse<CountdownSettingsAndThemeModel["id"]>> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.create;
  const headers = getRestHeaders();

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify({
        countdown_id: id,
        settings: settings ? JSON.stringify(settings) : null,
      }),
      headers,
    })
  ).json();
};

export default create;
