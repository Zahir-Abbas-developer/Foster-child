import { useTableParams } from "@root/hooks/useTableParams";
import { useGetFostringServiceManagerReportQuery } from "@root/services/foster-child/child-reports/fostring-service-manager-reports/FostringServiceManagerReportAPi";

export const useFostringServiceManagerReportTable = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetFostringServiceManagerReportQuery<any>({ params });

  return {
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
