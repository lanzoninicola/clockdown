import { Box, Flex, FlexProps, forwardRef } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { ChakraToken } from "../../../../countdown-state-management/common/types/theme/responsive";
import PreviewWrapper from "./preview-wrapper/preview-wrapper";

interface PreviewWrapperProps extends FlexProps {
  children: React.ReactNode;
  currentToken: ChakraToken;
}

const Preview = forwardRef(
  ({ currentToken, children }: PreviewWrapperProps, ref) => {
    const { t } = useTranslation();

    return (
      <Box ref={ref} data-element="preview" height={"100%"} width={"100%"}>
        {/* <DisplaySizeBar
          badgeLabel={`${t("editor.preview.tokenBadge")} ${
            DEFAULT_BREAKPOINTS[currentToken]
          } `}
          w="100%"
          color="blue.500"
        /> */}
        <PreviewWrapper currentToken={currentToken}>{children}</PreviewWrapper>
        {/* {currentToken === "sm" && (
          <DisplaySizeBar
            badgeLabel={t("editor.preview.smallestDisplay")}
            w="375px"
            color="green.500"
          />
        )} */}
      </Box>
    );
  }
);

export default Preview;
