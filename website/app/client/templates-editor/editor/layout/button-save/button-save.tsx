import {
  Button,
  ButtonProps,
  ComponentWithAs,
  forwardRef,
  Tooltip,
} from "@chakra-ui/react";
import { FiSave } from "@react-icons/all-files/fi/FiSave";
import usePremiumFeaturesContext from "~/client/templates-editor/premium-features-provider/hooks/usePremiumFeaturesContext";

interface ButtonSaveProps
  extends Omit<ComponentWithAs<"button", ButtonProps>, "aria-label"> {
  label: string;
}

const ButtonSave = forwardRef(({ label, ...props }: ButtonSaveProps, ref) => {
  const { isPremiumUser } = usePremiumFeaturesContext();

  return (
    <Tooltip label={label}>
      <Button
        ref={ref}
        leftIcon={<FiSave />}
        variant={isPremiumUser ? "solid" : "outline"}
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
