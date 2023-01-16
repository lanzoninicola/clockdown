import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { CountdownModel } from "../../../countdown-widget/types";
import ButtonDelete from "../../countdowns-table/primitives/button-delete/button-delete";
import Teext from "../../../global/common/layout/teext/teext";
import { remove as removeCountdown } from "../../../countdown-rest-api/services/countdowns";
import { useSWRConfig } from "swr";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdown-rest-api/constants/countdowns/endpoints";
import { remove as removeCountdownSettings } from "../../../countdown-rest-api/services/editor";
import { useState } from "react";
import { useNotifications } from "../../../notifications";
import capitalize from "~/client/common/utils/capitalize";

interface ModalDeleteCountdownProps {
  countdown: CountdownModel;
}

export default function ModalDeleteCountdown({
  countdown,
}: ModalDeleteCountdownProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate } = useSWRConfig();
  const [isDeleteSuspense, setIsDeleteSuspense] = useState(false);

  const { error: errorNotification } = useNotifications();

  function deleteCountdown(ctd: any) {
    setIsDeleteSuspense(true);
    removeCountdown(ctd.id)
      .then((res) => {
        if (!res || !res.data) throw new Error();
        if (res?.data?.status >= 400) throw new Error();

        removeCountdownSettings(ctd.id);
      })
      .catch(() => {
        errorNotification(t("global.error"), {
          title: t("global.errorTitle"),
        });
      })
      .finally(() => {
        mutate(COUNTDOWNS_REST_API_ENDPOINTS.findAll.endpoint());
        onClose();
        setIsDeleteSuspense(false);
      });
  }

  return (
    <>
      <ButtonDelete label="Delete" onClick={onOpen} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader color={"red.500"}>
            {t("countdown_edit_delete.header")}
          </ModalHeader>
          <ModalBody>
            <Teext>{t("countdown_edit_delete.body")}</Teext>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} size={"sm"} onClick={onClose}>
              {capitalize(t("global.no"))}
            </Button>
            <Button
              colorScheme="red"
              size={"sm"}
              onClick={() => deleteCountdown(countdown)}
              isLoading={isDeleteSuspense}
              loadingText={capitalize(t("global.removing"))}
            >
              {capitalize(t("global.yes"))}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
