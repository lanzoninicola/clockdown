import { CloseButton, Divider, HStack, VStack } from "@chakra-ui/react";

interface DialogWrapperHeaderProps {
  /** The text render on header of the DialogWrapper */
  children: React.ReactNode | undefined;
  /** Event fired when the close button is pressed  */
  onClose?: () => void;
}

export default function DialogWrapperHeader({
  children,
  onClose,
}: DialogWrapperHeaderProps) {
  return (
    <VStack w="100%" spacing={2} mb={8}>
      <HStack w="100%" justify={"space-between"}>
        {children}
        <CloseButton size={"sm"} onClick={onClose} />
      </HStack>
      <Divider />
    </VStack>
  );
}
