import { useTheme } from "@mui/material";
import {
  useDeleteHealthAndSafetyListDataMutation,
  useGetHealthAndSafetyListDataQuery,
} from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { columns } from ".";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";

export const useHealthAndSafetyTable = () => {
  const tableHeaderRef = useRef<any>();
  const [search, setSearch] = React.useState("");
  const [healthAndSafetyId, setHealthAndSafetyId] = React.useState<any>(null);
  const router = useRouter();

  const { makePath } = usePath();
  const { params, pageChangeHandler, sortChangeHandler } = useTableParams();

  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetHealthAndSafetyListDataQuery({
      search: search,
      ...params,
    });
  const [deleteListItem] = useDeleteHealthAndSafetyListDataMutation({});

  const healthAndSafetyApiData = data?.data?.healthAndSafeties;
  const meta = data?.data?.meta;

  isError && enqueueSnackbar("Error occured", { variant: "error" });

  const deleteList = async () => {
    const res: any = deleteListItem(healthAndSafetyId)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar(
          res?.message ?? "Health and Safety deleted  Successfully!",
          {
            variant: "success",
          }
        );
        setHealthAndSafetyId(null);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const openDeleteModel = (id: any) => {
    setHealthAndSafetyId(id);
  };

  const columnsFunction = columns({
    openDeleteModel,
    makePath,
    router,
  });

  return {
    deleteList,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    isFetching,
    columnsFunction,
    isSuccess,
    healthAndSafetyId,
    meta,
    setHealthAndSafetyId,
    makePath,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};
