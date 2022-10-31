import { Context } from "use-context-selector";
import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeTemplateContextData } from "../../types/theme/template";
import useThemeState from "./useThemeState";

export default function useThemeTemplate<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeTemplateContextData {
  const theme = useThemeState(context);

  return {
    id: theme.template.id,
    name: theme.template.name,
    style: theme.template.style,
  };
}
