import { Context, useContextSelector } from "use-context-selector";
import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeStateData } from "../../types/theme";

export default function useThemeState<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeStateData {
  const theme = useContextSelector<T, ThemeStateData>(
    context,
    (ctx: T) => ctx.theme
  );

  return {
    ...theme,
  };
}
