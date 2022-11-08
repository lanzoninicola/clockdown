import { Flex, forwardRef, StackProps } from "@chakra-ui/react";

interface BoxRadiusLgProps extends StackProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  spacing?: number;
}

const BoxRadiusLg = forwardRef(
  (
    { children, direction = "row", spacing, ...props }: BoxRadiusLgProps,
    ref
  ) => {
    return (
      <Flex
        direction={direction}
        ref={ref}
        gap={spacing || 4}
        borderRadius={"lg"}
        boxShadow={"lg"}
        paddingBlock=".5rem"
        paddingInline={"1rem"}
        mt="1rem"
        maxW="650px"
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

export default BoxRadiusLg;
