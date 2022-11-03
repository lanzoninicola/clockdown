import { CountdownModel } from "../../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";

import { APIResponse } from "../../types";
import { getRestHeaders } from "../../utils";

const create = async (
  countdown: Omit<CountdownModel, "id" | "created_at" | "updated_at">
): Promise<APIResponse<CountdownModel["id"]>> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.create;
  const headers = getRestHeaders();

  return await (
    await fetch(endpoint(), {
      method: method,
      body: JSON.stringify(countdown),
      headers,
    })
  ).json();
};

export default create;
