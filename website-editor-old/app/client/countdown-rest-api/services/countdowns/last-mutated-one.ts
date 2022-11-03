import { CountdownSettingsAndThemeModel } from "../../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";
import { getRestHeaders } from "../../utils";
import { APIResponse } from "../../types";

/**
 * Payload returns by the API might be:
 * - a string (successfully message) with status 200
 * - null (error occured on server) with status >=400
 */
const lastMutatedOne = async (): Promise<
  APIResponse<CountdownSettingsAndThemeModel>
> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.lastMutatedOne;
  const headers = getRestHeaders();

  return await (
    await fetch(endpoint(), {
      method: method,
      headers,
    })
  ).json();
};

export default lastMutatedOne;
