import React, { useState } from "react";
import { createPortal } from "react-dom";

interface IframeProps {
  children: React.ReactNode;
  [key: string]: any;
}

const Iframe = ({ children, ...props }: IframeProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default Iframe;
