import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
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
import { LanguagesMenu, Logo } from "../common";
import Teext from "../common/layout/teext/teext";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import EditorButton from "~/client/website/components/editor-button";
import HtmlEmbeddedCodeInput from "../../editor/html-embedded-code/components/html-embedded-code-input/html-embedded-code-input";

export default function Header({
  onboardedUser,
}: {
  onboardedUser: { email: string; fullname?: string } | null;
}) {
  const { t, i18n } = useTranslation();

  return (
    <Flex
      flexDirection={"column"}
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
    >
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr"}
        paddingInline="1rem"
        alignItems={"center"}
        justifyItems={"center"}
        minH="50px"
        w={"100%"}
        columnGap={"1rem"}
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
          {/* <LanguagesMenu /> */}
        </Grid>
        <BreakpointsBar />
        <Flex justifySelf={"flex-end"} alignItems={"center"} gap={4}>
          {!onboardedUser && (
            <Link to="/login">
              <Button colorScheme={"gray"} size={"sm"} leftIcon={<FiUser />}>
                Login
              </Button>
            </Link>
          )}

          <HtmlEmbeddedCodeInput inlineBlock={true} variant={"secondary"} />
        </Flex>
      </Grid>
      <Link to="/#pricing-table" target="_blank">
        <VStack
          bg={"yellow.300"}
          _hover={{
            bg: "yellow.400",
          }}
          w={"100%"}
          cursor={"pointer"}
        >
          <Text
            as="span"
            fontWeight={600}
            letterSpacing={1}
            fontSize={"sm"}
            color={"black"}
            textTransform={"uppercase"}
          >
            {t(`premiumFeatures.upgradeCTA.variant1`)}
          </Text>
        </VStack>
      </Link>
    </Flex>
  );
}
