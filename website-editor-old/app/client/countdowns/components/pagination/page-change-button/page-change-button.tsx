import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";

interface PageChangeButtonProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
  icon: React.ReactElement;
}

const PageChangeButton = forwardRef(
  ({ label, icon, ...props }: PageChangeButtonProps, ref) => {
    return (
      <Tooltip label={label}>
        <IconButton
          ref={ref}
          {...props}
          icon={icon}
          isRound={true}
          size="sm"
          aria-label={label}
          colorScheme="blue"
          variant="outline"
        />
      </Tooltip>
    );
  }
);

export default PageChangeButton;
