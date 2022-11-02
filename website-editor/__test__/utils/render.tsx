import {
  queries,
  Queries,
  render as rendertl,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import React from "react";
import EditorProvider from "../../countdown-state-management/editor/provider/editor-provider";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return <EditorProvider>{children}</EditorProvider>;
};

function render<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: React.ReactElement,
  options: RenderOptions<Q, Container, BaseElement> = {}
): RenderResult<Q, Container, BaseElement> {
  return rendertl(ui, { wrapper: Wrapper, ...options });
}

export { render };
