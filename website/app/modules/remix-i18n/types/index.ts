export interface Language {
  // name of the language used for the countdown label
  name: string;
  // locale of the language used for the countdown label (en-US, pt-BR etc...)
  locale: string;
  // where the language is used
  context?: string[];
}

/** Records of the units labels translations in singular and plural */
export type Translation = Record<Language["locale"], Record<string, string>>;
