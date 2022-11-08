import { theme as chakraTheme } from "@chakra-ui/react";

const typography = {
  fontWeights: {
    ...chakraTheme.fontWeights,
    normal: 500,
    bold: 600,
  },
  fonts: {
    ...chakraTheme.fonts,
    heading: `Inter, ${chakraTheme.fonts.heading}`,
    body: `Inter, ${chakraTheme.fonts.body}`,
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
  },
};

export default typography;
