import { Text } from "@chakra-ui/react";

export default function FormRequiredIndicator() {
  return (
    <Text as="span" role="presentation" aria-hidden="true" color="red.500">
      *
    </Text>
  );
}
