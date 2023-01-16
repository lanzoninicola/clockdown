import { ChakraToken, ResponsiveValue } from "./responsive";

export interface ThemeTitleStateData {
  /** The text used for the countdown title */
  text: string;
  /** The font family of the title text */
  fontFamily: string | null;
  /** The font weight of the title text */
  fontWeight: string | null;
  /** The font size of the title text in pixel */
  fontSize: ResponsiveValue | null;
  /** The font color of the title text */
  fontColor: string | null;
  /** The text transform of the title text */
  titleTextTransform: "capitalize" | "uppercase" | "lowercase";
}

export interface ThemeTitleContextSetter {
  setText: (text: string) => void;
  setFontFamily: (fontFamily: string) => void;
  setFontWeight: (fontWeight: string) => void;
  setFontSize: (token: ChakraToken, size: number) => void;
  setFontColor: (fontColor: string) => void;
}
