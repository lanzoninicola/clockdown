import { Text } from "@chakra-ui/react";

import useEditorState from "../../../../../../countdown-state-management/common/hooks/editor/useEditorState";

interface FontSizePreviewProps {
  size?: number;
}

export default function FontSizePreview({ size }: FontSizePreviewProps) {
  const { fontSizeUnit } = useEditorState();

  return (
    <Text
      className="theme-font"
      fontSize={"xs"}
      fontWeight={600}
      textAlign="right"
    >
      {`${size}${fontSizeUnit}`}
    </Text>
  );
}
