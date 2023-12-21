import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import {
  CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
  childDaylogEventsReportInfoTableColumnsFunction,
} from ".";
import { useGetAllChildDaylogEventsReportListDataQuery } from "@root/services/foster-child/child-reports/child-day-log-events-reports/childDayLogEventsReportsInfo";

export const useChildDaylogEventsReportList = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const queryParams = {
    search: searchValue,
    offset: page,
    limit: CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
  };

  const pathParams = {
    ...(router?.query?.fosterChildId && {
      fosterChildId: router?.query?.fosterChildId,
    }),
  };
  const apiDataParameter = { queryParams, pathParams };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllChildDaylogEventsReportListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const childDaylogEventsReportInfoTableColumns =
    childDaylogEventsReportInfoTableColumnsFunction(router);

  return {
    childDaylogEventsReportInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
  };
};
