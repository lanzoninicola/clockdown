import { REST_API_URL } from "..";
import { CountdownModel } from "../../../countdown-widget/types";

const COUNTDOWNS_REST_API_ENDPOINTS = {
  create: {
    method: "POST",
    endpoint: () => `${REST_API_URL}/countdowns`,
  },
  update: {
    method: "PUT",
    endpoint: (id: CountdownModel["id"]) => `${REST_API_URL}/countdowns/${id}`,
  },
  delete: {
    method: "DELETE",
    endpoint: (id: CountdownModel["id"]) => `${REST_API_URL}/countdowns/${id}`,
  },
  findAll: {
    method: "GET",
    endpoint: () => `${REST_API_URL}/countdowns`,
  },
  findById: {
    method: "GET",
    endpoint: (id: CountdownModel["id"]) => `${REST_API_URL}/countdowns/${id}`,
  },
  lastMutatedOne: {
    method: "GET",
    endpoint: () => `${REST_API_URL}/countdowns/last/settings`,
  },
};

export { REST_API_URL, COUNTDOWNS_REST_API_ENDPOINTS };
