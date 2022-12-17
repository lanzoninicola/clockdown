interface SubmitAuthButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
}

export default function SubmitAuthButton({
  children,
  isDisabled,
  isLoading,
  loadingText = "Loading",
}: SubmitAuthButtonProps) {
  return (
    <>
      <button
        className="text-md w-full cursor-pointer rounded-xl bg-accent-base py-2 text-center font-body font-bold uppercase tracking-wide shadow-lg transition-colors hover:bg-accent-500"
        disabled={isDisabled || isLoading}
      >
        {isLoading ? loadingText : children}
      </button>
    </>
  );
}
