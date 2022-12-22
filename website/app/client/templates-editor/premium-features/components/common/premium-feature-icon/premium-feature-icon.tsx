import { Flex, LayoutProps } from "@chakra-ui/react";

interface PremiumFeatureIconProps {
  w?: LayoutProps["w"];
  width?: LayoutProps["width"];
  h?: LayoutProps["h"];
  height?: LayoutProps["height"];
}

export default function PremiumFeatureIcon({
  w = "16px",
  width,
  h = "16px",
  height,
}: PremiumFeatureIconProps) {
  let clazzName = "";

  if (w) {
    clazzName += ` w-[${w}]`;
  }
  if (width) {
    clazzName += ` w-[${width}]`;
  }
  if (h) {
    clazzName += ` h-[${h}]`;
  }
  if (height) {
    clazzName += ` h-[${height}]`;
  }

  return (
    <div
      className={`h-[16px] w-[16px] flex-auto ${clazzName}`}
      data-element="premium-feature-icon-wrapper"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        style={{
          fill: "#CE8F31",
        }}
      >
        <path d="M27,11c0-6.1-4.9-11-11-11S5,4.9,5,11c0,2.9,1.1,5.6,3,7.5V31c0,0.4,0.2,0.7,0.5,0.9s0.7,0.2,1,0l6.5-3.7l6.5,3.7C22.7,32,22.8,32,23,32s0.3,0,0.5-0.1c0.3-0.2,0.5-0.5,0.5-0.9V18.5C25.9,16.6,27,13.9,27,11z M16,2c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S11,2,16,2z M16.5,26.1c-0.3-0.2-0.7-0.2-1,0L10,29.3v-9.1c1.7,1.1,3.8,1.8,6,1.8s4.3-0.7,6-1.8v9.1L16.5,26.1z"></path>
      </svg>
    </div>
  );
}
