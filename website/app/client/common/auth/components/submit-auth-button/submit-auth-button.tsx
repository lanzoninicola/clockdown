import { Button, ButtonOptions } from "@chakra-ui/react";

interface SubmitAuthButtonProps {
  children: React.ReactNode;
  loadingText?: ButtonOptions["loadingText"];
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function SubmitAuthButton({
  children,
  ...props
}: SubmitAuthButtonProps) {
  return (
    <Button
      type="submit"
      loadingText={props?.loadingText || "Loading..."}
      className="theme-font"
      colorScheme="blue"
      data-test="onboarding-form-submit"
      {...props}
    >
      {children}
    </Button>
  );
}
