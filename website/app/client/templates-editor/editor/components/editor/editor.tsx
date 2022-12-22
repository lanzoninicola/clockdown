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
        <CenterContent>
          <EditorPreview />
        </CenterContent>
        <div
          className="absolute top-4 right-4 z-40 h-[calc(100vh-80px)] overflow-auto pl-24 opacity-20 transition-opacity duration-300 ease-in-out hover:opacity-100"
          data-element="templates-selector-wrapper"
        >
          <div
            className="rounded-sm bg-gray-200 py-8"
            data-element="templates-selector-inner-wrapper"
          >
            <TemplatesSelector />
          </div>
        </div>
      </Box>
    </EditorWrapper>
  );
}
