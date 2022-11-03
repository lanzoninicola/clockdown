import { Flex } from "@chakra-ui/react";

import { ChakraToken } from "../../../../../countdown-state-management/common/types/theme/responsive";
import useCustomScrollbar from "../../../../../hooks/useCustomScrollbar";
import DEFAULT_BREAKPOINTS from "../../../constants/default-breakpoints";

interface PreviewWrapperProps {
  children: React.ReactNode;
  currentToken: ChakraToken;
}

export default function PreviewWrapper({
  currentToken,
  children,
  ...props
}: PreviewWrapperProps) {
  const scrollbar = useCustomScrollbar();

  return (
    <Flex
      data-element="preview-wrapper"
      justifyContent={"center"}
      height={"100%"}
      // w={DEFAULT_BREAKPOINTS[currentToken]}
      overflowX={"auto"}
      css={scrollbar}
      position="relative"
      {...props}
    >
      {children}
    </Flex>
  );
}
