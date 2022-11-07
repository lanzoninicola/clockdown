import { Flex, Grid } from "@chakra-ui/react";

interface CenterContentProps {
  children: React.ReactNode;
}

export default function CenterContent({
  children,
  ...props
}: CenterContentProps) {
  return (
    <Flex justifyItems="center" data-element="center-content" {...props}>
      {children}
    </Flex>
  );
}
