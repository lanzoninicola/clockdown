import type { ThemeStateData } from "../../common/types/theme";
import type { ThemeStateAction } from "../type/theme-actions";

export default function themeReducer(
  state: ThemeStateData,
  action: ThemeStateAction
): ThemeStateData {
  switch (action.type) {
    case "LOAD_INITIAL_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitLabelFontFamily: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_WEIGHT":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitLabelFontWeight: action.payload,
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

    case "THEME_TIMER_ON_CHANGE_UNIT_LABEL_TEXT_TRANSFORM":
      return {
        ...state,
        timer: {
          ...state.timer,
          unitLabelTextTransform: action.payload,
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

    case "THEME_LAYOUT_ON_CHANGE_HEIGHT":
      return {
        ...state,
        layout: {
          ...state.layout,
          height: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_ORIENTATION":
      return {
        ...state,
        layout: {
          ...state.layout,
          orientation: action.payload,
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

    case "THEME_LAYOUT_ON_CHANGE_BACKGROUND_TRANSPARENT":
      return {
        ...state,
        layout: {
          ...state.layout,
          transparentBackground: action.payload,
          backgroundColor: null,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_BACKGROUND_COLOR":
      return {
        ...state,
        layout: {
          ...state.layout,
          backgroundColor: action.payload,
          transparentBackground: false,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_BORDER_WIDTH":
      return {
        ...state,
        layout: {
          ...state.layout,
          borderWidth: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_BORDER_COLOR":
      return {
        ...state,
        layout: {
          ...state.layout,
          borderColor: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_BORDER_RADIUS":
      return {
        ...state,
        layout: {
          ...state.layout,
          borderRadius: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_CSS_STYLE":
      return {
        ...state,
        layout: {
          ...state.layout,
          css: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_LAYOUT_ON_CHANGE_ORDER_ITEM_REVERSE":
      return {
        ...state,
        layout: {
          ...state.layout,
          reverseOrderItems: action.payload,
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
        },
        layout: {
          ...action.payload.theme.layout,
        },
        title: {
          ...state.title,
          ...action.payload.theme.title,
        },
        timer: {
          ...action.payload.theme.timer,
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

    case "THEME_TITLE_ON_CHANGE_UPPERCASE_TEXT":
      return {
        ...state,
        title: {
          ...state.title,
          titleTextTransform: action.payload,
        },
        actionDispatched: action.type,
      };

    case "THEME_TITLE_ON_CHANGE_LOWERCASE_TEXT":
      return {
        ...state,
        title: {
          ...state.title,
          titleTextTransform: action.payload,
        },
        actionDispatched: action.type,
      };

    default:
      return state;
  }
}
