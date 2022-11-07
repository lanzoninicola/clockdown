import { Box } from "@chakra-ui/react";

interface PropertyItemProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function PropertyItem({
  children,
  ...props
}: PropertyItemProps) {
  return (
    <Box
      pl={".35rem"}
      cursor="pointer"
      _hover={{ background: "blue.200" }}
      data-element="property-wrapper"
      {...props}
    >
      <Box bg={"white"} data-element="property-inner-wrapper">
        {children}
      </Box>
    </Box>
  );
}
