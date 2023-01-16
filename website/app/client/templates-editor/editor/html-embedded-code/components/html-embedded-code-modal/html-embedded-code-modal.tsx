import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BiCode } from "@react-icons/all-files/bi/BiCode";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import usePremiumFeaturesContext from "~/client/templates-editor/premium-features-provider/hooks/usePremiumFeaturesContext";

import useHtmlCode from "../../hooks/useHtmlCode";
import ButtonCopy from "../button-copy/button-copy";
import HtmlEmbeddedCodeForm from "../html-embedded-code-form/html-embedded-code-form";

export default function HtmlEmbeddedCodeModal() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isPremiumUser } = usePremiumFeaturesContext();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const htmlCode = useHtmlCode();

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<BiCode />}
        variant={isPremiumUser ? "outline" : "solid"}
        className="theme-font"
        size={"lg"}
        colorScheme={"green"}
      >
        {t("global.htmlEmbeddedCode.buttonLabel")}
      </Button>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("global.htmlEmbeddedCode.modalTitle")}
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} alignItems={"flex-start"}>
              <Text className="theme-font">
                {t("global.htmlEmbeddedCode.modalDescription")}
              </Text>
              <HtmlEmbeddedCodeForm htmlCode={htmlCode} variant="textarea" />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <ButtonCopy text={htmlCode} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
