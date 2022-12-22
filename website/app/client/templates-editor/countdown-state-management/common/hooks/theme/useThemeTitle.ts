import { Context } from "use-context-selector";

import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeTitleStateData } from "../../types/theme/title";
import useThemeState from "./useThemeState";

/**
 * Read-only hook to get the theme related to the countdown title data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
export default function useThemeTitle<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeTitleStateData {
  const theme = useThemeState(context);

  const { title } = theme;

  const {
    fontFamily,
    fontWeight,
    fontSize,
    fontColor,
    text,
    titleTextTransform,
  } = title;

  return {
    text,
    fontFamily,
    fontWeight,
    fontSize,
    fontColor,
    titleTextTransform,
  };
}
