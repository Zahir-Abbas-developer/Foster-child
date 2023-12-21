import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { missingPlacementTableColumnsFunction } from ".";
import { useGetAllYoungPersonListDataQuery } from "@root/services/foster-child/child-reports/young-person/YoungPerson";
import { useGetAllMissingPlacementListDataQuery } from "@root/services/foster-child/child-reports/missing-placement/MissingPlacement";

export const useMissingPlacementList = () => {
  const router = useRouter();
  const theme = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
    fosterChildId: router?.query?.fosterChildId,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllMissingPlacementListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const missingPlacementReportsTableColumns =
  missingPlacementTableColumnsFunction(router);

  return {
    missingPlacementReportsTableColumns,
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
