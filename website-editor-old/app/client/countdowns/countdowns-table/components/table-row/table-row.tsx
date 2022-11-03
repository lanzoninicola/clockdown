import { HStack, Td, Tr } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useEditorStateWithDispatcher from "../../../../countdown-state-management/common/hooks/editor/useEditorStateWithDispatcher";
import { CountdownModel } from "../../../../countdown-widget/types";
import ShortcodePreview from "../../../../global/common/shortcode-preview/shortcode-preview";
import DeleteModal from "../../../components/modal-delete-countdown/modal-delete-countdown";
import ModalEditCountdown from "../../../components/modal-edit-countdown/modal-edit-countdown";
import ButtonEdit from "../../primitives/button-edit/button-edit";
import TableCellText from "../../primitives/table-cell-text/table-cell-text";

interface TableRowProps {
  countdown: CountdownModel;
}

//TODO: how to present the Date in the right format?

export default function TableRow({ countdown }: TableRowProps) {
  const { t } = useTranslation();
  const { id, name, description } = countdown;
  const { editorDispatcher } = useEditorStateWithDispatcher();

  /**
  const createdAt = dayjs(created_at).format("DD/MM/YYYY");
  const updatedAt = updated_at && dayjs(updated_at).format("DD/MM/YYYY");
   */

  return (
    <Tr>
      <Td maxW="8rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText fontSize={"xs"}>{id}</TableCellText>
      </Td>
      <Td maxW="8rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText fontSize={"xs"}>{name}</TableCellText>
      </Td>
      <Td maxW="20rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText fontSize={"xs"}>
          {description ? description : "..."}
        </TableCellText>
      </Td>
      <Td>
        <ShortcodePreview countdownId={countdown.id} />
      </Td>
      <Td>
        <HStack>
          <ButtonEdit
            label={t("global.customize")}
            onClick={() => {
              editorDispatcher({
                type: "EDITOR_SET_CURRENT_COUNTDOWN",
                payload: id,
              });
            }}
          />
          <ModalEditCountdown countdown={countdown} />
          <DeleteModal countdown={countdown} />
        </HStack>
      </Td>
      {/* <Td>
        <TableCellText fontSize={"xs"}>{createdAt}</TableCellText>
      </Td>
      <Td>
        <TableCellText fontSize={"xs"}>{updatedAt}</TableCellText>
      </Td> */}
    </Tr>
  );
}
