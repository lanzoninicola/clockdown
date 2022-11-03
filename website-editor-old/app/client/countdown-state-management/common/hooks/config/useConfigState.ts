import { Context, useContextSelector } from "use-context-selector";
import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ConfigStateData } from "../../types/config";

export default function useConfigState<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ConfigStateData {
  const config = useContextSelector<T, ConfigStateData>(
    context,
    (ctx: T) => ctx.config
  );

  return config;
}
