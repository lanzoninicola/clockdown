interface TitleH2Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function TitleH2({
  children,
  className,
  ...props
}: TitleH2Props) {
  return (
    <h2
      className={`md:leading-1 mb-4 font-accent text-2xl font-bold uppercase tracking-wider md:text-4xl ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
