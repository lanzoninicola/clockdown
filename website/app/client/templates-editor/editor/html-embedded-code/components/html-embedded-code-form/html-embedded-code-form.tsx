import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ButtonCopy from "../button-copy/button-copy";

interface HtmlEmbeddedCodeFormProps {
  htmlCode: string;
  variant?: "input" | "textarea";
}

export default function HtmlEmbeddedCodeForm({
  htmlCode,
  variant = "input",
}: HtmlEmbeddedCodeFormProps) {
  const { t } = useTranslation();

  return (
    <FormControl minW={"700px"}>
      <FormLabel
        htmlFor="countdown-html"
        className="theme-font"
        fontSize={"sm"}
        hidden={true}
      >
        {t("countdowns.table.shortcode")}
      </FormLabel>
      {variant === "textarea" && (
        <Textarea
          id="countdown-html"
          minH={"300px"}
          value={htmlCode}
          isReadOnly={true}
          fontFamily="monospace"
          fontSize={"sm"}
          bg={"gray.600"}
          color={"white"}
        />
      )}
      {variant === "input" && (
        <InputGroup size="lg" maxW={"600px"} m={"auto"}>
          <Input
            id="countdown-html"
            value={htmlCode}
            isReadOnly={true}
            fontFamily="monospace"
            fontSize={"lg"}
            size={"lg"}
            borderColor={"gray.600"}
            bg={"white"}
          />
          <InputRightElement width="6rem" mr={".5rem"}>
            <ButtonCopy text={htmlCode} />
          </InputRightElement>
        </InputGroup>
      )}
    </FormControl>
  );
}
