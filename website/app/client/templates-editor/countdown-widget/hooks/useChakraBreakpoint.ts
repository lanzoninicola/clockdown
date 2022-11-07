import { useLayoutEffect, useState } from "react";

import { ChakraToken } from "../../countdown-state-management/common/types/theme/responsive";

type ChakraBreakpoints = Record<ChakraToken, number>;

/* Chakra UI default breakpoints, values expressed in EM units */
const CHAKRA_BREAKPOINTS: ChakraBreakpoints = {
  sm: 30,
  md: 48,
  lg: 62,
};

/** Value expressed in PX */
const DEFAULT_FONT_SIZE = 16;

/**
 * Returns the breakpoint token (based on Chakra UI) of the preview container div[data-element="editor-preview-flex"]
 *
 * @returns {string} - "sm" | "md" | "lg"
 */
export default function useChakraBreakpoint(): ChakraToken {
  const [breakpoint, setBreakpoint] = useState<ChakraToken>("md");

  const editorPreviewWidth = document.querySelector(
    'div[data-element="editor-preview-flex"]'
  )?.clientWidth;

  function closestBreakpoint(width: number): ChakraToken {
    const innerWidthEM = Math.round(width / DEFAULT_FONT_SIZE);

    // get the closest breakpoint to the innerWidth compared to the default breakpoints
    // @ts-ignore
    return Object.keys(CHAKRA_BREAKPOINTS)
      .map((key) => ({
        key,
        value: CHAKRA_BREAKPOINTS[key as ChakraToken],
        diff: Math.abs(innerWidthEM - CHAKRA_BREAKPOINTS[key as ChakraToken]),
      }))
      .sort((a, b) => a.diff - b.diff)
      .map((item) => item.key)[0];
  }

  useLayoutEffect(() => {
    const width = editorPreviewWidth || window.innerWidth;

    setBreakpoint(closestBreakpoint(width));

    const debouncedHandleResize = debounce(() => {
      setBreakpoint(closestBreakpoint(width));
    }, 100);
    document.addEventListener("resize", debouncedHandleResize);
    return () => {
      document.removeEventListener("resize", debouncedHandleResize);
    };
  }, [editorPreviewWidth]);

  return breakpoint;
}

function debounce(cb: () => void, ms: number) {
  let timer: NodeJS.Timeout | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      cb.apply(this, arguments);
    }, ms);
  };
}
