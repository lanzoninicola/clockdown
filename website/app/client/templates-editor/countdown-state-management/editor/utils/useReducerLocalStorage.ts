import { useCallback, useEffect, useReducer } from "react";

/**
 * useReducer hook with localStorage persistence.
 *
 * @param key  The key to use for local storage
 * @param reducer  The reducer function
 * @param initialState  The initial state
 * @param onError - Optional The function to call when there is an error loading the state from local storage (default: console.error)
 *
 * @returns
 */
export default function useReducerLocalStorage<T, Action>(
  key: string,
  reducer: (state: T, action: Action) => T,
  initialState: T,
  onError?: (error: any) => void
): [T, React.Dispatch<Action>] {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadState = useCallback(() => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return null;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error(error);
      }
      return null;
    }
  }, [key, onError]);

  const saveState = useCallback(
    (state: T) => {
      try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
      } catch (error) {
        if (onError) {
          onError(error);
        } else {
          console.error(error);
        }
      }
    },
    [key, onError]
  );

  useEffect(() => {
    try {
      const loadedState = loadState();

      if (loadedState) {
        // @ts-ignore
        dispatch({ type: "LOAD_INITIAL_STATE", payload: loadedState });
      }
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error(error);
      }
    }
  }, [key, loadState, onError]);

  useEffect(() => {
    saveState(state);
  }, [key, state, saveState]);

  return [state, dispatch];
}
