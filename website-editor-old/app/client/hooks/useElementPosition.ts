import { useCallback, useLayoutEffect, useState } from "react";
import { StringOrNumber } from "../countdown-widget/types";

const AUTO = "auto";

type AutoOrNumber = StringOrNumber | "auto";

interface ElementPosition {
  top: AutoOrNumber;
  left: AutoOrNumber;
  right: AutoOrNumber;
  bottom: AutoOrNumber;
}

export default function useElementPosition(
  ref: React.RefObject<HTMLElement> | undefined | null
): ElementPosition {
  const [ElementPosition, setElementPosition] = useState<ElementPosition>({
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
  });

  const handleChangePosition = useCallback(() => {
    if (ref && ref.current) {
      setElementPosition(getPosition(ref.current));
    }
  }, [ref]);

  useLayoutEffect(() => {
    handleChangePosition();

    document.addEventListener("resize", handleChangePosition);

    return () => {
      document.removeEventListener("resize", handleChangePosition);
    };
  }, [ref]);

  return ElementPosition;
}

// End of hook function

function getStyle(el: Element, styleName: string) {
  return getComputedStyle(el).getPropertyValue(styleName);
}

function getOffset(el: HTMLElement) {
  if (!el) {
    return { top: 0, left: 0, bottom: 0, right: 0 };
  }
  const rect = el.getBoundingClientRect();
  const doc = el.ownerDocument;
  if (!doc) throw new Error("Unexpectedly missing <document>.");
  const win: Window = doc.defaultView || window;

  const winX =
    win.scrollX ||
    (doc.documentElement || doc.body.parentNode || doc.body).scrollLeft;
  const winY =
    win.scrollY ||
    (doc.documentElement || doc.body.parentNode || doc.body).scrollTop;

  return {
    top: rect.top + winX,
    left: rect.left + winY,
    bottom: AUTO,
    right: AUTO,
  };
}

function getPosition(el: HTMLElement | null) {
  if (!el) {
    return { top: 0, left: 0, bottom: 0, right: 0 };
  }

  if (getStyle(el, "position") === "fixed") {
    const offset = el.getBoundingClientRect();

    return {
      top: offset.top,
      left: offset.left,
      bottom: AUTO,
      right: AUTO,
    };
  }

  const offset = getOffset(el);
  const parentOffset = getParentOffset(el);
  const marginTop = parseInt(getStyle(el, "marginTop"), 10) || 0;
  const marginLeft = parseInt(getStyle(el, "marginLeft"), 10) || 0;

  const elTopPos = offset.top - parentOffset.top - marginTop;
  const elLeftPos = offset.left - parentOffset.left - marginLeft;

  /*
   *   if the calling element is below 75% of the display window,
   *   the element that will use the offset of the calling element to determine its position
   *   should be displayed above the calling element, to avoid scrolling to make the element visible
   */
  const doc = el.ownerDocument;
  const win: Window = doc.defaultView || window;
  const winViewportH = win.innerHeight;
  if (el.getBoundingClientRect().top > winViewportH * 0.75) {
    return {
      top: AUTO,
      left: elLeftPos,
      right: AUTO,
      bottom: 10,
    };
  }

  return {
    top: elTopPos,
    left: elLeftPos,
    right: AUTO,
    bottom: AUTO,
  };
}

function getParentOffset(el: HTMLElement | null) {
  if (!el) {
    return { top: 0, left: 0, bottom: 0, right: 0 };
  }

  let parentOffset = { top: 0, left: 0 };
  const doc = el.ownerDocument;
  let offsetParent = (el.offsetParent as HTMLElement) || doc.documentElement;

  while (
    offsetParent &&
    (offsetParent === doc.body || offsetParent === doc.documentElement)
  ) {
    offsetParent = offsetParent.parentNode as HTMLElement;
  }

  if (offsetParent && offsetParent !== el && offsetParent.nodeType === 1) {
    parentOffset = getOffset(offsetParent);
    parentOffset.top += parseInt(getStyle(offsetParent, "borderTopWidth")) || 0;
    parentOffset.left +=
      parseInt(getStyle(offsetParent, "borderLeftWidth")) || 0;
  }

  return parentOffset;
}
