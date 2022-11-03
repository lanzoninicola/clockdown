import { Box } from "@chakra-ui/react";

interface AnchorBoxProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export default function AnchorBox({ children, ...props }: AnchorBoxProps) {
  return (
    <Box
      className="premium-feat-watermark"
      position={"absolute"}
      inset={0}
      zIndex={99}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    >
      {children}
    </Box>
  );
}
