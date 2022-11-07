import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import Teext from "../../../global/common/layout/teext/teext";
import ModalNewCountdown from "../modal-new-countdown/modal-new-countdown";

export default function ModalFirstCountdown() {
  const { isOpen, onClose } = useDisclosure({ isOpen: true });

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdowns.firstCountdown.header")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Teext>{t("countdowns.firstCountdown.body")}</Teext>
          </ModalBody>

          <ModalFooter>
            <ModalNewCountdown />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
