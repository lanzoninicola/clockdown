import { LayoutOrientation } from "../../../../../countdown-state-management/common/types/theme/layout";

export type Templates = Record<string, Template>;

export interface Template {
  id: string;
  name: string;
  style: string;
  image: string;
  fontFamily?: string;
  orientation: LayoutOrientation;
  disabled?: boolean;
  editable?: boolean;
}
