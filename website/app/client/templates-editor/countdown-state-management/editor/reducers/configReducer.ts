import { ConfigStateData } from "../../common/types/config";
import { ConfigStateAction } from "../type/config-actions";

export default function configReducer(
  state: ConfigStateData,
  action: ConfigStateAction
): ConfigStateData {
  switch (action.type) {
    case "CONFIG_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
