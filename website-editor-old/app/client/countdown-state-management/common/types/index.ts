import { ConfigStateData } from "./config";
import { ConfigStateAction } from "../../editor/type/config-actions";
import { EditorStateData } from "./editor";
import { EditorStateAction } from "../../editor/type/editor-actions";
import { ThemeStateData } from "./theme";
import { ThemeStateAction } from "../../editor/type/theme-actions";
import { TimerSettingsStateData } from "./timer-settings";
import { TimerSettingsStateAction } from "../../editor/type/timer-settings-actions";

export interface EditorContextDataWithDispatch extends EditorContextData {
  editorDispatcher: React.Dispatch<EditorStateAction>;
  timerSettingsDispatcher: React.Dispatch<TimerSettingsStateAction>;
  themeDispatcher: React.Dispatch<ThemeStateAction>;
  configDispatcher: React.Dispatch<ConfigStateAction>;
}

export interface WidgetContextDataWithDispatch extends WidgetContextData {
  timerSettingsDispatcher: React.Dispatch<TimerSettingsStateAction>;
}

export interface WidgetContextData {
  timerSettings: TimerSettingsStateData;
  theme: ThemeStateData;
  config: ConfigStateData;
  isEditorMode: boolean;
}

/**
 * This describes the shape of the context data used in the components logic.
 * This is used to pass data between the components.
 *
 * This contains part of the information coming from the editor and other from the logic of components.
 */
export interface EditorContextData {
  editor: EditorStateData;
  timerSettings: TimerSettingsStateData;
  theme: ThemeStateData;
  config: ConfigStateData;
}

export type CountdownSettingsAndTheme = TimerSettingsStateData & ThemeStateData;

export type CountdownGlobalAction =
  | EditorStateAction
  | TimerSettingsStateAction
  | ThemeStateAction
  | ConfigStateAction;

export type RuntimeEnvironment = "wordpress" | "other";
