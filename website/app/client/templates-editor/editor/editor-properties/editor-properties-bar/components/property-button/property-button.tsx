import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface PropertyButtonProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
  shortLabel?: string;
  icon: IconButtonProps["icon"];
}

const PropertyButton = forwardRef(
  ({ label, shortLabel, icon, ...props }: PropertyButtonProps, ref) => {
    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <Tooltip label={label} placement="right">
          <IconButton
            ref={ref}
            {...props}
            icon={icon}
            size="lg"
            w={"48px"}
            h={"48px"}
            aria-label={label}
            isRound={true}
            colorScheme="gray"
            boxShadow={"lg"}
            _hover={{ background: "blue.200" }}
            _active={{ background: "blue.300" }}
          />
        </Tooltip>
        <span className="font-body text-xs font-bold text-gray-600">
          {shortLabel}
        </span>
      </div>
    );
  }
);

export default PropertyButton;
