import { Flex, FlexProps } from "@chakra-ui/react";
import GroupTitle from "../group-title/group-title";

interface PropertyGroupWrapperProps extends FlexProps {
  showGroupTitle?: boolean;
  title?: string;
}

export default function PropertyGroupWrapper({
  children,
  showGroupTitle = true,
  title,
  ...props
}: PropertyGroupWrapperProps) {
  return (
    <Flex flexDirection={"column"} gap="1rem" {...props}>
      {showGroupTitle && <GroupTitle>{title}</GroupTitle>}
      {children}
    </Flex>
  );
}
