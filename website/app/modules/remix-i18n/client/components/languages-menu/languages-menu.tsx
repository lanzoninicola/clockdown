import { Box, Button, HStack, List, ListItem } from "@chakra-ui/react";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Language } from "~/modules/remix-i18n/types";

import LanguageSelectorButton from "../language-selector-button/language-selector-button";

export default function LanguagesMenu() {
  const [showLanguages, setShowLanguages] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <HStack spacing={1}>
        <LanguageSelectorButton
          label={t("global.i18n.languages")}
          onClick={() => setShowLanguages(!showLanguages)}
          position="relative"
        />
      </HStack>

      {showLanguages && (
        <Box
          position={"absolute"}
          top="50px"
          zIndex={2}
          bg="white"
          paddingBlock={3}
          paddingInline={2}
          boxShadow="lg"
        >
          {/* <LanguagesForm /> */}
        </Box>
      )}
    </>
  );
}
