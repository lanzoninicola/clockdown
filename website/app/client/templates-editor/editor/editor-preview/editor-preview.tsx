import { Box, VStack } from "@chakra-ui/react";

import { EditorContext } from "../../countdown-state-management";
import useConfigState from "../../countdown-state-management/common/hooks/config/useConfigState";
import useEditorStateWithDispatcher from "../../countdown-state-management/common/hooks/editor/useEditorStateWithDispatcher";
import useThemeState from "../../countdown-state-management/common/hooks/theme/useThemeState";
import useTimerSettingsState from "../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsState";
import { WidgetProvider } from "../../countdown-state-management/widget";
import CountdownWidget from "../../countdown-widget";
import LaptopVector from "./components/laptop-vector/laptop-vector";
import MobileVector from "./components/mobile-vector/mobile-vector";
import Preview from "./components/preview/preview";
import TabletVector from "./components/tablet-vector/tablet-vector";
import DEFAULT_BREAKPOINTS from "./constants/default-breakpoints";

export default function EditorPreview() {
  const { currentToken } = useEditorStateWithDispatcher();
  const timerSettings = useTimerSettingsState(EditorContext);
  const theme = useThemeState(EditorContext);
  const config = useConfigState(EditorContext);

  return (
    <VStack
      position="relative"
      w={"100%"}
      minH={"100vh"}
      data-element="editor-preview"
    >
      <Preview currentToken={currentToken}>
        {currentToken === "lg" && <LaptopVector />}
        {currentToken === "md" && <TabletVector />}
        {currentToken === "sm" && <MobileVector />}

        <Box
          data-element="editor-preview-flex"
          zIndex={10}
          mt={
            currentToken === "lg"
              ? "12rem"
              : currentToken === "md"
              ? "15rem"
              : "10rem"
          }
          width={DEFAULT_BREAKPOINTS[currentToken]}
        >
          <WidgetProvider
            isEditorMode={true}
            timerSettings={timerSettings}
            theme={theme}
            config={config}
          >
            <CountdownWidget />
          </WidgetProvider>
        </Box>
      </Preview>

      {/* <HtmlEmbeddedCode /> */}
    </VStack>
  );
}
