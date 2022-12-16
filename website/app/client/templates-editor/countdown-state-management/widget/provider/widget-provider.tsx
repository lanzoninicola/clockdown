import React, { useCallback, useEffect } from "react";

import CONFIG_INITIAL_STATE from "../../common/initial-states/config/initial-state";
import THEME_INITIAL_STATE from "../../common/initial-states/theme/initial-state";
import TIMER_INITIAL_STATE from "../../common/initial-states/timer/initial-state";
import { ConfigStateData } from "../../common/types/config";
import { ThemeStateData } from "../../common/types/theme";
import { TimerSettingsStateData } from "../../common/types/timer-settings";
import { decrypt } from "../../utils/crypto";
import { WidgetContext } from "../context/widget-context";
import widgetReducer from "../reducer/widgetReducer";

interface WidgetProviderProps {
  children: React.ReactNode;
  timerSettings: string | TimerSettingsStateData;
  theme: string | ThemeStateData;
  config: string | ConfigStateData;
  isEditorMode: boolean;
}

/**
 * This provides the state of the countdown widget that contains the following informations:
 *  1. the basic widget of the countdown widget (target date, timezone). Data are provided by calling the REST API.
 *  2. the current countdown value is provided in different ways depending on the context.:
 *
 *     *** WHEN WORKING WITH THE EDITOR ***
 *    - it is the countdown that is currently being edited.
 *    - it is updated when the user choose a countdown to edit from the list of countdowns.
 *
 *    *** WHEN WORKING WITH THE COUNTDOWN WIDGET ***
 *    - it is the countdown that is currently being displayed, isolated on the front-end pages.
 *    - it is provided by the [data-id] attribute when is rendered to the DOM when the user add the shortcode with the id attribute in the page.
 *
 * @param current  - the current countdown ID is currently being edited/displayed
 *
 * @returns
 */
export default function WidgetProvider({
  children,
  timerSettings,
  theme,
  config,
  isEditorMode,
}: WidgetProviderProps) {
  const maybeDecryptState = useCallback(
    (state: any, initialState: any) => {
      if (isEditorMode) {
        return {
          ...initialState,
          ...state,
        };
      }

      const decryptedState = JSON.parse(decrypt(state as string));

      return {
        ...initialState,
        ...decryptedState,
      };
    },
    [isEditorMode]
  );

  const [timerSettingsStateData, timerSettingsDispatcher] = React.useReducer(
    widgetReducer,
    maybeDecryptState(timerSettings, TIMER_INITIAL_STATE)
  );

  useEffect(() => {
    timerSettingsDispatcher({
      type: "TIMER_SETTINGS_ON_INIT",
      payload: maybeDecryptState(timerSettings, TIMER_INITIAL_STATE),
    });
  }, [timerSettings, isEditorMode, maybeDecryptState]);

  console.log(maybeDecryptState(theme, THEME_INITIAL_STATE));

  return (
    <WidgetContext.Provider
      value={{
        timerSettings: timerSettingsStateData,
        timerSettingsDispatcher,
        theme: maybeDecryptState(theme, THEME_INITIAL_STATE),
        config: maybeDecryptState(config, CONFIG_INITIAL_STATE),
        isEditorMode,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}
