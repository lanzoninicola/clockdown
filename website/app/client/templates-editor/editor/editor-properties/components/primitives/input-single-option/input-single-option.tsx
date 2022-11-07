import { Input } from "@chakra-ui/react";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../label/label";

interface InputSingleOptionProps {
  id?: string;
  label: string;
  value: string;
  placeholder: string;
  inputName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSingleOption({
  id,
  label,
  value,
  placeholder,
  inputName,
  onChange,
}: InputSingleOptionProps) {
  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <Input
        id={id}
        size={"sm"}
        type="text"
        title={inputName}
        name={inputName}
        placeholder={placeholder}
        gridColumn={"2 / -1"}
        value={value}
        onChange={onChange}
        className="theme-font"
      />
    </PropertyWrapper>
  );
}
