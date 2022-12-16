import { Grid, Input, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Typography } from "../../../../../../countdown-widget-typography/types";

import GoogleFontsLinkTag from "../../../../../../countdown-widget/components/google-fonts-link-tag/google-fonts-link-tag";

export default function TextPreview({
  fontSelected,
}: {
  fontSelected: Typography;
}) {
  const [text, setText] = useState("");

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <Grid
      gridTemplateRows={"auto 1fr"}
      h={"calc(300px - 1rem)"}
      id="text-preview"
    >
      <Input
        type={"text"}
        size="xs"
        placeholder="Type something"
        onChange={onChangeText}
        w="100%"
      />
      {fontSelected && <GoogleFontsLinkTag googleFonts={[fontSelected]} />}
      <Flex justifyContent={"center"} alignItems={"center"} minW="200px">
        <Text
          fontSize={"md"}
          style={{
            fontFamily: fontSelected.fontFamily,
            fontWeight: fontSelected.fontWeight,
          }}
        >
          {text || "Love is in the air"}
        </Text>
      </Flex>
    </Grid>
  );
}
