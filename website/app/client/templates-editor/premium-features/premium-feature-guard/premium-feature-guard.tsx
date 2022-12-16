import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";

import useIsPremiumInstallation from "../hooks/useIsPremiumInstallation";
import PremiumFeatureIcon from "../components/common/premium-feature-icon/premium-feature-icon";
import ShadeOfGray from "../components/shade-of-gray/shade-of-gray";
import UpgradePremiumModal from "../components/upgrade-premium-modal/upgrade-premium-modal";
import Watermark from "../components/watermark/watermark";
import useGodMode from "~/client/common/utils/useGodMode";

interface PremiumFeatureGuardProps {
  children: React.ReactNode;
  flexDirection?: "column" | "row";
  hide?: boolean;
  variant?: "watermark" | "modal" | "shade-gray";
  ctaVariant?: number;
  customText?: string | React.ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Component that wraps the premium feature childre and shows a modal or watermark depending on the props
 *
 * @param {React.ReactNode} children - The react node to handle as a premium feature
 * @param {boolean} hide - Hide the premium feature if true
 * @param {string} variant - The variant of the premium feature to use (watermark | modal | shade-gray)
 * @param {number} ctaVariant - The variant of the cta text to use (1, 2 or 3)
 * @param {string | React.ReactNode} customText - Add a custom text to the modal body if variant is "modal"
 * @returns
 */
export default function PremiumFeatureGuard({
  children,
  flexDirection = "row",
  hide = false,
  variant = "watermark",
  ctaVariant = 1,
  customText,
  iconPosition = "right",
}: PremiumFeatureGuardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isPremiumUser = useIsPremiumInstallation();
  const zeus = useGodMode();

  function mightOpenModal(e: React.SyntheticEvent) {
    e.stopPropagation();

    if (!isPremiumUser && variant === "modal") {
      onOpen();
    }
  }

  if (isPremiumUser || zeus) {
    return <>{children}</>;
  }

  if (hide) {
    return null;
  }

  return (
    <>
      <Flex
        direction={flexDirection}
        className="premium-feat-wrapper"
        position={"relative"}
        onClickCapture={(e) => mightOpenModal(e)}
        onChangeCapture={(e) => mightOpenModal(e)}
        alignItems={"center"}
        gap={1}
      >
        {iconPosition === "left" && <PremiumFeatureIcon />}
        {children}
        {variant === "watermark" && <Watermark customText={customText} />}
        {variant === "shade-gray" && <ShadeOfGray />}
        {iconPosition === "right" && <PremiumFeatureIcon />}
      </Flex>
      {variant === "modal" && (
        <UpgradePremiumModal
          isOpen={isOpen}
          onClose={onClose}
          bodyText={customText}
          ctaVariant={ctaVariant}
        />
      )}
    </>
  );
}
