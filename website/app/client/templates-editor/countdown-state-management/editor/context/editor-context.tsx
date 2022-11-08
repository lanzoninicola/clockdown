import { createContext } from "use-context-selector";
import { EditorContextDataWithDispatch } from "../../common/types";

export const EditorContext = createContext<EditorContextDataWithDispatch>(
  {} as EditorContextDataWithDispatch
);
