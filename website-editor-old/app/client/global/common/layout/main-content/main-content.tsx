import { Box } from "@chakra-ui/react";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const WP_ADMIN_SIDEBAR_WIDTH_PX = "200px";
  const WP_ADMIN_TOPBAR_HEIGHT_PX = "32px";

  return (
    <Box
      id="clockdown-main"
      minW={`calc(100vw - ${WP_ADMIN_SIDEBAR_WIDTH_PX})`}
      // h={`calc(100vh - ${WP_ADMIN_TOPBAR_HEIGHT_PX})`}
      h="100vh"
      position="relative"
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
}
