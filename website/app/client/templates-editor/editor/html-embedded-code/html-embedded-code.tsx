import HtmlEmbeddedCodeInput from "./components/html-embedded-code-input/html-embedded-code-input";

// TODO: move to dedicated route

interface HtmlEmbeddedCodeProps {
  inlineBlock?: boolean;
  variant?: "primary" | "secondary";
}

export default function HtmlEmbeddedCode({
  inlineBlock = false,
  variant = "primary",
}: HtmlEmbeddedCodeProps) {
  return <HtmlEmbeddedCodeInput inlineBlock={inlineBlock} variant={variant} />;
}
