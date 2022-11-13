






const tw = (translationDatabase:any, locale: string) => (slice: [key: string]: string): string => {
  const translation = translationDatabase[locale];

  if (!translation) {
    throw new Error(`No translation found for locale ${locale}`);
  }

  return translation[slice].capitalize() || "";
}

export default tw
