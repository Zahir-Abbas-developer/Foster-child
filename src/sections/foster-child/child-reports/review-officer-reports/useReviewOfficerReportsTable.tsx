import { useTableParams } from "@root/hooks/useTableParams";
import { useGetReviewOfficerRportsQuery } from "@root/services/foster-child/child-reports/review-officer-reports/ReviewOfficerReportsAPI";

export const useReviewOfficerReportsTable = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetReviewOfficerRportsQuery<any>({ params });
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
