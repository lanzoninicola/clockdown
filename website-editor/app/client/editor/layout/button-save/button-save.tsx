import {
  Button,
  ButtonProps,
  ComponentWithAs,
  forwardRef,
  Tooltip,
} from "@chakra-ui/react";
import { FiSave } from "@react-icons/all-files/fi/FiSave";

import useIsPremiumInstallation from "../../../premium-features/hooks/useIsPremiumInstallation";

interface ButtonSaveProps
  extends Omit<ComponentWithAs<"button", ButtonProps>, "aria-label"> {
  label: string;
}

const ButtonSave = forwardRef(({ label, ...props }: ButtonSaveProps, ref) => {
  const isPremium = useIsPremiumInstallation();

  return (
    <Tooltip label={label}>
      <Button
        ref={ref}
        leftIcon={<FiSave />}
        variant={isPremium ? "solid" : "outline"}
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

export default ButtonSave;
