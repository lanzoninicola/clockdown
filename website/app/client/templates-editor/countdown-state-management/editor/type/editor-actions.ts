import type { EditorStateData } from "../../common/types/editor";
import type { FontsizeUnit } from "../../../countdown-widget-typography/types";
import type { CountdownModel } from "../../../countdown-widget/types";
import type { ChakraToken } from "../../common/types/theme/responsive";

export interface LoadingState<T> {
  type: "LOAD_INITIAL_STATE";
  payload: T;
}

interface EditorSetCurrentCountdownAction {
  type: "EDITOR_SET_CURRENT_COUNTDOWN";
  payload: CountdownModel["id"];
}

interface EditorOnChangeTokenLayoutResponsiveAction {
  type: "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE";
  payload: ChakraToken;
}

interface EditorOnChangeFontSizeUnitUsedAction {
  type: "EDITOR_ON_CHANGE_FONT_SIZE_UNIT_USED";
  payload: FontsizeUnit;
}

export type EditorStateAction =
  | LoadingState<EditorStateData>
  | EditorSetCurrentCountdownAction
  | EditorOnChangeTokenLayoutResponsiveAction
  | EditorOnChangeFontSizeUnitUsedAction;
