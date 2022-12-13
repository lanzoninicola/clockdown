import { ReactElement, JSXElementConstructor } from "react";

export interface PropertyBarItem {
  label: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  ref?: React.RefObject<any>;
  title?: string;
  component: React.ReactElement;
  isPremium?: boolean;
  admin?: boolean;
}
