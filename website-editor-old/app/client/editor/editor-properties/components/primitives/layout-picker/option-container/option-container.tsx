import { Box, VStack } from "@chakra-ui/react";

interface OptionContainerProps {
  children: React.ReactNode;
  value: string;
  onClick?: (optionValue: string) => void | undefined;
  [key: string]: any;
}

export default function OptionContainer({
  children,
  onClick,
  value,
  ...props
}: OptionContainerProps) {
  return (
    <Box
      padding={".5rem"}
      _hover={{
        backgroundColor: "gray.100",
        cursor: "pointer",
      }}
      onClick={onClick ? () => onClick(value) : undefined}
      borderRadius={"5px"}
      {...props}
    >
      <VStack
        className="option-container"
        alignItems={"flex-start"}
        maxW={"500px"}
      >
        {children}
      </VStack>
    </Box>
  );
}
