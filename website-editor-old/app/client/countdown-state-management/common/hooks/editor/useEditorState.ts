import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../../editor/context/editor-context";
import { EditorStateData } from "../../types/editor";

export default function useEditorState(): EditorStateData {
  const state = useContextSelector(EditorContext, (state) => state.editor);

  useEffect(() => {
    state.currentToken === undefined &&
      console.error("useEditorState hook must be used within a EditorProvider");
  }, [state.currentToken]);

  return {
    ...state,
  };
}
