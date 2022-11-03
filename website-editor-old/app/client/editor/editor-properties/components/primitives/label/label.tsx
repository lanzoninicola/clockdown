import { FormLabel, FormLabelProps } from "@chakra-ui/react";

export default function Label({
  size = "sm",
  children,
  ...props
}: FormLabelProps) {
  return (
    <FormLabel
      className="theme-font"
      fontSize={size}
      color="#666666"
      pl={1}
      fontWeight={500}
      m={0}
      lineHeight="1.2"
      {...props}
    >
      {children}
    </FormLabel>
  );
}
