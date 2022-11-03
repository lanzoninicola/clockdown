import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

export default function SelectOptions() {
  return (
    <>
      <Box>
        <UnorderedList styleType={"none"} textAlign="right">
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 1</SelectOption>
        </UnorderedList>
      </Box>
    </>
  );
}

function SelectOption({ children }: { children: React.ReactNode }) {
  return (
    <ListItem className="theme-font" fontSize={"xs"}>
      {children}
    </ListItem>
  );
}
