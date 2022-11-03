import { Badge, Box, Flex } from "@chakra-ui/react";

interface DisplaySizeBarProps {
  /** The width of bar */
  w: string;
  /** Text inside the badge */
  badgeLabel: string;
  /** The global color if other are undefined */
  color?: string;
  /** The color of horizontal line */
  hLineColor?: string;
  /** The color of vertical line */
  vLineColor?: string;
  /** The color of the badge */
  badgeColor?: string;
}

export default function DisplaySizeBar({
  w,
  badgeLabel,
  color,
  hLineColor,
  vLineColor,
  badgeColor,
}: DisplaySizeBarProps) {
  return (
    <Flex
      w={w}
      borderLeft={"2px solid"}
      borderRight={"2px solid"}
      h="16px"
      alignItems={"center"}
      borderColor={vLineColor || color}
      position="relative"
    >
      <Box w="100%" bg={hLineColor || color} h="2px">
        <Flex
          justifyContent={"center"}
          alignItems="center"
          position={"absolute"}
          top="-2px"
          w="100%"
        >
          <Badge
            w="max-content"
            borderRadius={"xl"}
            bg={badgeColor || color}
            paddingInline={2}
            color="white"
            className="theme-font"
            fontWeight={500}
          >
            {badgeLabel}
          </Badge>
        </Flex>
      </Box>
    </Flex>
  );
}
