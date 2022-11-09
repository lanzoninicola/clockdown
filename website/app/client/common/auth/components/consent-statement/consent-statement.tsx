import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function ConsentStatement() {
  const { t } = useTranslation();

  return (
    <Text
      as="span"
      fontSize={"smaller"}
      color={"gray.500"}
      fontFamily={"Inter, sans-serif"}
      whiteSpace={[null, "pre-line"]}
    >
      {t("onboarding.consentStatement")}
    </Text>
  );
}
