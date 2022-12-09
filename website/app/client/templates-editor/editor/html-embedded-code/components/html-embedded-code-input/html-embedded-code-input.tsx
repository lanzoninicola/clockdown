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
import { Link, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import capitalize from "~/client/common/utils/capitalize";

import Teext from "../../../../global/common/layout/teext/teext";
import { PremiumButtonWithPopover } from "../../../../premium-features";
import useIsPremiumInstallation from "../../../../premium-features/hooks/useIsPremiumInstallation";
import useHtmlCode from "../../hooks/useHtmlCode";
import HtmlEmbeddedCodeForm from "../html-embedded-code-form/html-embedded-code-form";
import Platforms from "../platforms/platforms";

export default function HtmlEmbeddedCodeInput({
  inlineBlock = false,
  variant = "primary",
}: {
  inlineBlock?: boolean;
  variant?: "primary" | "secondary";
}) {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isPremium = useIsPremiumInstallation();
  const htmlCode = useHtmlCode();

  const position = inlineBlock === false && {
    position: "absolute",
    bottom: "5rem",
    left: "0",
    zIndex: "30",
  };

  return (
    <VStack gap={4} w={"100%"} {...position}>
      {loaderData.userAuth === null ? (
        <Link to="/login?context=app">
          <ButtonGenerateCode
            onOpen={onOpen}
            isPremium={isPremium}
            isOpen={isOpen}
            variant={variant}
          />
        </Link>
      ) : (
        <ButtonGenerateCode
          onOpen={onOpen}
          isPremium={isPremium}
          isOpen={isOpen}
          variant={variant}
        />
      )}
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

interface ButtonGenerateCodeProps {
  isOpen: boolean;
  onOpen: () => void;
  isPremium: boolean;
  variant: "primary" | "secondary";
}

function ButtonGenerateCode({
  isOpen,
  onOpen,
  isPremium,
  variant,
}: ButtonGenerateCodeProps) {
  const { t } = useTranslation();
  {
    /** base: "#73F8BA", 500: "#3DF59F", */
  }
  return (
    <Button
      onClick={onOpen}
      leftIcon={<BiCode />}
      variant={isPremium ? "outline" : "solid"}
      className="theme-font"
      size={variant === "primary" ? "lg" : "sm"}
      bg={variant === "primary" ? "yellow.300" : "#73F8BA"}
      color={"black"}
      fontSize={variant === "primary" ? "x-large" : "md"}
      boxShadow={"xl"}
      _hover={{
        bg: variant === "primary" ? "yellow.400" : "#3DF59F",
        textDecoration: "none",
      }}
    >
      {isOpen
        ? capitalize(t("global.htmlEmbeddedCode.hideCode"))
        : t("global.htmlEmbeddedCode.buttonLabel")}
    </Button>
  );
}
