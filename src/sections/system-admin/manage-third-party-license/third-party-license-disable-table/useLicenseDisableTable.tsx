import { useState } from "react";
import { useRouter } from "next/router";
import { thirdPartyLicenseColumnFunction } from ".";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteThirdOfficeLicenseDataMutation,
  useUpdateLicenseStatusMutation,
} from "@root/services/system-admin/third-party-licence/thirdPartyLicence";

export const useLicenceDisableTable = () => {
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const router = useRouter();
  const theme = useTheme();

  const [deleteThirdPartyLicenseData] =
    useDeleteThirdOfficeLicenseDataMutation();
  const [updateLicenseStatus, { isLoading }] = useUpdateLicenseStatusMutation();

  //-------------- Change status Handler ----------------//
  const changeStatusHandler = async (id: any) => {
    try {
      const res: any = await updateLicenseStatus({
        licenseId: id,
      }).unwrap();

      enqueueSnackbar(res?.message ?? `License Updated Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  //-------- Delete Handler -----------//
  const onDeleteConfirm = async () => {
    try {
      const res: any = await deleteThirdPartyLicenseData({
        licenseId: deleteData,
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

  const thirdPartyColumnTableColumns = thirdPartyLicenseColumnFunction(
    router,
    prepareRecordForDelete,
    changeStatusHandler,
    isLoading
  );

  return {
    thirdPartyColumnTableColumns,
    router,
    onDeleteConfirm,
    theme,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
  };
};
