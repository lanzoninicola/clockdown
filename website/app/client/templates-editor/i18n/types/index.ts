export type LanguagesCode = "en" | "pt" | "es" | "it";

export interface Languages {
  [key: string]: {
    nativeName: string;
  };
}
