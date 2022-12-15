import { useLayoutEffect, useCallback, useState } from "react";

interface ElementPosition {
  top: number | "auto";
  left: number | "auto";
  right: number | "auto";
  bottom: number | "auto";
}

export default function useHtmlElementPosition(
  ref: React.RefObject<HTMLElement> | undefined | null
) {
  const [offset, setOffset] = useState<ElementPosition>({
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
  });

  const getOffset = useCallback(() => {
    if (ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const doc = ref.current.ownerDocument;
      if (!doc) throw new Error("Unexpectedly missing <document>.");

      const win: Window = doc.defaultView || window;

      const winX = win.scrollX || doc.documentElement.scrollLeft;

      const winY = win.scrollY || doc.documentElement.scrollTop;

      const top = rect.top + winY;

      const left = rect.left + winX;

      setOffset({
        top,
        left,
        bottom: top + rect.height,
        right: left + rect.width,
      });
    }
  }, [ref]);

  useLayoutEffect(() => {
    getOffset();

    document.addEventListener("resize", getOffset);

    return () => {
      document.removeEventListener("resize", getOffset);
    };
  }, [ref, getOffset]);

  return offset;
}
