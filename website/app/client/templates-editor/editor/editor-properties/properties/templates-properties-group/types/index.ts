import type { ThemeStateData } from "~/client/templates-editor/countdown-state-management/common/types/theme";
import { ThemeLayoutContextData } from "~/client/templates-editor/countdown-state-management/common/types/theme/layout";
import { ThemeTimerStateData } from "~/client/templates-editor/countdown-state-management/common/types/theme/timer";
import type { ThemeTitleStateData } from "~/client/templates-editor/countdown-state-management/common/types/theme/title";

export type Templates = Record<string, Template>;

export interface Template {
  id: string;
  name: string;
  image: string;
  disabled?: boolean;
  editable?: boolean;
  theme: {
    layout: Partial<ThemeLayoutContextData>;
    title: Partial<ThemeTitleStateData>;
    timer: ThemeTimerStateData;
  };
}
