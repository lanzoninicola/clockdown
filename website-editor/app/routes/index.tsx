import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { theme } from "~/client/chackra-ui/theme/website/theme";

export const meta: MetaFunction = () => {
  return {
    title: "Clockdown",
    description: "Contador regressivo",
    "og:title": "Clockdown",
    "og:description": "clockdown",
    "og:image": "https://clockdown.tech//images/ogimage.png",
  };
};

export default function Index() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="section"
        bgGradient={[
          "linear(to-t, blue.200, pink.100)",
          "linear(to-r, green.200, blue.200, teal.200, purple.100)",
        ]}
        minH="100vh"
        paddingInline={["1rem"]}
        justifyContent="center"
      >
        <Flex maxW={"1140px"} direction={["column", "row"]} gap="2rem">
          <Flex direction={"column"} alignItems="center">
            <Text fontWeight={700}>MYXERIA</Text>
            <Heading
              lineHeight={1.2}
              textTransform={"uppercase"}
              fontSize={["2xl", "4xl"]}
            >
              Banner rotativo mostrando exemplo
            </Heading>
            <Button
              bg="blue.500"
              color="white"
              letterSpacing={"2px"}
              textTransform="uppercase"
              // fontWeight={400}
            >
              Crie agora seu contador
            </Button>
          </Flex>
          <VStack w="100%">
            <Image
              maxW={["270px"]}
              objectFit="cover"
              src="./images/mobile-phone-bg.png"
            />
          </VStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
