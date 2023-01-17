import type { HTMLAttributes } from "react";

interface ButtonOutlineProps {
  children: React.ReactNode;
  clazzName?: HTMLAttributes<HTMLButtonElement>["className"];
}

export default function ButtonOutline({
  children,
  clazzName,
}: ButtonOutlineProps) {
  return (
    <button
      className={`rounded-lg border-2 border-blue-500 bg-transparent px-6 py-2 font-body text-sm font-bold  uppercase text-blue-500 shadow-md hover:bg-blue-100 ${clazzName} button-animate`}
    >
      {children}
    </button>
  );
}
