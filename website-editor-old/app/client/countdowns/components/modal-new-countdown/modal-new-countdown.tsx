import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useSWR, { useSWRConfig } from "swr";

import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdown-rest-api/constants/countdowns/endpoints";
import { create as createCountdownRecord } from "../../../countdown-rest-api/services/countdowns";
import { create as createCountdownSettingsRecord } from "../../../countdown-rest-api/services/editor";
import { APIResponse } from "../../../countdown-rest-api/types";
import {
  CountdownModel,
  StringOrNumber,
} from "../../../countdown-widget/types";
import { useNotifications } from "../../../notifications";
import NewForm from "./new-form/new-form";

export default function ModalNewCountdown() {
  const [name, setName] = useState<CountdownModel["name"]>("");
  const [description, setDescription] =
    useState<CountdownModel["description"]>("");
  const [isSuspense, setIsSuspense] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { successWithButton: successNotification, error: errorNotification } =
    useNotifications();

  const { mutate } = useSWRConfig();

  // TODO: refactor this chain
  function createCountdown() {
    // setIsSuspense(true);
    // createCountdownRecord({ name, description })
    //   .then((res) => {
    //     if (!res || !res.data) throw new Error();
    //     if (res?.data?.status >= 400) throw new Error();
    //     createCountdownSettings(res);
    //   })
    //   .catch((e) => {
    //     errorNotification(t("global.error"), {
    //       title: t("global.errorTitle"),
    //     });
    //   });
  }

  // function createCountdownSettings(
  //   res: APIResponse<{
  //     id: StringOrNumber;
  //   }>
  // ) {
  //   if (!res || !res.data) return;

  //   const { id } = JSON.parse(JSON.stringify(res.data.payload));

  //   createCountdownSettingsRecord(id)
  //     .then((res) => {
  //       if (!res || !res.data) throw new Error();
  //       if (res?.data?.status >= 400) throw new Error();

  //       onClose();

  //       successNotification(t("countdown_edit_new.createSuccess"), {
  //         title: t("countdown_edit_new.createSuccessTitle"),
  //         buttonProps: {
  //           children: t("countdown_edit_new.openEditor"),
  //           onClick: () => setCurrentCountdown(id),
  //         },
  //       });
  //     })
  //     .catch(() =>
  //       errorNotification(t("global.error"), {
  //         title: t("global.errorTitle"),
  //       })
  //     )
  //     .finally(() => {
  //       setIsSuspense(false);
  //       mutate(COUNTDOWNS_REST_API_ENDPOINTS.findAll.endpoint());
  //     });
  // }

  return (
    <>
      <Button size="sm" onClick={onOpen} colorScheme={"blue"}>
        {t("countdown_edit_new.buttonLabel")}
      </Button>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdown_edit_new.header")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <NewForm
              initialFocusRef={initialRef}
              onNameChange={setName}
              onDescriptionChange={setDescription}
              isSuspense={isSuspense}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isSuspense}
              loadingText={t("global.saving").capitalize()}
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={() => createCountdown()}
              data-test="create-countdown-button"
            >
              {t("global.save").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
