import { useTableParams } from "@root/hooks/useTableParams";
import { useGetSupervisoryHomeVisitQuery } from "@root/services/foster-child/child-reports/supervisory-home-visit/SupervisoryHomeVisitAPI";
import { useRouter } from "next/router";

export const useSupervisoryHomeVisitTable = () => {
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetSupervisoryHomeVisitQuery<any>({
      params,
      fosterChildId: router?.query?.fosterChildId,
      fosterCarerId: ",",
    });
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
