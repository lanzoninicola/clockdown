interface FigmaGridProps {
  cols?: number;
  gutter?: number;
  margins?: number;
  opacity?: number;
}

export default function FigmaGrid({
  cols,
  gutter,
  margins,
  opacity,
}: FigmaGridProps) {
  const columns = cols || 12;
  const gutterSpace = gutter || 2;
  const marginSpace = margins || 8.75;

  const totalGutter = gutterSpace * (columns - 1) * 0.25;

  //   return (
  //     <div
  //       data-element="figma-grid"
  //       className={`zIndex-50 fixed top-0 left-0 grid grid-cols-${columns} gap-${gutterSpace} pointer-events-none h-full w-full`}
  //       style={{
  //         marginInline: `${marginSpace}rem`,
  //       }}
  //     >
  //       {Array.from(Array(columns).keys()).map((col) => (
  //         <div
  //           data-element="figma-grid-column"
  //           key={col}
  //           style={{
  //             // width: `calc((100vw - ${totalGutter}rem - ${marginSpace}rem)/ ${columns})`,
  //             background: `red`,
  //             opacity: opacity || 0.1,
  //             height: `100vh`,
  //           }}
  //         ></div>
  //       ))}
  //     </div>
  //   );

  return (
    <div
      data-element="figma-grid"
      className={`grid grid-cols-${columns} gap-${gutterSpace} max-w-screen- mx-36 h-screen`}
    >
      <div className={`h-screen bg-red-500`}>1</div>
      <div className={`h-screen bg-red-500`}>2</div>
      <div className={`h-screen bg-red-500`}>3</div>
      <div className={`h-screen bg-red-500`}>4</div>
      <div className={`h-screen bg-red-500`}>5</div>
      <div className={`h-screen bg-red-500`}>6</div>
      <div className={`h-screen bg-red-500`}>7</div>
      <div className={`h-screen bg-red-500`}>8</div>
      <div className={`h-screen bg-red-500`}>9</div>
      <div className={`h-screen bg-red-500`}>10</div>
      <div className={`h-screen bg-red-500`}>11</div>
      <div className={`h-screen bg-red-500`}>12</div>
    </div>
  );
}
