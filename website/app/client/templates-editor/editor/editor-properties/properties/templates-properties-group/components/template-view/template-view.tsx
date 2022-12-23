interface TemplateProps {
  src: string;
  alt: string;
}

export default function TemplateView({ src, alt }: TemplateProps) {
  return (
    <div
      className="h-full w-full cursor-pointer"
      data-element="template-view-box"
    >
      <img src={`images/templates-thumb/${src}.jpg`} alt={alt} />
    </div>
  );
}
