import { Button } from "@chakra-ui/react";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import { t } from "i18next";
import { useState } from "react";

export default function ButtonCopy({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  function copyShortcode() {
    window.navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button
      className="theme-font"
      colorScheme="green"
      size={"md"}
      leftIcon={<BiCopy />}
      onClick={() => copyShortcode()}
    >
      {isCopied
        ? t("global.copied").capitalize()
        : t("global.copy").capitalize()}
    </Button>
  );
}
