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
    <>
      <button className="text-md w-full rounded-xl bg-accent-base py-2 text-center font-body font-bold uppercase tracking-wide shadow-lg transition-colors hover:bg-accent-500">
        {children}
      </button>
      {/* <Button
        type="submit"
        loadingText={props?.loadingText || "Loading..."}
        className="theme-font"
        colorScheme="blue"
        data-test="onboarding-form-submit"
        {...props}
      >
        {children}
      </Button> */}
    </>
  );
}
