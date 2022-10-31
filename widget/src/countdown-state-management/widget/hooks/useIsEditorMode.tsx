import { useContextSelector } from "use-context-selector";
import { WidgetContext } from "../context/widget-context";

export default function useIsEditorMode() {
  const isEditorMode = useContextSelector(
    WidgetContext,
    (ctx) => ctx.isEditorMode
  );
  return isEditorMode;
}
