import type { ThemeStateData } from "../../types/theme";

const THEME_INITIAL_STATE: ThemeStateData = {
  template: {
    id: "default",
    name: "Default",
  },
  layout: {
    removeLink: false,
    linkTarget: "https://clockdown.tech/",
    containerSize: {
      width: 0,
      height: 0,
    },
    height: 0,
    orientation: "auto",
    gap: 1,
    transparentBackground: false,
    backgroundColor: null,
    borderWidth: 0,
    borderColor: null,
    borderRadius: 0,
    reverseOrderItems: false,
    css: null,
  },
  title: {
    text: "Super promo! 50% off on all products until 31/12/2021 23:59:59. Don't miss out!!!  🎉 🎉 🎉",
    fontFamily: null,
    fontWeight: null,
    fontSize: null,
    fontColor: null,
    titleTextTransform: "capitalize",
  },
  timer: {
    showSeparator: true,
    separatorChar: ":",
    hideDays: false,
    hideHours: false,
    hideSeconds: false,
    padWithZero: false,
    unitNumberFontFamily: null,
    unitNumberFontWeight: null,
    unitNumberFontSize: null,
    unitNumberFontColor: null,
    lastUnitColor: null,
    unitLabelFontFamily: null,
    unitLabelFontWeight: null,
    unitLabelFontSize: null,
    unitLabelLanguage: "en-US",
    unitLabelFontColor: null,
    unitLabelTextTransform: null,
  },
  actionDispatched: "",
};

export default THEME_INITIAL_STATE;
