import { useEffect, useState } from "react";
import { ElementSize } from "../common/types/theme/layout";

type HTMLElement = HTMLDivElement;

export default function useElementSize(
  elRef: React.RefObject<HTMLElement>
): ElementSize {
  const [elSize, setContainerSize] = useState<ElementSize>({
    width: elRef.current?.offsetWidth || 0,
    height: elRef.current?.offsetWidth || 0,
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.contentBoxSize) {
        // Firefox implements `contentBoxSize` as a single content rect, rather than an array
        const contentBoxSize: ResizeObserverSize = Array.isArray(
          entry.contentBoxSize
        )
          ? entry.contentBoxSize[0]
          : entry.contentBoxSize;

        setContainerSize({
          ...elSize,
          width: Math.round(contentBoxSize.inlineSize),
          height: Math.round(contentBoxSize.blockSize),
        });
      }
    }
  });

  useEffect(() => {
    if (elRef.current) {
      const el = elRef.current;
      resizeObserver.observe(el);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return elSize;
}
