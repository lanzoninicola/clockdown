import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BiCode } from "@react-icons/all-files/bi/BiCode";
import { useTranslation } from "react-i18next";

import Teext from "../../../../global/common/layout/teext/teext";
import { PremiumButtonWithPopover } from "../../../../premium-features";
import useIsPremiumInstallation from "../../../../premium-features/hooks/useIsPremiumInstallation";
import useHtmlCode from "../../hooks/useHtmlCode";
import HtmlEmbeddedCodeForm from "../html-embedded-code-form/html-embedded-code-form";
import Platforms from "../platforms/platforms";

export default function HtmlEmbeddedCodeInput() {
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isPremium = useIsPremiumInstallation();
  const htmlCode = useHtmlCode();

  return (
    <VStack
      gap={4}
      w={"100%"}
      position="absolute"
      bottom={"5rem"}
      left={"0"}
      zIndex={30}
    >
      <Button
        onClick={onOpen}
        leftIcon={<BiCode />}
        variant={isPremium ? "outline" : "solid"}
        className="theme-font"
        size={"lg"}
        colorScheme={"yellow"}
        fontSize={"x-large"}
        boxShadow={"xl"}
      >
        {isOpen
          ? t("global.htmlEmbeddedCode.hideCode").capitalize()
          : t("global.htmlEmbeddedCode.buttonLabel")}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent w="max-content" pb={6}>
          <ModalHeader className="theme-font">
            {t("global.htmlEmbeddedCode.modalTitle")}
          </ModalHeader>
          <ModalBody background={"transparent"}>
            <VStack spacing={8} alignItems={"center"}>
              <HtmlEmbeddedCodeForm htmlCode={htmlCode} />
              <VStack spacing={2} alignItems={"center"} maxW="350px">
                <Teext as="span" fontSize={"sm"} textAlign="center">
                  {t("global.htmlEmbeddedCode.linkDisclaimer")}
                </Teext>

                <PremiumButtonWithPopover />
              </VStack>
              <VStack spacing={0} alignItems={"center"}>
                <Teext as="span" fontSize={"sm"} textAlign="center">
                  {t("global.htmlEmbeddedCode.howToText")}
                </Teext>
                <Platforms />
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
