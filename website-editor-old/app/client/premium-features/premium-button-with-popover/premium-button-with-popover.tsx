import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  HStack,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import { BiCrown } from "@react-icons/all-files/bi/BiCrown";
import { useTranslation } from "react-i18next";
import Teext from "../../global/common/layout/teext/teext";
import PremiumButton from "../premium-button/premium-button";

export default function PremiumButtonWithPopover() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { t } = useTranslation();

  return (
    <Popover isOpen={isOpen} gutter={12}>
      <PopoverTrigger>
        <PremiumButton
          textVariant={1}
          borderWidth={"medium"}
          fontSize={"sm"}
          letterSpacing={0.1}
          _hover={{
            bg: "yellow.400",
          }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        />
      </PopoverTrigger>
      <PopoverContent bg={"yellow.300"}>
        <PopoverArrow bg={"yellow.300"} />
        <PopoverCloseButton />
        <PopoverHeader className="theme-font" borderColor="black">
          <HStack>
            <BiCrown />
            <Teext fontSize={"xs"} fontWeight={600} textTransform="uppercase">
              {t("premiumFeatures.upgradeCTA.popover.title")}
            </Teext>
          </HStack>
        </PopoverHeader>
        <PopoverBody fontSize={"xs"} className="theme-font">
          {t("premiumFeatures.upgradeCTA.popover.body")}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
