import { Context } from "use-context-selector";
import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeLayoutContextData } from "../../types/theme/layout";
import useThemeState from "./useThemeState";

/**
 * Read-only hook that returns the data for the data related to the layout.
 *
 * @returns {ThemeLayoutContextData}
 */
export default function useThemeLayout<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeLayoutContextData {
  const theme = useThemeState(context);

  return {
    ...theme.layout,
  };
}
