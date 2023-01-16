import { Link } from "@remix-run/react";
import ArrowRight from "../../common/arrow-right/arrow-right";

interface EditorButtonProps {
  variant?: "primary" | "secondary" | "accent";
  label?: string;
}

export default function EditorButton({
  variant = "primary",
  label,
}: EditorButtonProps) {
  const bgColor =
    variant === "primary"
      ? "bg-blue-400"
      : variant === "secondary"
      ? "bg-gray-400"
      : "bg-accent-base";

  const hoverColor =
    variant === "primary"
      ? "hover:bg-blue-500"
      : variant === "secondary"
      ? "hover:bg-gray-500"
      : "hover:bg-accent-500";

  const textColor =
    variant === "primary"
      ? "text-white"
      : variant === "secondary"
      ? "text-gray-800"
      : "text-black";

  return (
    <Link to="/app">
      <button
        className={`flex max-w-max flex-row gap-4 rounded-xl  ${bgColor} px-8 py-2 shadow-lg transition-colors ${hoverColor}`}
      >
        <span
          className={`text-md font-body font-bold uppercase tracking-wider md:text-xl ${textColor}`}
        >
          {label || "Get Started"}
        </span>
        <ArrowRight color={`${textColor}`} />
      </button>
    </Link>
  );
}
