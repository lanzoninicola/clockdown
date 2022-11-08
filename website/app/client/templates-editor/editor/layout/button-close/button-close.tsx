import { Button, forwardRef, IconButtonProps, Tooltip } from "@chakra-ui/react";
import { FiX } from "@react-icons/all-files/fi/FiX";

interface ButtonCloseProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonClose = forwardRef(({ label, ...props }: ButtonCloseProps, ref) => {
  return (
    <Tooltip label={label}>
      <Button
        ref={ref}
        leftIcon={<FiX />}
        variant="solid"
        size="sm"
        aria-label={label}
        className="theme-font"
        {...props}
      >
        {label}
      </Button>
    </Tooltip>
  );
});

export default ButtonClose;
