import { forwardRef, Text, TextProps } from "@chakra-ui/react";

const Teext = forwardRef(({ children, ...props }: TextProps, ref) => {
  return (
    <Text ref={ref} className="theme-font" {...props}>
      {children}
    </Text>
  );
});

export default Teext;
