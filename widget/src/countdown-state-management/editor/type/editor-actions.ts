import { EditorStateData } from "../../common/types/editor";
import { FontsizeUnit } from "../../../countdown-widget-typography/types";
import { CountdownModel } from "../../../countdown-widget/types";
import { ChakraToken } from "../../common/types/theme/responsive";

export interface LoadingState<T> {
  type: "LOAD_STATE";
  payload: T;
}

interface EditorInitStateAction {
  type: "EDITOR_INIT_STATE";
  payload: EditorStateData;
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
  | EditorInitStateAction
  | EditorSetCurrentCountdownAction
  | EditorOnChangeTokenLayoutResponsiveAction
  | EditorOnChangeFontSizeUnitUsedAction;
