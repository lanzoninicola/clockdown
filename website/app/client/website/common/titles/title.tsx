interface TitleProps {
  children: React.ReactNode;
  css?: string;
  [key: string]: any;
}

export default function Title({ children, css, ...props }: TitleProps) {
  console.log(css);

  return (
    <h2
      className={`md:leading-1 text-md font-accent  font-bold uppercase tracking-wide text-green-600 md:text-4xl`}
      {...props}
    >
      {children}
    </h2>
  );
}
