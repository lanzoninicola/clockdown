import { ConfigStateData } from "../../common/types/config";

interface ConfigInitStateAction {
  type: "CONFIG_INIT_STATE";
  payload: ConfigStateData;
}

export type ConfigStateAction = ConfigInitStateAction;
