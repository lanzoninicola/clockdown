import type { EditorStateData } from "../../common/types/editor";
import type { EditorStateAction } from "../type/editor-actions";

export default function editorReducer(
  state: EditorStateData,
  action: EditorStateAction
): EditorStateData {
  switch (action.type) {
    case "LOAD_INITIAL_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE":
      return {
        ...state,
        currentToken: action.payload,
      };

    case "EDITOR_SET_CURRENT_COUNTDOWN":
      return {
        ...state,
        currentCountdown: action.payload,
      };

    case "EDITOR_ON_CHANGE_FONT_SIZE_UNIT_USED":
      return {
        ...state,
        fontSizeUnit: action.payload,
      };

    default:
      return state;
  }
}
