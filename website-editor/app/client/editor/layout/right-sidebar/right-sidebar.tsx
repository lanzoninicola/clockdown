import Sidebar from "../sidebar/sidebar";

interface RightSidebarProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function RightSidebar({
  children,
  ...props
}: RightSidebarProps) {
  return (
    <Sidebar
      pr="1rem"
      borderLeft={"1px solid"}
      borderColor={"gray.200"}
      position="absolute"
      right="0"
      {...props}
    >
      {children}
    </Sidebar>
  );
}
