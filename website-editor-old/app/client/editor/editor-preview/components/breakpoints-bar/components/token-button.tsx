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
          size="lg"
          aria-label={label}
        />
      </Tooltip>
    );
  }
);

export default TokenButton;
