import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";

interface TokenButtonProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
  icon: IconButtonProps["icon"];
}

const TokenButton = forwardRef(
  ({ label, icon, ...props }: TokenButtonProps, ref) => {
    return (
      <Tooltip label={label}>
        <IconButton
          ref={ref}
          {...props}
          icon={icon}
          size="sm"
          aria-label={label}
          _hover={{ bg: "blue.100" }}
          _active={{ bg: "blue.200" }}
        />
      </Tooltip>
    );
  }
);

export default TokenButton;
