import { Button, forwardRef, IconButtonProps, Tooltip } from "@chakra-ui/react";
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress";

interface ButtonShortcodeProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonShortcode = forwardRef(
  ({ label, ...props }: ButtonShortcodeProps, ref) => {
    return (
      <Tooltip label={label}>
        <Button
          ref={ref}
          {...props}
          leftIcon={<FaWordpress />}
          size="sm"
          aria-label={label}
        >
          Shortcode
        </Button>
      </Tooltip>
    );
  }
);

export default ButtonShortcode;
