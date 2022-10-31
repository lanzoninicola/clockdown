import { ThemeLayoutContextData } from "./layout";
import { ThemeTemplateContextData } from "./template";
import { ThemeTimerStateData } from "./timer";
import { ThemeTitleStateData } from "./title";

/**
 * This describes the shape of data coming from the Editor related to the theme customization.
 * This is used in the Editor component to maintain syncrhronized between them.
 */
export interface ThemeStateData {
  template: ThemeTemplateContextData;
  /** All style data related to the layout of countdown */
  layout: ThemeLayoutContextData;
  /** All the properties related to the customization of title */
  title: ThemeTitleStateData;
  /** All the properties related to the customization of timer */
  timer: ThemeTimerStateData;

  /** The last action dispatched that changed the state */
  actionDispatched: string;
}
