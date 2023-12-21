import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAllBackupArchieveListDataQuery } from "@root/services/system-admin/backup-archieve/backupArchieve";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

export const useArchiveSettings = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllBackupArchieveListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  return {
    router,
    theme,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
