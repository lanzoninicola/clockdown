import { Th, Tr } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Heeading from "../../../../global/common/layout/heeading/heeading";

export default function TableHeaders({
  columnNames,
}: {
  columnNames: string[];
}) {
  const { t } = useTranslation();

  return (
    <Tr>
      {columnNames.map((name, idx) => {
        const w =
          name === "name" ? "150px" : name === "description" ? "200px" : "auto";

        return (
          <Th key={idx} minW={w}>
            <Heeading fontSize={"xs"}>{t(`countdowns.table.${name}`)}</Heeading>
          </Th>
        );
      })}
    </Tr>
  );
}
