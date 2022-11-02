import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";

interface ButtonSettingsProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonSettings = forwardRef(
  ({ label, ...props }: ButtonSettingsProps, ref) => {
    return (
      <Tooltip label={label}>
        <IconButton
          ref={ref}
          {...props}
          icon={<FiSettings />}
          isRound={true}
          size="sm"
          aria-label={label}
        />
      </Tooltip>
    );
  }
);

export default ButtonSettings;
