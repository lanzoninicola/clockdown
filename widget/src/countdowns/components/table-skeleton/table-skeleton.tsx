import { VStack, Skeleton } from "@chakra-ui/react";

export default function TableSkeleton() {
  return (
    <VStack spacing={2} alignItems={"flex-start"} p="1rem">
      <Skeleton w="65%" h="50px" borderRadius={"lg"} />
      <Skeleton w="65%" h="30px" borderRadius={"lg"} />
      <Skeleton w="65%" h="30px" borderRadius={"lg"} />
      <Skeleton w="65%" h="30px" borderRadius={"lg"} />
      <Skeleton w="65%" h="30px" borderRadius={"lg"} />
      <Skeleton w="65%" h="30px" borderRadius={"lg"} />
      <Skeleton w="65%" h="30px" borderRadius={"lg"} />
    </VStack>
  );
}
