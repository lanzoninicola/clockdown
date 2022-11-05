interface TitleH3Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function TitleH3({
  children,
  className,
  ...props
}: TitleH3Props) {
  return (
    <h3
      className={`md:leading-1 text-md font-accent font-bold uppercase tracking-wider md:text-lg ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
