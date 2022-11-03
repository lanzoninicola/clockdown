import { Flex, Heading } from "@chakra-ui/react";

interface GroupTitleProps {
  children: React.ReactNode;
}

export default function GroupTitle({ children }: GroupTitleProps) {
  return (
    <Flex h="48px" alignItems={"center"}>
      <Heading as="h2" className="theme-font" fontSize={"sm"} fontWeight={600}>
        {children}
      </Heading>
    </Flex>
  );
}
