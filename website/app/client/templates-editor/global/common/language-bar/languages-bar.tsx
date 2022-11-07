import { Box, HStack, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Languages } from "../../../i18n/types";
import Teext from "../layout/teext/teext";
import ButtonLanguage from "./button-language/button-language";

interface LanguagesBarProps {
  languages: Languages;
}

export default function LanguagesBar({ languages }: LanguagesBarProps) {
  const [showLanguages, setShowLanguages] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <HStack spacing={1}>
        <ButtonLanguage
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
          <List spacing={1}>
            {Object.keys(languages).map((lng, idx) => (
              <ListItem
                key={idx}
                bg={i18n.resolvedLanguage === lng ? "blue.500" : "transparent"}
                p={2}
                borderRadius={5}
                cursor="pointer"
                _hover={{
                  background: "blue.100",
                }}
                onClick={() => {
                  i18n.changeLanguage(lng);
                  setShowLanguages(!showLanguages);
                }}
              >
                <Teext
                  as="span"
                  fontSize={"sm"}
                  color={i18n.resolvedLanguage === lng ? "white" : "black"}
                >
                  {languages[lng].nativeName}
                </Teext>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
}
