import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { CountdownModel } from "../../../countdown-widget/types";
import { useTranslation } from "react-i18next";
import ButtonShortcode from "./button-shortcode/button-shortcode";
import capitalize from "~/client/common/utils/capitalize";

interface ModalShortcodeProps {
  countdownId: CountdownModel["id"];
}

export default function ShortcodePreview({ countdownId }: ModalShortcodeProps) {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const shortcodeText = `[clockdown id="${countdownId}"]`;

  function copyShortcode() {
    window.navigator.clipboard.writeText(shortcodeText).then(() => {
      setIsCopied(true);
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <ButtonShortcode label="Shortcode" onClick={onOpen} />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdowns.table.shortcode")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel
                htmlFor="countdown-shortcode"
                className="theme-font"
                fontSize={"sm"}
                hidden={true}
              >
                {t("countdowns.table.shortcode")}
              </FormLabel>
              <Textarea
                id="countdown-shortcode"
                minH={"60px"}
                className="theme-font"
                value={shortcodeText}
                isReadOnly={true}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={() => copyShortcode()}
            >
              {isCopied
                ? capitalize(t("global.copied"))
                : capitalize(t("global.copy"))}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
