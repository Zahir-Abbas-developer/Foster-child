import { useTableParams } from "@root/hooks/useTableParams";
import { useGetChildAlligationRportsQuery } from "@root/services/foster-child/child-reports/child-allegation-reports/ChildAllegationReportsApi";

export const useChildAllegationReportsTable = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
  useGetChildAlligationRportsQuery<any>({ params });
  console.log("pagination", params);
  console.log(data);

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
