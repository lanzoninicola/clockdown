import { Box, Link, VStack } from "@chakra-ui/react";
import { useEditorState } from "../../../../countdown-state-management";

import { BoxImage } from "../../../../global/common";
import Teext from "../../../../global/common/layout/teext/teext";
import shopify from "../../assets/images/shopify.png";
import squarespace from "../../assets/images/squarespace.png";
import wix from "../../assets/images/wix.png";
import woocommerce from "../../assets/images/woocommerce.png";
import wordpress from "../../assets/images/wordpress.png";
import webflow from "../../assets/images/webflow.png";

export default function Platforms() {
  const { produtLandingPageURL } = useEditorState();

  const platforms = [
    {
      name: "WordPress",
      icon: wordpress,
      setupPage: `${produtLandingPageURL}/setup/wordpress`,
    },
    {
      name: "Shopify",
      icon: shopify,
      setupPage: `${produtLandingPageURL}/setup/shopify`,
    },
    {
      name: "WooCommerce",
      icon: woocommerce,
      setupPage: `${produtLandingPageURL}/setup/woocommerce`,
    },
    // { name: "Magento", icon: "magento" },
    // { name: "PrestaShop", icon: "prestashop" },
    // { name: "OpenCart", icon: "opencart" },
    // { name: "BigCommerce", icon: "bigcommerce" },
    {
      name: "Squarespace",
      icon: squarespace,
      setupPage: `${produtLandingPageURL}/setup/wordpress`,
    },
    // { name: "Weebly", icon: "weebly" },
    {
      name: "Wix",
      icon: wix,
      setupPage: `${produtLandingPageURL}/setup/wix`,
    },
    {
      name: "Webflow",
      icon: webflow,
      setupPage: `${produtLandingPageURL}/setup/webflow`,
    },
    // { name: "Joomla", icon: "joomla" },
    // { name: "Drupal", icon: "drupal" },
    // { name: "HTML", icon: "html" },
    // { name: "Other", icon: "other" },
  ];

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      padding=".5rem"
    >
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.setupPage}
          isExternal
          _hover={{
            textDecoration: "none",
            background: "blue.200",
          }}
        >
          <VStack display="flex" alignItems="center" padding="1rem">
            <BoxImage image={platform.icon} bgSize={"40px"} w="40px" h="40px" />
            <Teext
              as="span"
              fontSize={"sm"}
              fontWeight={"bold"}
              textAlign="center"
            >
              {platform.name}
            </Teext>
          </VStack>
        </Link>
      ))}
    </Box>
  );
}
