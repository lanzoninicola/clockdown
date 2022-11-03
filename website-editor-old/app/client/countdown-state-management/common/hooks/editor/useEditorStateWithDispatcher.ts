import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../../editor/context/editor-context";
import { EditorStateData } from "../../types/editor";
import { EditorStateAction } from "../../../editor/type/editor-actions";

type EditorStateDataWithDispatcher = EditorStateData & {
  editorDispatcher: React.Dispatch<EditorStateAction>;
};

export default function useEditorStateWithDispatcher(): EditorStateDataWithDispatcher {
  const state = useContextSelector(EditorContext, (state) => state.editor);

  const editorDispatcher = useContextSelector(
    EditorContext,
    (state) => state.editorDispatcher
  );

  useEffect(() => {
    state.currentToken === undefined &&
      console.error("useEditorState hook must be used within a EditorProvider");
  }, [state.currentToken]);

  return {
    ...state,
    editorDispatcher,
  };
}
