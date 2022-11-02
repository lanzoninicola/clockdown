import { HStack } from "@chakra-ui/react";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { useTranslation } from "react-i18next";

import Teext from "../../../../global/common/layout/teext/teext";
import PageChangeButton from "../page-change-button/page-change-button";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const { t } = useTranslation();

  return (
    <HStack justifyContent={"space-between"} w="100%">
      <HStack spacing={4}>
        <PageChangeButton
          label={t("global.pagination.previousPage")}
          icon={<FiArrowLeft />}
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1 || totalPages === 0}
        />
        <HStack spacing={2}>
          <Teext fontSize="xs">{t("global.pagination.currentPage")}</Teext>
          <Teext fontSize="xs">{currentPage}</Teext>
        </HStack>
        <PageChangeButton
          label={t("global.pagination.previousPage")}
          icon={<FiArrowRight />}
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages || totalPages === 0}
        />
      </HStack>
      <HStack spacing={2}>
        <Teext fontSize="xs">{t("global.pagination.totalPages")}</Teext>
        <Teext fontSize="xs">{totalPages}</Teext>
      </HStack>
    </HStack>
  );
}
