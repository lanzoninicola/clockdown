import { Grid, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import AnchorBox from "../common/anchor-box/anchor-box";
import PremiumFeatureCockade from "../common/premium-feature-cockade/premium-feature-cockade";
import PremiumButton from "../../premium-button/premium-button";

interface WatermarkProps {
  customText?: string | React.ReactNode;
}

export default function Watermark({ customText }: WatermarkProps) {
  const { t } = useTranslation();
  return (
    <AnchorBox backdropFilter={"blur(5px) saturate(0%)"}>
      <Grid
        gridTemplateColumns={"1fr auto"}
        bg="white"
        borderRadius={"10px"}
        p="1rem"
        maxW={"75%"}
        gap={8}
        boxShadow={"xl"}
      >
        <PremiumFeatureCockade />
        <VStack alignItems={"flex-start"}>
          <Text
            as="p"
            className="theme-font"
            fontWeight={400}
            fontSize={".85rem"}
            color={"black"}
          >
            {customText || t("premiumFeatures.additionalText")}
          </Text>
          <PremiumButton fontSize={".75rem"} />
        </VStack>
      </Grid>
    </AnchorBox>
  );
}
