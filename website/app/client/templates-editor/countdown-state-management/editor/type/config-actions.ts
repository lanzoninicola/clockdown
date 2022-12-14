import type { ConfigStateData } from "../../common/types/config";

export interface LoadingState<T> {
  type: "LOAD_INITIAL_STATE";
  payload: T;
}

export type ConfigStateAction = LoadingState<ConfigStateData>;
