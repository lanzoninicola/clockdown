import { ThemeStateAction } from "../../../editor/type/theme-actions";
import { ThemeTitleStateData } from "../../types/theme/title";
import useThemeStateWithDispatcher from "./useThemeStateWithDispatcher";

type ThemeTitleStateDataWithDispatcher = ThemeTitleStateData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Title" state.
 */
export default function useThemeTitleWithDispatcher(): ThemeTitleStateDataWithDispatcher {
  const { title, themeDispatcher } = useThemeStateWithDispatcher();

  return {
    ...title,
    themeDispatcher,
  };
}
