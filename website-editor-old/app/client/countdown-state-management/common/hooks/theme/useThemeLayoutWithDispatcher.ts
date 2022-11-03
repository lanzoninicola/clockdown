import { ThemeStateAction } from "../../../editor/type/theme-actions";
import { ThemeLayoutContextData } from "../../types/theme/layout";
import useThemeStateWithDispatcher from "./useThemeStateWithDispatcher";

type ThemeLayoutContextDataWithDispatcher = ThemeLayoutContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

export default function useThemeLayoutWithDispatcher(): ThemeLayoutContextDataWithDispatcher {
  const { layout, themeDispatcher } = useThemeStateWithDispatcher();

  return {
    ...layout,
    themeDispatcher,
  };
}
