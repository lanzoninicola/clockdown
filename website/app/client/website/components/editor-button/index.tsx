import { Link } from "@remix-run/react";
import ArrowRight from "../../common/arrow-right/arrow-right";

interface EditorButtonProps {
  variant?: "primary" | "secondary";
}

export default function EditorButton({
  variant = "primary",
}: EditorButtonProps) {
  return (
    <Link to="/app">
      <button
        className={`flex max-w-max flex-row gap-4 rounded-xl  ${
          variant === "primary" ? "bg-blue-400" : "bg-gray-400"
        } px-8 py-2 shadow-lg transition-colors ${
          variant === "primary" ? "hover:bg-blue-500" : "hover:bg-gray-500"
        }`}
      >
        <span className="font-body text-xl font-bold uppercase tracking-wider text-white">
          Criar um contador
        </span>
        <ArrowRight color="text-white" />
      </button>
    </Link>
  );
}
