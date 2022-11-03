import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import PremiumButton from "../../premium-button/premium-button";
import UpgradePremiumImage from "../common/upgrade-premium-image/upgrade-premium-image";

interface PremiumFeatureProps {
  isOpen: boolean;
  onClose: () => void;
  ctaVariant?: number;
  bodyText: string | React.ReactNode;
}

/**
 * Show a modal and a button to become premium
 *
 * @param {boolean} isOpen - from the ChakraUI useDisclousure() hook
 * @param {function} onClose - from the ChakraUI useDisclousure() hook
 * @param {number} ctaVariant - The variant of the cta text to use (1, 2 or 3)
 * @param {string | React.ReactNode} bodyText - Text or node to add into the body of modal
 */
export default function UpgradePremiumModal({
  isOpen,
  onClose,
  bodyText,
  ctaVariant = 1,
}: PremiumFeatureProps) {
  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const defaultBodyText = t("premiumFeatures.modal.body.default");

  return (
    <>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">
            {t("premiumFeatures.modal.title")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack gap={8}>
              <UpgradePremiumImage width="250px" />
              <Text className="theme-font" fontSize={"sm"}>
                {bodyText || defaultBodyText}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"} pb={8}>
            <PremiumButton
              ref={initialRef}
              textVariant={ctaVariant}
              borderWidth={"inherit"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
