import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface BadgeProps {
  children?: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  const { t } = useTranslation();

  return (
    <Box
      bg={"blue.500"}
      paddingInline={"2rem"}
      paddingBlock={".25rem"}
      borderRadius={"20px"}
    >
      <Text
        as="span"
        className="theme-font"
        fontWeight={400}
        letterSpacing={1}
        fontSize={"1rem"}
        color={"white"}
      >
        {children || t("premiumFeatures.badgeText").toUpperCase()}
      </Text>
    </Box>
  );
}
