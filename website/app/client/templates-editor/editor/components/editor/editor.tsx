import { Box, Flex, VStack } from "@chakra-ui/react";
import useCustomScrollbar from "../../../hooks/useCustomScrollbar";

import BreakpointsBar from "../../editor-preview/components/breakpoints-bar/breakpoints-bar";
import EditorPreview from "../../editor-preview/editor-preview";
import GroupTitle from "../../editor-properties/components/layout/group-title/group-title";
import EditorPropertiesBar from "../../editor-properties/editor-properties-bar/editor-properties-bar";
import TemplatesSelector from "../../editor-properties/properties/templates-properties-group/components/templates/templates-selector";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";

export default function Editor() {
  const scrollbar = useCustomScrollbar();

  return (
    <EditorWrapper>
      <Box mt={"70px"}>
        <VStack position="absolute" top={5} left={5} zIndex={40} spacing={24}>
          <EditorPropertiesBar />
        </VStack>
        <CenterContent>{/* <EditorPreview /> */}</CenterContent>
        <Box position="absolute" top={5} right={5} zIndex={40}>
          <GroupTitle>Templates</GroupTitle>
          <Flex
            bg={"gray.500"}
            p={"1rem"}
            h={"700px"}
            overflow={"auto"}
            borderRadius={"sm"}
            justifyContent={"center"}
            css={scrollbar}
          >
            {/* <TemplatesSelector /> */}
          </Flex>
        </Box>
      </Box>
    </EditorWrapper>
  );
}
