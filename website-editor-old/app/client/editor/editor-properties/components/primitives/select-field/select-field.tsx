import {
  Box,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

import SelectOptions from "./select-options";

export default function SelectField({ ...props }: InputProps) {
  return (
    <Box>
      <InputGroup>
        <Input size={"xs"} {...props} />
        <InputRightElement height="100%" aria-label="Choose an option">
          <SelectorIcon height="1rem" />
        </InputRightElement>
      </InputGroup>
      <SelectOptions />
    </Box>
  );
}

function SelectorIcon(props: JSX.IntrinsicElements["svg"]): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    </svg>
  );
}
