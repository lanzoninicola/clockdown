import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { cloneElement, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { BoxImage } from "../../../global/common";
import Heeading from "../../../global/common/layout/heeading/heeading";
import Teext from "../../../global/common/layout/teext/teext";
import error from "../../assets/images/error.png";
import failure_max from "../../assets/images/failure_max.png";
import steppingUp from "../../assets/images/stepping-up.png";
import thankyou from "../../assets/images/thank-you.png";
import useOnboardingConfig from "../../provider/hooks/useOnboardingConfig";
import useOnboardingContext from "../../provider/hooks/useOnboardingContext";
import { UIModalConfig } from "../../provider/types/context";
import OnboardingForm from "../onboarding-form/onboarding-form";
import OnboardingSubmitButton from "../onboarding-submit-button/onboarding-submit-button";

interface OnboardingModalProps {
  /** The button component that will open the modal */
  children?: React.ReactElement;
  /** Component to render on the modal body. if undefined it renders the form to proceed to onboarding the user */
  customBody?: React.ReactElement;
}

/**
 * The onboarding modal is a modal that is used to onboard a user to the site.
 *
 * This modal can wrap any component. When the component is clicked the modal will open.
 */
export default function OnboardingModal({
  children,
  customBody,
}: OnboardingModalProps) {
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { status, formState, dispatch } = useOnboardingContext();
  // const { maxFailureCount } = useOnboardingConfig();

  // useEffect(() => {
  //   if (formState.failureCount >= maxFailureCount) {
  //     dispatch({ type: "ONBOARDING_FORM_FAILURE_MAX" });
  //   }
  // }, [formState.failureCount, maxFailureCount, dispatch]);

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const configs: UIModalConfig = {
    default: {
      title: t("onboarding.title"),
      subtitle: t("onboarding.subtitle"),
      image: steppingUp,
      body: <OnboardingForm />,
      footer: <OnboardingSubmitButton />,
    },
    success: {
      title: t("onboarding.success.title"),
      subtitle: t("onboarding.success.subtitle"),
      image: thankyou,
      body: null,
      footer: (
        <OnboardingSubmitButton
          label={t("onboarding.success.submitButtonLabel")}
          onClick={onCloseModal}
        />
      ),
    },
    failure: {
      title: t("onboarding.failed.title"),
      subtitle: t("onboarding.failed.subtitle"),
      image: "null",
      body: (
        <Teext fontSize={"small"} color="red.600">
          {formState?.error}
        </Teext>
      ),
      footer: (
        <OnboardingSubmitButton
          label={t("onboarding.failed.submitButtonLabel")}
        />
      ),
    },
    failure_max: {
      title: t("onboarding.failure_max.title"),
      subtitle: t("onboarding.failure_max.subtitle"),
      image: failure_max,
      body: (
        <Teext fontSize={"small"} color="black">
          {t("onboarding.failure_max.text")}
        </Teext>
      ),
      footer: (
        <OnboardingSubmitButton
          label={t("onboarding.failure_max.submitButtonLabel")}
          onClick={() => {
            dispatch({ type: "ONBOARDING_SKIP_DUE_ERROR" });
          }}
        />
      ),
    },
  };

  if (status === "completed" || status === "skipped") {
    return <>{children}</>;
  }

  /**
  return (
    <>
      <div
        data-element={"modal-children-wrapper"}
        onClickCapture={(e: React.SyntheticEvent) => {
          e.stopPropagation();
          onOpenModal();
          dispatch({ type: "ONBOARDING_SHOW_MODAL" });
        }}
      >
        {children}
      </div>

      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isModalOpen}
        onClose={() => {
          onCloseModal();
          dispatch({ type: "ONBOARDING_HIDE_MODAL" });
        }}
        closeOnOverlayClick={formState.isSuccessful ? true : false}
        blockScrollOnMount={true}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">
            {configs[formState["modalConfig"]].title}
          </ModalHeader>
          {formState.isSuccessful && <ModalCloseButton />}
          <ModalBody>
            <HStack spacing={8}>
              <Box flex={1}>
                <BoxImage
                  image={configs[formState["modalConfig"]].image}
                  bgSize={"250px"}
                  w="100%"
                  h="400px"
                />
              </Box>

              <VStack spacing={8} alignItems={"flex-start"} flex={1}>
                <Heeading as="h2" fontSize={"md"} lineHeight={1.3}>
                  {configs[formState["modalConfig"]].subtitle}
                </Heeading>
                {customBody || configs[formState["modalConfig"]].body}
              </VStack>
            </HStack>
          </ModalBody>

          <ModalFooter>{configs[formState["modalConfig"]].footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
   */

  return <div>Onboarding Modal</div>;
}
