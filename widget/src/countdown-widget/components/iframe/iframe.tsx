import React, { useState } from "react";
import { createPortal } from "react-dom";

interface IframeProps {
  children: React.ReactNode;
  [key: string]: any;
}

const Iframe = ({ children, ...props }: IframeProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);

  const iframeBody = contentRef?.contentWindow?.document?.body;

  if (iframeBody) {
    iframeBody.style.margin = "0";
    iframeBody.style.padding = "0";
    iframeBody.style.overflow = "hidden";
    iframeBody.style.boxSizing = "border-box";
    iframeBody.style.position = "relative";
  }

  return (
    <iframe {...props} ref={setContentRef} title="clockdown-widget-preview">
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
};

export default Iframe;
