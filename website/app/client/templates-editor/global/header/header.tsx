import { Box, Button, Flex, Grid, HStack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { ModalNewCountdown } from "../../countdowns/components";
import { EditorSave } from "../../editor/components";
import BreakpointsBar from "../../editor/editor-preview/components/breakpoints-bar/breakpoints-bar";
import HtmlEmbeddedCode from "../../editor/html-embedded-code/html-embedded-code";
import { Languages } from "../../i18n/types";
import {
  PremiumButtonWithPopover,
  PremiumFeatureGuard,
} from "../../premium-features";
import { LanguagesBar, Logo } from "../common";
import Teext from "../common/layout/teext/teext";
import { FiUser } from "@react-icons/all-files/fi/FiUser";

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
      gridTemplateColumns={"1fr 1fr 1fr"}
      paddingInline="1rem"
      alignItems={"center"}
      justifyItems={"center"}
      minH="50px"
      w={"100%"}
      columnGap={"1rem"}
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      bg={"gray.200"}
    >
      <Grid
        placeItems={"start"}
        alignItems={"center"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={"1rem"}
      >
        <Logo />
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
        <PremiumFeatureGuard hide>
          <EditorSave />
        </PremiumFeatureGuard>
        <LanguagesBar languages={lngs} />
      </Grid>
      <BreakpointsBar />
      <Flex justifySelf={"flex-end"} alignItems={"center"} gap={4}>
        <Link to="/auth">
          <Button colorScheme={"gray"} size={"sm"} leftIcon={<FiUser />}>
            Login
          </Button>
        </Link>
        <PremiumButtonWithPopover />
      </Flex>
    </Grid>
  );
}
