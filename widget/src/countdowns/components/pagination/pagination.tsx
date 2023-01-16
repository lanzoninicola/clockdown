import { VStack } from "@chakra-ui/react";
import { cloneElement, useState } from "react";

import PaginationControls from "./pagination-controls/pagination-controls";

interface PaginationProps<T> {
  /** The data to paginated */
  data: T[] | undefined;
  /** The number of rows to render */
  rowsPerPage?: number;
  /** The children of wrapper */
  children: React.ReactElement;
}

/**
 * Acts as a wrapper for a table / list, allowing for pagination.
 * The pagination is controlled by the `data` prop, which is an array.
 *
 * *** IMPORTANT ***
 * The data prop is passed to the children as `paginatedData` prop.
 * The children must have a `paginatedData` prop, which is an array of data to render.
 *
 * Default rows per page is 10.
 *
 * @param param0
 * @returns
 */
export default function Pagination<T>({
  data,
  rowsPerPage = 10,
  children,
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(rowsPerPage);
  const [totalPages] = useState(onInitTotalPages());

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function onInitTotalPages() {
    return data ? Math.ceil(data.length / pageSize) : 0;
  }

  const paginatedData =
    data && data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <VStack w="max-content" spacing={2}>
      {cloneElement(children, { paginatedData })}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </VStack>
  );
}
