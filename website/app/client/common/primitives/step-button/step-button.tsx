import { HTMLAttributes } from "react";

interface StepButtonProps {
  isActive: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  buttonClazzName?: HTMLAttributes<HTMLButtonElement>["className"];
  textClazzName?: HTMLAttributes<HTMLSpanElement>["className"];
}

export default function StepButton({
  isActive = false,
  children,
  buttonClazzName = "bg-blue-md",
  textClazzName = "text-black",
  onClick,
}: StepButtonProps) {
  return (
    <button
      type="button"
      className={`grid h-8 w-8 place-items-center rounded-full ${buttonClazzName} ${
        !isActive && "opacity-25"
      } `}
      onClick={onClick}
    >
      <span className={`${textClazzName} font-accent font-bold`}>
        {children}
      </span>
    </button>
  );
}
