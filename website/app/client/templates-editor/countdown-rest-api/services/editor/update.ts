import {
  CountdownModel,
  CountdownSettingsAndTheme,
} from "../../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { getRestHeaders } from "../../utils";
import { APIResponse } from "../../types";

/**
 * Updates the editor settings record for the given countdown id.
 * @param id - CountdownModel ID
 * @param editorSettings - Editor settings
 * @returns APIResponse
 *
 * Response codes:
 * - "warning" if the record was not found
 * - "success" if the record was updated
 * - "error" if the record was not updated
 *
 * No payload is returned.
 */
const update = async (
  id: CountdownModel["id"],
  payload: CountdownSettingsAndTheme
): Promise<APIResponse> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.update;
  const headers = getRestHeaders();

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify({
        countdown_id: id,
        settings: JSON.stringify(payload),
      }),
      headers,
    })
  ).json();
};

export default update;
