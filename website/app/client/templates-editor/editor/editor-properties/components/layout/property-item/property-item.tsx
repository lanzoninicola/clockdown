import { Box } from "@chakra-ui/react";
import type { HTMLAttributes } from "react";

interface PropertyItemProps {
  children: React.ReactNode;
  clazzName?: HTMLAttributes<HTMLDivElement>["className"];
  [key: string]: any;
}

export default function PropertyItem({
  children,
  clazzName,
  ...props
}: PropertyItemProps) {
  return (
    <>
      <div
        className={`cursor-pointer rounded-sm pl-1 hover:bg-blue-200 ${clazzName}`}
        data-element="property-item"
        {...props}
      >
        <div data-element="property-inner-wrapper">{children}</div>
      </div>
    </>
  );
}
