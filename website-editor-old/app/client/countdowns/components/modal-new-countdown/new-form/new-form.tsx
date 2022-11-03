import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { CountdownModel } from "../../../../countdown-widget/types";

interface NewFormProps {
  onNameChange: (value: CountdownModel["name"]) => void;
  onDescriptionChange: (value: CountdownModel["description"]) => void;
  /** Used to focus on an input field */
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
  /** Used when a side effect is fired (eg. call API). If true disabled input fields */
  isSuspense?: boolean;
  /** Used when an error is fired (eg. call API). If true an error message is shown */
  isError?: boolean;
}

export default function NewForm({
  onNameChange,
  onDescriptionChange,
  initialFocusRef,
  isSuspense = false,
  isError = false,
}: NewFormProps) {
  const { t } = useTranslation();

  return (
    <>
      <FormControl mb={3}>
        <FormLabel
          htmlFor="countdown-name"
          className="theme-font"
          fontSize={"sm"}
        >
          {t("global.name")}
        </FormLabel>
        <Input
          id="countdown-name"
          ref={initialFocusRef}
          placeholder={t("countdown_edit_new.namePlaceholder")}
          onChange={(e) => {
            onNameChange(e.target.value);
          }}
          className="theme-font"
          isDisabled={isSuspense}
          autoComplete="off"
        />
      </FormControl>
      <FormControl>
        <FormLabel
          htmlFor="countdown-desc"
          className="theme-font"
          fontSize={"sm"}
        >
          {t("global.description")}
        </FormLabel>
        <Textarea
          id="countdown-desc"
          placeholder={t("countdown_edit_new.descriptionPlaceholder")}
          onChange={(e) => {
            onDescriptionChange(e.target.value);
          }}
          minH={"120px"}
          className="theme-font"
          isDisabled={isSuspense}
        />
      </FormControl>
      {isError && <FormErrorMessage>{t("global.error")}</FormErrorMessage>}
    </>
  );
}
