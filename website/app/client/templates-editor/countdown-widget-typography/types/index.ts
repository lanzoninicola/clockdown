export interface Typography {
  fontFamily: string;
  fontWeight: string;
  pro: boolean;
  variants?: string[];
}

export type FontsizeUnit = "px" | "em" | "rem";

/** Eg. 1rem */
export type FontSizeWithUnit = string;
