import { ThemeStateAction } from "../../../editor/type/theme-actions";
import { ThemeTimerStateData } from "../../types/theme/timer";
import useThemeStateWithDispatcher from "./useThemeStateWithDispatcher";

export type ThemeTimerContextDataWithDispatcher = ThemeTimerStateData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerWithDispatcher(): ThemeTimerContextDataWithDispatcher {
  const { timer, themeDispatcher } = useThemeStateWithDispatcher();

  return {
    ...timer,
    themeDispatcher,
  };
}
