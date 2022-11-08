import { Box, BoxProps, Grid } from "@chakra-ui/react";

interface PropertyWrapperProps {
  children: React.ReactNode;
  columns?: number;
  firstColumnW?: string;
  bg?: BoxProps["bg"];
}

export default function PropertyWrapper({
  children,
  columns = 3,
  firstColumnW = "200px",
  bg = "white",
  ...props
}: PropertyWrapperProps) {
  return (
    <Box pl={".25rem"} _hover={{ background: "blue.200" }} w={"100%"}>
      <Box bg={bg} w={"100%"}>
        <Grid
          gridTemplateColumns={`minmax(0,${firstColumnW}) repeat(${
            columns - 1
          },minmax(0,1fr))`}
          gridTemplateRows={"auto"}
          paddingBlock={".25rem"}
          columnGap={".5rem"}
          alignItems={"center"}
          w="100%"
          position={"relative"}
          {...props}
        >
          {children}
        </Grid>
      </Box>
    </Box>
  );
}
