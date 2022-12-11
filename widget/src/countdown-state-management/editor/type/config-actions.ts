import { ConfigStateData } from "../../common/types/config";

export interface LoadingState<T> {
  type: "LOAD_STATE";
  payload: T;
}

interface ConfigInitStateAction {
  type: "CONFIG_INIT_STATE";
  payload: ConfigStateData;
}

export type ConfigStateAction =
  | LoadingState<ConfigStateData>
  | ConfigInitStateAction;
