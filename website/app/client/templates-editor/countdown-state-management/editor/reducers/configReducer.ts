import type { ConfigStateData } from "../../common/types/config";
import type { ConfigStateAction } from "../type/config-actions";

export default function configReducer(
  state: ConfigStateData,
  action: ConfigStateAction
): ConfigStateData {
  switch (action.type) {
    case "LOAD_INITIAL_STATE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
