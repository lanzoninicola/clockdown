import { createContext } from "use-context-selector";
import { WidgetContextDataWithDispatch } from "../../common/types";

export const WidgetContext = createContext<WidgetContextDataWithDispatch>(
  {} as WidgetContextDataWithDispatch
);
