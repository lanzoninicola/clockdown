import { Flex } from "@chakra-ui/react";

interface SidebarProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function Sidebar({ children, ...props }: SidebarProps) {
  return (
    <Flex
      flexDirection={"column"}
      minW="300px"
      {...props}
      position="absolute"
      top="2"
      bg="white"
      borderRadius={"lg"}
      boxShadow={"lg"}
      zIndex={1}
      h="max-content"
      p={"1rem"}
    >
      {children}
    </Flex>
  );
}
