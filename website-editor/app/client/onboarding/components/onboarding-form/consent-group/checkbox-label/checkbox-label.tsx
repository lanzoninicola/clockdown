import { Text } from "@chakra-ui/react";

interface CheckboxLabelProps {
  children: React.ReactNode;
}

export default function CheckboxLabel({ children }: CheckboxLabelProps) {
  return (
    <Text
      as="p"
      fontSize={"xs"}
      lineHeight={1.1}
      color={"gray.500"}
      className="theme-font"
    >
      {children}
    </Text>
  );
}
