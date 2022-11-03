import { Box, BoxProps } from "@chakra-ui/react";

interface BoxImageProps extends BoxProps {
  image: string | null;
  [key: string]: any;
}

export default function BoxImage({ image, ...props }: BoxImageProps) {
  return (
    <Box
      bgImage={`url(${image})`}
      bgRepeat={["no-repeat"]}
      bgPosition={["center"]}
      {...props}
    ></Box>
  );
}
