import { Box, Flex, Grid, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { ModalNewCountdown } from "../../countdowns/components";
import { EditorSave } from "../../editor/components";
import type { Languages } from "../../i18n/types";
import {
  PremiumButtonWithPopover,
  PremiumFeatureGuard,
} from "../../premium-features";
import { LanguagesBar, Logo } from "../common";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
  es: { nativeName: "Español" },
  it: { nativeName: "Italiano" },
};

export default function Header() {
  const { t } = useTranslation();

  return (
    <Grid
      gridTemplateColumns={"300px 1fr 300px"}
      paddingInline="1rem"
      alignItems={"center"}
      minH="50px"
      w={"100%"}
      columnGap={"1rem"}
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      bg={"gray.200"}
    >
      <Logo />
      <Box>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <LanguagesBar languages={lngs} />
            <PremiumFeatureGuard
              variant="modal"
              hide={true}
              customText={t("premiumFeatures.modal.body.newCountdown", {
                maxCountdowns: "one",
              })}
              ctaVariant={4}
            >
              <ModalNewCountdown />
            </PremiumFeatureGuard>
          </HStack>
          <HStack spacing={4}>
            <PremiumFeatureGuard hide>
              <EditorSave />
            </PremiumFeatureGuard>
          </HStack>
        </HStack>
      </Box>
      <Flex justifySelf={"flex-end"} alignItems={"center"}>
        <PremiumButtonWithPopover />
      </Flex>
    </Grid>
  );
}
