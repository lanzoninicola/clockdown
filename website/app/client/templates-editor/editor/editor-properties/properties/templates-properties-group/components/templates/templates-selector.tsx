import {
  useThemeLayoutWithDispatcher,
  useThemeState,
  EditorContext,
} from "~/client/templates-editor/countdown-state-management";
import { PremiumFeatureGuard } from "~/client/templates-editor/premium-features";

import PropertyItem from "../../../../components/layout/property-item/property-item";
import { TEMPLATES } from "../../constants/templates";
import type { Template } from "../../types";
import TemplateView from "../template-view/template-view";

export default function TemplatesSelector() {
  const { themeDispatcher } = useThemeLayoutWithDispatcher();
  const { template } = useThemeState(EditorContext);

  function onChangeTemplate(t: Template) {
    console.log(t);

    themeDispatcher({
      type: "THEME_TEMPLATE_ON_CHANGE_TEMPLATE",
      payload: {
        id: t.id,
        name: t.name,
        theme: t.theme,
      },
    });

    if (t.theme.title.fontFamily) {
      themeDispatcher({
        type: "THEME_TITLE_ON_CHANGE_FONT_FAMILY",
        payload: t.theme.title.fontFamily || "Inter",
      });
    }

    if (t.theme.timer.unitLabelFontFamily) {
      themeDispatcher({
        type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY",
        payload: t.theme.timer.unitLabelFontFamily || "Inter",
      });
    }

    if (t.theme.timer.unitNumberFontFamily) {
      themeDispatcher({
        type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY",
        payload: t.theme.timer.unitNumberFontFamily || "Inter",
      });
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 justify-center">
        {Object.values(TEMPLATES)
          .filter((t) => t?.disabled === false)
          .map((t) => {
            return (
              <div
                key={t.id}
                className={`border-2 ${
                  t.id === template.id
                    ? "border-blue-500"
                    : "border-transparent"
                } h-[150px] w-[150px] rounded-md bg-gray-200 p-2`}
              >
                <PremiumFeatureGuard variant="modal" exclude={t.pro === false}>
                  <PropertyItem
                    clazzName="h-full w-full flex justify-center items-center relative pr-1"
                    onClick={() => onChangeTemplate(t)}
                  >
                    <TemplateView src={t.image} alt={t.name} />
                    <span className="font-xs color-black absolute bottom-2 left-0 right-0 my-auto text-center text-xs font-bold">
                      {t.name}
                    </span>
                  </PropertyItem>
                </PremiumFeatureGuard>
              </div>
            );
          })}
      </div>
    </>
  );
}
