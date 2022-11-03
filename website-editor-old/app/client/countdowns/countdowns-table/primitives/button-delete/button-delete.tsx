import {
  forwardRef,
  IconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";
import { FiTrash2 } from "@react-icons/all-files/fi/FiTrash2";

interface BudttonDeleteProps extends Omit<IconButtonProps, "aria-label"> {
  label: string;
}

const ButtonDelete = forwardRef(
  ({ label, ...props }: BudttonDeleteProps, ref) => {
    return (
      <Tooltip label={label}>
        <IconButton
          ref={ref}
          {...props}
          icon={<FiTrash2 />}
          isRound={true}
          size="sm"
          aria-label={label}
          color="red.500"
        />
      </Tooltip>
    );
  }
);

export default ButtonDelete;
