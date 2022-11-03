import { forwardRef, Heading, HeadingProps } from "@chakra-ui/react";

const Heeading = forwardRef(({ children, ...props }: HeadingProps, ref) => {
  return (
    <Heading ref={ref} className="theme-font" {...props}>
      {children}
    </Heading>
  );
});

export default Heeading;
