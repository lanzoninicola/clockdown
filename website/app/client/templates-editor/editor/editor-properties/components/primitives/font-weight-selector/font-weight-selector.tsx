import type { Typography } from "~/client/templates-editor/countdown-widget-typography/types";

interface FontWeightSelectorProps {
  variants: Typography["variants"] | undefined;
  onSelectFontWeight: (fontWeight: string) => void;
}

export default function FontWeightSelector({
  variants,
  onSelectFontWeight,
}: FontWeightSelectorProps) {
  if (!variants) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm text-gray-500">Espessura fonte</span>
        <span className="text-xs text-gray-500">
          {`(Mais alto o número, mais grossa a fonte)`}
        </span>
      </div>
      <div className="flex gap-2">
        {variants.map((variant, idx) => (
          <div
            key={idx}
            className="grid h-6 w-8 cursor-pointer place-items-center rounded-md bg-gray-300 text-xs font-bold text-black hover:bg-gray-500 hover:text-white"
            onClick={() => onSelectFontWeight(variant)}
          >
            {variant}
          </div>
        ))}
      </div>
    </div>
  );
}
