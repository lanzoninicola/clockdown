import { ThemeStateData } from "../../common/types/theme";
import { ThemeStateAction } from "../type/theme-actions";

export default function themeReducer(
  state: ThemeStateData,
  action: ThemeStateAction
): ThemeStateData {
  switch (action.type) {
    case "THEME_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitNumberFontFamily: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_WEIGHT":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitNumberFontWeight: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_SIZE":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitLabelFontSize: {
            ...state.timer.unitLabelFontSize,
            [action.payload.token]: action.payload.size,
          },
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_COLOR":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitLabelFontColor: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_LANGUAGE":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitLabelLanguage: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_SIZE":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitNumberFontSize: {
            ...state.timer.unitNumberFontSize,
            [action.payload.token]: action.payload.size,
          },
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_COLOR":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitNumberFontColor: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitNumberFontFamily: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_WEIGHT":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitNumberFontWeight: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_VISIBILITY_DAYS":
      return {
        ...state,
        timer: {
          ...state.timer,
          hideDays: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_VISIBILITY_HOURS":
      return {
        ...state,
        timer: {
          ...state.timer,
          hideHours: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_VISIBILITY_SECONDS":
      return {
        ...state,
        timer: {
          ...state.timer,
          hideSeconds: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_PAD_WITH_ZERO":
      return {
        ...state,
        timer: {
          ...state.timer,
          padWithZero: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_SHOW_SEPARATOR":
      return {
        ...state,
        timer: {
          ...state.timer,
          showSeparator: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_SEPARATOR_CHAR":
      return {
        ...state,
        timer: {
          ...state.timer,
          separatorChar: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_LAST_UNIT_COLOR":
      return {
        ...state,
        timer: {
          ...state.timer,
          lastUnitColor: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_REMOVE_LINK":
      return {
        ...state,
        layout: {
          ...state.layout,
          removeLink: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_LINK_TARGET":
      return {
        ...state,
        layout: {
          ...state.layout,
          linkTarget: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_CONTAINER_SIZE":
      return {
        ...state,
        layout: {
          ...state.layout,
          containerSize: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_ORIENTATION":
      return {
        ...state,
        layout: {
          ...state.layout,
          orientation: action.payload,
          fitOnScreen: action.payload === "vertical" ? false : true,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_GAP":
      return {
        ...state,
        layout: {
          ...state.layout,
          gap: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_FIT_ON_SCREEN":
      return {
        ...state,
        layout: {
          ...state.layout,
          fitOnScreen: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_BACKGROUND_TRANSPARENT":
      return {
        ...state,
        layout: {
          ...state.layout,
          transparentBackground: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_BACKGROUND_COLOR":
      return {
        ...state,
        layout: {
          ...state.layout,
          backgroundColor: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TEMPLATE_ON_CHANGE_TEMPLATE":
      return {
        ...state,
        template: {
          ...state.template,
          id: action.payload.id,
          name: action.payload.name,
          style: action.payload.style,
        },
        actionDispatched: action.type,
      };

    case "THEME_TITLE_ON_CHANGE_TEXT":
      return {
        ...state,
        title: {
          ...state.title,
          text: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TITLE_ON_CHANGE_FONT_SIZE":
      return {
        ...state,
        title: {
          ...state.title,
          fontSize: {
            ...state.title.fontSize,
            [action.payload.token]: action.payload.size,
          },
        },
        actionDispatched: action.type,
      };

    case "THEME_TITLE_ON_CHANGE_FONT_COLOR":
      return {
        ...state,
        title: {
          ...state.title,
          fontColor: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TITLE_ON_CHANGE_FONT_FAMILY":
      return {
        ...state,
        title: {
          ...state.title,
          fontFamily: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TITLE_ON_CHANGE_FONT_WEIGHT":
      return {
        ...state,
        title: {
          ...state.title,
          fontWeight: action.payload,
        },
        actionDispatched: action.type,
      };

    default:
      return state;
  }
}
