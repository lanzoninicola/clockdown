import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  HStack,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { NotificationOptions } from "../types";

export default function useNotifications() {
  const toast = useToast();
  // const toastIdRef: MutableRefObject<ToastId> = React.useRef(0);

  function error(
    message: string,
    options?: Omit<NotificationOptions, "buttonProps">
  ) {
    toast({
      title: options?.title || "Error",
      description: message,
      status: "error",
      duration: options?.duration || 9000,
      isClosable: options?.isClosable || true,
    });
  }

  function success(
    message: string,
    options?: Omit<NotificationOptions, "buttonProps">
  ) {
    toast({
      title: options?.title || "Success",
      description: message,
      status: "success",
      duration: options?.duration || 9000,
      isClosable: options?.isClosable || true,
    });
  }

  /**
  function successWithButton(message: string, options?: NotificationOptions) {
    toast({
      duration: options?.duration || 9000,
      // eslint-disable-next-line react-hooks/rules-of-hooks
      render: () => {
        const { isOpen: isVisible, onClose } = useDisclosure({
          defaultIsOpen: true,
        });

        return (
          isVisible && (
            <Alert status="success" borderRadius={"lg"} variant="solid">
              <HStack spacing={4}>
                <AlertIcon />
                <VStack alignItems={"flex-start"} spacing={0}>
                  <AlertTitle className="theme-font">
                    {options?.title}
                  </AlertTitle>
                  <AlertDescription fontSize={"sm"} className="theme-font">
                    {message}
                  </AlertDescription>
                </VStack>
                <Button
                  size={"sm"}
                  onClick={options?.buttonProps?.onClick}
                  colorScheme="blue"
                  ml="1rem"
                >
                  {options?.buttonProps?.children}
                </Button>
              </HStack>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                size={"sm"}
                right={-3}
                top={-2}
                onClick={onClose}
              />
            </Alert>
          )
        );
      },
    });
  }
   */

  function warning(
    message: string,
    options?: Omit<NotificationOptions, "buttonProps">
  ) {
    toast({
      title: options?.title || "Warning",
      description: message,
      status: "warning",
      duration: options?.duration || 9000,
      isClosable: options?.isClosable || true,
    });
  }

  function info(message: string, options?: NotificationOptions) {
    toast({
      title: "Info",
      description: message,
      status: "info",
      duration: options?.duration || 9000,
      isClosable: options?.isClosable || true,
    });
  }

  return {
    error,
    success,
    // successWithButton,
    warning,
    info,
  };
}
