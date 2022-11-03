import { CountdownModel } from "../../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";
import { getRestHeaders } from "../../utils";
import { APIResponse } from "../../types";

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
 * If a record in the database is not found, the API will return an empty array.
 */

const findAll = async (): Promise<APIResponse<CountdownModel[]>> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.findAll;
  const headers = getRestHeaders();

  return await (
    await fetch(endpoint(), {
      method: method,
      headers,
    })
  ).json();
};

export default findAll;
