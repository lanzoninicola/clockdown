import { useState, useCallback, useLayoutEffect } from "react";

interface Size {
  width: number;
  height: number;
}

export default function useHtmlElementSize(
  ref: React.RefObject<HTMLElement> | undefined | null
) {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const getSize = useCallback(() => {
    if (ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  }, [ref]);
  useLayoutEffect(() => {
    getSize();
    document.addEventListener("resize", getSize);
    return () => {
      document.removeEventListener("resize", getSize);
    };
  }, [ref, getSize]);
  return size;
}
