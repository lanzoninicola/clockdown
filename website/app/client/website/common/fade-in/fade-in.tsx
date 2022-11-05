interface FadeInProps {
  children: React.ReactNode;
}

export default function FadeIn({ children }: FadeInProps) {
  return <div className="animate-fadeIn">{children}</div>;
}
