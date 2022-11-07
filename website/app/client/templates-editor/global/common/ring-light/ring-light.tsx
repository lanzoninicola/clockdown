import { Box } from "@chakra-ui/react";

interface RingLightProps {
  children: React.ReactNode;
  isVisible: boolean;
  [key: string]: any;
}

export default function RingLight({
  children,
  isVisible,
  ...props
}: RingLightProps) {
  return (
    <Box
      border={isVisible ? "2px solid" : undefined}
      borderColor={isVisible ? "blue.200" : undefined}
      borderRadius={isVisible ? "md" : undefined}
      {...props}
    >
      {children}
    </Box>
  );
}
