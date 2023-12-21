import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteAreaOfficeDataMutation,
  useGetAllAreaOfficeSetUpListDataQuery,
} from "@root/services/system-admin/area-office-setup/areaOfficeSetup";
import { useRouter } from "next/router";
import { useState } from "react";
import { areaOfficeColumnFunction } from ".";
import { enqueueSnackbar } from "notistack";

export const useAreaOfficeSetup = () => {
  const router = useRouter();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [deleteAreaOfficeData] = useDeleteAreaOfficeDataMutation();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllAreaOfficeSetUpListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  //-------- Delete Handler -----------//
  const onDeleteConfirm = async () => {
    try {
      const res: any = await deleteAreaOfficeData({
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

  const areaOfficeTableColumns = areaOfficeColumnFunction(
    router,
    prepareRecordForDelete
  );

  return {
    data,
    router,
    areaOfficeTableColumns,
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
