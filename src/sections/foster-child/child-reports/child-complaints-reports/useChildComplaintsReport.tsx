import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { complaintReportsTableColumnsFunction } from ".";
import {  useGetAllComplaintsListDataQuery } from "@root/services/foster-child/child-reports/child-complaints-report/ChildComplaintsReport";

export const useChildComplaintsReport = () => {
  const router = useRouter();
  const theme = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
    fosterChildId: router?.query?.fosterChildId,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
  useGetAllComplaintsListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const complaintReportsTableColumns = complaintReportsTableColumnsFunction(
    router
  );

  return {
    complaintReportsTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    router,
    theme,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
