import { CountdownModel } from "../../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { getRestHeaders } from "../../utils";
import { APIResponse } from "../../types";

/**
 * Removes the editor settings record for the given countdown id.
 * @param id - CountdownModel ID
 * @returns APIResponse
 *
 * Payload returns by the API might be:
 * - a string (successfully message) with status 200
 * - null (error occured on server) with status >=400
 */
const remove = async (id: CountdownModel["id"]): Promise<APIResponse> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.delete;
  const headers = getRestHeaders();

  return await (
    await fetch(endpoint(id), {
      method: method,
      headers,
    })
  ).json();
};

export default remove;
