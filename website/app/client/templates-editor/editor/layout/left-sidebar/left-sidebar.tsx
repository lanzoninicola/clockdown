import Sidebar from "../sidebar/sidebar";

interface LeftSidebarProps {
  children: React.ReactNode;
  [key: string]: any;
}

export default function LeftSidebar({ children, ...props }: LeftSidebarProps) {
  return (
    <Sidebar
      id="left-sidebar"
      borderRight={"1px solid"}
      borderColor={"gray.200"}
      left="0"
      {...props}
    >
      {children}
    </Sidebar>
  );
}
