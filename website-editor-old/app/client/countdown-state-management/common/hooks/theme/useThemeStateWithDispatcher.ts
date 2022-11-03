import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../../editor/context/editor-context";
import { ThemeStateData } from "../../types/theme";
import { ThemeStateAction } from "../../../editor/type/theme-actions";

interface ThemeStateDataWithDispatcher extends ThemeStateData {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
}

export default function useThemeStateWithDispatcher(): ThemeStateDataWithDispatcher {
  const { theme: editorTheme, themeDispatcher } = useContextSelector(
    EditorContext,
    (ctx) => ctx
  );

  return {
    ...editorTheme,
    themeDispatcher,
  };
}
