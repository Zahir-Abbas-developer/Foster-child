import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { rejectionColumnFunction } from ".";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteRejectionPlacementDataMutation,
  useGetAllRejectionsListDataQuery,
} from "@root/services/matching-and-placement/placement/rejectionsPlacement";

export const useRejection = () => {
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const router = useRouter();
  const theme = useTheme();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllRejectionsListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const [deleteRejectionPlacementData] =
    useDeleteRejectionPlacementDataMutation();

  //-------- Delete Handler -----------//
  const onDeleteConfirm = async () => {
    try {
      const res: any = await deleteRejectionPlacementData({
        id: deleteData,
      }).unwrap();
      setIsRecordSetForDelete(false);

      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };

  const thirdPartyColumnTableColumns = rejectionColumnFunction(
    router,
    prepareRecordForDelete
  );

  return {
    data,
    router,
    thirdPartyColumnTableColumns,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
