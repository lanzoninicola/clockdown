import { Box, Button, Flex } from "@chakra-ui/react";
import type { FlexProps } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import capitalize from "~/client/common/utils/capitalize";

interface DialogWrapperProps {
  /** The element ref that requested the dialog */
  callerRef: React.RefObject<HTMLElement> | undefined | null;
  /** If true the dialog is visible */
  isOpen?: boolean;
  /** Show a regular button to close the dialog */
  showCloseButton?: boolean;
  /** The label of close button */
  closeButtonLabel?: string;
  /** The fn() attached to the close button if shown */
  onCloseDialog?: () => void;
  /** Add offset to the current position */
  offset?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  /** Add border colored to the top of Dialog */
  borderTopColor?: FlexProps["borderTopColor"];
  /** Childrens */
  children: React.ReactNode;
  minWidth?: string;
  minW?: string;
}

export default function DialogWrapper({
  callerRef,
  showCloseButton = true,
  closeButtonLabel,
  onCloseDialog,
  offset,
  borderTopColor,
  children,
  minWidth,
  minW,
}: DialogWrapperProps) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        position={"fixed"}
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        zIndex={100}
        bg={"blackAlpha.100"}
        overflow={"auto"}
        onClick={onCloseDialog}
        data-element="dialog-overlay"
      ></Box>
      <Flex
        role="dialog"
        data-element="dialog-wrapper"
        flexDirection={"column"}
        h="max-content"
        minW={minWidth || minW}
        bg="white"
        position={"fixed"}
        top={callerRef?.current?.offsetTop || 0}
        left={"80px"}
        zIndex={110}
        borderBottomLeftRadius={"lg"}
        borderBottomRightRadius={"lg"}
        borderTop={borderTopColor && "5px solid"}
        borderTopColor={borderTopColor && "blue.500"}
        boxShadow={"lg"}
        transition="all 0.2s ease-in-out"
      >
        <Box p={3}>
          {children}
          {showCloseButton && (
            <Button
              size="xs"
              className="theme-font"
              onClick={onCloseDialog}
              mt={4}
              w="100%"
            >
              {closeButtonLabel || capitalize(t("global.close"))}
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
}
