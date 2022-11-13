import type { HTMLAttributes } from "react";

interface ButtonAccentOutlineProps {
  children: React.ReactNode;
  clazzName?: HTMLAttributes<HTMLButtonElement>["className"];
}

export default function ButtonAccentOutline({
  children,
  clazzName,
}: ButtonAccentOutlineProps) {
  return (
    <button
      className={`rounded-lg border-2 border-accent-base bg-transparent px-6 py-2 font-body text-sm font-bold  uppercase text-black shadow-md hover:bg-accent-500 ${clazzName}`}
    >
      {children}
    </button>
  );
}
