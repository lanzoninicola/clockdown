import "../../style/global.css";

import { Table, TableContainer, Tbody, Thead } from "@chakra-ui/react";

import { CountdownModel } from "../../countdown-widget/types";
import TableRow from "./components/table-row/table-row";
import TableHeaders from "./primitives/table-headers/table-headers";

interface CountdownsTableProps {
  paginatedData?: CountdownModel[] | undefined;
}

export default function CountdownsTable({
  paginatedData,
}: CountdownsTableProps) {
  const columnsName = [
    "id",
    "name",
    "description",
    "shortcode",
    "actions",
    // "createdAt",
    // "updatedAt",
  ];

  return (
    <TableContainer bg="white">
      <Table variant="simple" size={"sm"}>
        <Thead>
          <TableHeaders columnNames={columnsName} />
        </Thead>
        <Tbody>
          {paginatedData?.map((item) => (
            <TableRow key={item.id} countdown={item} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
