export interface ThemeLayoutContextData {
  containerSize: ElementSize;
  /** Remove any link to the countdown */
  removeLink: boolean;
  /** The URL target when click on the countdown */
  linkTarget: string;
  /** The text used for the countdown title */
  orientation: LayoutOrientation;
  /** The space between the title and timer (1)space-evenly (2)space-around (3)space-between */
  gap: number;
  /** The height of countdown wrapper in REM */
  height: number;
  /** Make the background transparent */
  transparentBackground: boolean;
  /** The background color of the countdown */
  backgroundColor: string | null;
  /** The border widht */
  borderWidth: number;
  /** The border color */
  borderColor: string | null;
  /** The border radius */
  borderRadius: number;
  /** The order of items (only for mobile perspective) */
  reverseOrderItems: boolean;
  /** The css created with the css editor */
  css: string | null;
}

export type LayoutOrientation = "auto" | "vertical" | "horizontal";

export interface ElementSize {
  width: number;
  height: number;
}
