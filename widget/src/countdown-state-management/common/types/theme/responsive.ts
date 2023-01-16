export type ChakraToken = "sm" | "md" | "lg";

export type ResponsiveValue =
  | Record<"sm", number>
  | Record<"md", number>
  | Record<"lg", number>
  | Record<"sm" | "md" | "lg", number>;
