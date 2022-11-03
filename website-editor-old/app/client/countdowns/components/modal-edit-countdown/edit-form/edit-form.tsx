import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { CountdownModel } from "../../../../countdown-widget/types";

interface EditFormProps {
  initialFocusRef?: React.MutableRefObject<HTMLInputElement>;
  name: CountdownModel["name"];
  description: CountdownModel["description"];
  onNameChange: (value: CountdownModel["name"]) => void;
  onDescriptionChange: (value: CountdownModel["description"]) => void;
}

export default function EditForm({
  initialFocusRef,
  name,
  description,
  onNameChange,
  onDescriptionChange,
}: EditFormProps) {
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
          defaultValue={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="theme-font"
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
          defaultValue={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          minH={"120px"}
          className="theme-font"
          autoComplete="off"
        />
      </FormControl>
    </>
  );
}
