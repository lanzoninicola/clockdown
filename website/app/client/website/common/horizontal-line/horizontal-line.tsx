interface HorizontalLineProps {
  color?: string;
}

function HorizontalLine({ color }: HorizontalLineProps) {
  return <hr className={`${color || "bg-gray-200"} my-8 h-px border-0`}></hr>;
}

export default HorizontalLine;
