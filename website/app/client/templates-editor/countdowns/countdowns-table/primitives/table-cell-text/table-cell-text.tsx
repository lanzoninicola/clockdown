import { forwardRef, TextProps } from "@chakra-ui/react";
import Teext from "../../../../global/common/layout/teext/teext";

const TableCellText = forwardRef(({ children, ...props }: TextProps, ref) => {
  return (
    <Teext ref={ref} as="span" fontSize={"sm"} {...props}>
      {children}
    </Teext>
  );
});

export default TableCellText;
