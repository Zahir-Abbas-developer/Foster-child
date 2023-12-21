import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { youngPersonTableColumnsFunction } from ".";
import { useGetAllYoungPersonListDataQuery } from "@root/services/foster-child/child-reports/young-person/YoungPerson";

export const useYoungPersonsList = () => {
  const router = useRouter();
  const theme = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
  useGetAllYoungPersonListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const youngPersonReportsTableColumns = youngPersonTableColumnsFunction(
    router
  );

  return {
    youngPersonReportsTableColumns,
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
