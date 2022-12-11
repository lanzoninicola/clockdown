import EDITOR_INITIAL_STATE from "../../common/initial-states/editor/initial-state";
import TIMER_INITIAL_STATE from "../../common/initial-states/timer/initial-state";
import THEME_INITIAL_STATE from "../../common/initial-states/theme/initial-state";
import { EditorContext } from "../context/editor-context";
import editorReducer from "../reducers/editorReducer";
import timerSettingsReducer from "../reducers/timerSettingsReducer";
import themeReducer from "../reducers/themeReducer";
import type { EditorStateData } from "../../common/types/editor";
import type { EditorStateAction } from "../type/editor-actions";
import type { TimerSettingsStateData } from "../../common/types/timer-settings";
import type { TimerSettingsStateAction } from "../type/timer-settings-actions";
import type { ThemeStateData } from "../../common/types/theme";
import type { ThemeStateAction } from "../type/theme-actions";
import useReducerLocalStorage from "../utils/useReducerLocalStorage";
import CONFIG_INITIAL_STATE from "../../common/initial-states/config/initial-state";
import configReducer from "../reducers/configReducer";
import type { ConfigStateData } from "../../common/types/config";
import type { ConfigStateAction } from "../type/config-actions";

interface EditorProviderProps {
  children: React.ReactNode;
  config: ConfigStateData;
}

export default function EditorProvider({
  children,
  config,
}: EditorProviderProps) {
  const [editorState, editorDispatcher] = useReducerLocalStorage<
    EditorStateData,
    EditorStateAction
  >("__CLOCKDOWN_EDITOR_STATE__", editorReducer, EDITOR_INITIAL_STATE);

  const [timerSettingsState, timerSettingsDispatcher] = useReducerLocalStorage<
    TimerSettingsStateData,
    TimerSettingsStateAction
  >("__CLOCKDOWN_WIDGET_STATE__", timerSettingsReducer, TIMER_INITIAL_STATE);

  const [themeState, themeDispatcher] = useReducerLocalStorage<
    ThemeStateData,
    ThemeStateAction
  >("__CLOCKODOWN_THEME_STATE__", themeReducer, THEME_INITIAL_STATE);

  const [configState, configDispatcher] = useReducerLocalStorage<
    ConfigStateData,
    ConfigStateAction
  >("__CLOCKDOWN_CONFIG_STATE__", configReducer, {
    ...CONFIG_INITIAL_STATE,
    ...config,
  });

  return (
    <EditorContext.Provider
      value={{
        editor: editorState,
        editorDispatcher,
        timerSettings: timerSettingsState,
        timerSettingsDispatcher,
        theme: themeState,
        themeDispatcher,
        config: configState,
        configDispatcher,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
