import withImportant from "./withImportant";

/** It returns given style and add the prop !important if the condition is true */
export default function useImportantCSS(condition: boolean, ...args: any[]) {
  if (!condition) {
    return args;
  }

  return args.map((arg) => {
    if (typeof arg === "string") {
      return withImportant(arg);
    }

    if (Array.isArray(arg)) {
      return arg.map((item) => withImportant(item));
    }

    return arg;
  });
}
