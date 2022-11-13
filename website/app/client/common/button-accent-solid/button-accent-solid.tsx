import type { HTMLAttributes } from "react";

interface ButtonAccentSolidProps {
  children: React.ReactNode;
  clazzName?: HTMLAttributes<HTMLButtonElement>["className"];
}

export default function ButtonAccentSolid({
  children,
  clazzName,
}: ButtonAccentSolidProps) {
  return (
    <button
      className={`rounded-lg border-2 bg-accent-base px-6 py-2 font-body text-sm font-bold  uppercase text-black shadow-md hover:bg-accent-500 ${clazzName}`}
    >
      {children}
    </button>
  );
}
