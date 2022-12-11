import type { LayoutOrientation } from "~/client/templates-editor/countdown-state-management/common/types/theme/layout";

export type Templates = Record<string, Template>;

export interface Template {
  id: string;
  name: string;
  style: string;
  image: string;
  fontFamily?: string;
  disabled?: boolean;
  editable?: boolean;
  theme?: {
    layout: {
      orientation?: LayoutOrientation;
      backgroundColor: string;
    };
    title: {
      fontFamily: string;
      fontWeight: string;
      fontSize: {
        sm: number;
        md: number;
        lg: number;
      };
      fontColor: string;
    };
    timer: {
      unitNumberFontFamily: string;
      unitNumberFontWeight: string;
      unitNumberFontSize: {
        sm: number;
        md: number;
        lg: number;
      };
      unitNumberFontColor: string;
      unitLabelFontFamily: string;
      unitLabelFontWeight: string;
      unitLabelFontSize: {
        sm: number;
        md: number;
        lg: number;
      };
      unitLabelFontColor: string;
    };
  };
}
