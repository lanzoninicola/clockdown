import capitalize from "~/client/common/utils/capitalize";







const tw = (translationDatabase:any, locale: string) => (slice: [key: string]: string): string => {
  const translation = translationDatabase[locale];

  if (!translation) {
    throw new Error(`No translation found for locale ${locale}`);
  }

  return capitalize(translation[slice]) || "";
}

export default tw
