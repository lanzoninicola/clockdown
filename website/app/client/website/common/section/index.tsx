interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={`${className} px-4 md:px-0`}>
      <div className="mx-auto max-w-[1280px] md:min-w-[768px]  md:flex-row lg:min-w-[1024px] xl:min-w-[1280px]">
        {children}
      </div>
    </section>
  );
}
