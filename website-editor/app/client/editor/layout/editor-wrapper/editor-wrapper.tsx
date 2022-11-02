import { Box } from "@chakra-ui/react";

export default function EditorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box data-element="editor-wrapper" w="100%" position={"relative"}>
      {children}
    </Box>
  );
}
