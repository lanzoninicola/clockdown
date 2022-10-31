import { useCallback, useReducer } from "react";

const getInitialState =
  (key: string, onError?: (error: any) => void) => (initialState: any) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.log(error);

      onError?.(error);
      return initialState;
    }
  };

/**
 * useReducer hook with localStorage persistence.
 *
 * By default dispatches an action with type "INIT_STATE" or type given as option parameter to initialize the state.
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
  reducer: (state: T, action: any) => T,
  initialState: T,
  onError?: (error: any) => void
) {
  const wrappedReducer = useCallback((state: T, action: Action) => {
    const newState = reducer(state, action);
    try {
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (error) {
      console.log(error);

      onError?.(error);
    }
    return newState;
  }, []);
  return useReducer(
    wrappedReducer,
    initialState,
    getInitialState(key, onError)
  );
}
