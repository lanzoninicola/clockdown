import { Button, forwardRef, IconButtonProps, Tooltip } from "@chakra-ui/react";
import { IoLanguage } from "@react-icons/all-files/io5/IoLanguage";

interface LanguageSelectorButtonProps
  extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const LanguageSelectorButton = forwardRef(
  ({ label, ...props }: LanguageSelectorButtonProps, ref) => {
    return (
      <Tooltip label={label}>
        <Button
          ref={ref}
          leftIcon={<IoLanguage />}
          variant="solid"
          size={"sm"}
          {...props}
        >
          {label}
        </Button>
      </Tooltip>
    );
  }
);

export default LanguageSelectorButton;
