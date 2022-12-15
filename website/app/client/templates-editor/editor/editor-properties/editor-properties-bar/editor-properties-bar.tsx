import { Text } from "@chakra-ui/react";
import { BsLayoutWtf } from "@react-icons/all-files/bs/BsLayoutWtf";
import { GoSettings } from "@react-icons/all-files/go/GoSettings";
import { MdLabelOutline } from "@react-icons/all-files/md/MdLabelOutline";
import { MdTimer10 } from "@react-icons/all-files/md/MdTimer10";
import { MdTitle } from "@react-icons/all-files/md/MdTitle";
import { SiCsswizardry } from "@react-icons/all-files/si/SiCsswizardry";
import { BsBucket } from "@react-icons/all-files/bs/BsBucket";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useGodMode from "~/client/common/utils/useGodMode";

import DialogWrapper from "../components/primitives/dialog-wrapper/dialog-wrapper";
import DialogWrapperHeader from "../components/primitives/dialog-wrapper/dialog-wrapper-header/dialog-wrapper-header";
import CssStylePropertiesGroup from "../properties/css-style-properties-group/css-style-properties-group";
import LayoutPropertiesGroup from "../properties/layout-properties-group/layout-properties-group";
import SeparatorPropertiesGroup from "../properties/separator-properties-group/separator-properties-group";
import SettingsPropertiesGroup from "../properties/settings-properties-group/settings-properties-group";
import StatePropertiesGroup from "../properties/state-properties-group/state-properties-group";
import TitlePropertiesGroup from "../properties/title-properties-group/title-properties-group";
import UnitLabelPropertiesGroup from "../properties/unit-label-properties-group/unit-label-properties-group";
import UnitNumberPropertiesGroup from "../properties/unit-number-properies-group/unit-number-properties-group";
import PropertiesBar from "./components/properties-bar/properties-bar";
import VerticalSeparatorIcon from "./components/vertical-separator-icon/vertical-separator-icon";
import type { PropertyBarItem } from "./types";

export default function EditorPropertiesBar() {
  const { t } = useTranslation();
  const shouldUseGodMode = useGodMode();
  const [itemSelected, setItemSelected] = useState<PropertyBarItem | null>(
    null
  );

  const items = [
    // {
    //   label: t("editor.propertiesBar.list"),
    //   icon: <MdViewList />,
    //   ref: useRef(null),
    //   title: t("editor.propertiesGroup.list.groupTitle"),
    //   component: <Countdowns />,
    //   isPremium: true,
    // },
    {
      label: t("editor.propertiesBar.settings.label"),
      shortLabel: t("editor.propertiesBar.settings.shortLabel"),
      icon: <GoSettings />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.settings.groupTitle"),
      component: <SettingsPropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: false,
    },
    {
      label: t("editor.propertiesBar.layout.label"),
      shortLabel: t("editor.propertiesBar.layout.shortLabel"),
      icon: <BsLayoutWtf />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.layout.groupTitle"),
      component: <LayoutPropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: false,
    },

    {
      label: t("editor.propertiesBar.title.label"),
      shortLabel: t("editor.propertiesBar.title.shortLabel"),
      icon: <MdTitle />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.title.groupTitle"),
      component: <TitlePropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: false,
    },
    {
      label: t("editor.propertiesBar.timer.label"),
      shortLabel: t("editor.propertiesBar.timer.shortLabel"),
      icon: <MdTimer10 />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.unitNumber.groupTitle"),
      component: <UnitNumberPropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: false,
    },
    {
      label: t("editor.propertiesBar.labels.label"),
      shortLabel: t("editor.propertiesBar.labels.shortLabel"),
      icon: <MdLabelOutline />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.unitLabel.groupTitle"),
      component: <UnitLabelPropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: false,
    },
    {
      label: t("editor.propertiesBar.separator.label"),
      shortLabel: t("editor.propertiesBar.separator.shortLabel"),
      icon: <VerticalSeparatorIcon />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.separator.groupTitle"),
      component: <SeparatorPropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: false,
    },
    {
      label: t("editor.propertiesBar.css.label"),
      shortLabel: t("editor.propertiesBar.css.shortLabel"),
      icon: <SiCsswizardry />,
      ref: useRef(null),
      title: t("editor.propertiesGroup.css.groupTitle"),
      component: <CssStylePropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: true,
    },
    {
      label: "Clockdown Customization State",
      shortLabel: "State",
      icon: <BsBucket />,
      ref: useRef(null),
      title: "Clockdown Customization State",
      component: <StatePropertiesGroup showGroupTitle={false} pb={5} />,
      isPremium: false,
      admin: true,
    },
  ];

  let itemsToRender = items;

  if (shouldUseGodMode === false) {
    itemsToRender = items.filter((item) => item.admin === false);
  } else {
    itemsToRender = items;
  }

  return (
    <>
      <PropertiesBar
        items={itemsToRender}
        onItemSelected={setItemSelected}
        data-element="editor-properties-bar"
      />
      {itemSelected && (
        <DialogWrapper
          callerRef={itemSelected?.ref}
          showCloseButton={false}
          borderTopColor={"blue.500"}
          minW={"450px"}
          offset={{
            left: 85,
          }}
          onCloseDialog={() => setItemSelected(null)}
        >
          <DialogWrapperHeader onClose={() => setItemSelected(null)}>
            <Text as="h3" className="theme-font" fontWeight={600}>
              {itemSelected?.title}
            </Text>
          </DialogWrapperHeader>
          {itemSelected?.component}
        </DialogWrapper>
      )}
    </>
  );
}
