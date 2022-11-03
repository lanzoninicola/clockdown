import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useCountdownsList from "../../../countdown-rest-api/hooks/useCountdownsList";
import { PremiumFeatureGuard } from "../../../premium-features";
import CountdownsTable from "../../countdowns-table/countdown-table";
import ModalFirstCountdown from "../modal-first-countdown/modal-first-countdown";
import Pagination from "../pagination/pagination";
import TableSkeleton from "../table-skeleton/table-skeleton";

// TODO: handling errors
export default function Countdowns() {
  const { t } = useTranslation();
  const { countdowns, isLoading, isError } = useCountdownsList();

  if (isError) {
    return <Heading>Error!</Heading>;
  }

  return (
    <Flex id="countdowns-list" flexDir={"column"}>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          {countdowns && countdowns.length > 0 ? (
            <PremiumFeatureGuard
              customText={t("premiumFeatures.modal.body.newCountdown", {
                maxCountdowns: "1",
              })}
            >
              <VStack alignItems={"flex-start"}>
                <Pagination data={countdowns} rowsPerPage={5}>
                  <CountdownsTable />
                </Pagination>
              </VStack>
            </PremiumFeatureGuard>
          ) : (
            <ModalFirstCountdown />
          )}
        </>
      )}
    </Flex>
  );
}
