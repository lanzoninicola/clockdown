import { Skeleton, VStack } from "@chakra-ui/react";

import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";

export default function EditorSkeleton() {
  return (
    <EditorWrapper>
      <VStack position={"absolute"} top="1.25rem" left="1.25rem">
        <SkeletonProp />
        <SkeletonProp />
        <SkeletonProp />
        <SkeletonProp />
        <SkeletonProp />
        <SkeletonProp />
      </VStack>
      <CenterContent>
        <Skeleton minH="60px" minW="650px" borderRadius={"lg"} />

        <Skeleton minH="300px" minW="1440px" borderRadius={"lg"} />

        <Skeleton minH="64px" minW="200px" borderRadius={"lg"} />
      </CenterContent>
    </EditorWrapper>
  );
}

function SkeletonProp() {
  return <Skeleton w="48px" h="48px" borderRadius={"50%"} />;
}
