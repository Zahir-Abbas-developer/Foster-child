import {
  useCreateBusinessContinutyPlanMutation,
  useDeleteBusinessContinutyPlanMutation,
  useUpdateBusinessContinutyPlanMutation,
} from "@root/services/system-admin/business-Continuity-plan/bcp/BusinessContinutyPlanApi";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const useBusinessContinuityPlanForm = () => {
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDELERS
  const [createBusinessContinutyPlan] =
    useCreateBusinessContinutyPlanMutation();
  const [deleteBusinessContinutyPlan] =
    useDeleteBusinessContinutyPlanMutation();
  const [updateBusinessContinutyPlan] =
    useUpdateBusinessContinutyPlanMutation();
  //FUNCTIONS
  const onUploadSubmit = (data: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("document_name", data.document_name);
    formData.append("approved_by", data.approved_by);
    formData.append("approved_date", `${data.approved_date}`);
    formData.append("manager", data.manager);
    formData.append("document_file", data.documentFile);
    createBusinessContinutyPlan({
      body: formData,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Add Successfully", {
          variant: "success",
        });
        setisFatching(false);
        setModelOpen(false);
      })
      .catch((error: any) => {
        setisFatching(false);
        setModelOpen(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const onUpdateSubmit = (data: any, id: any) => {
    setisFatching(true);
    const sendData = {
      id: id,
      ...data,
    };

    updateBusinessContinutyPlan({
      body: sendData,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Edit Successfully", {
          variant: "success",
        });
        setisFatching(false);
        setModelOpen(false);
      })
      .catch((error: any) => {
        setisFatching(false);
        setModelOpen(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const onDeleteHander = (id: any) => {
    const sendData = {
      bcpIds: [`${id}`],
    };
    deleteBusinessContinutyPlan({
      body: sendData,
    })
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    onUploadSubmit,
    onUpdateSubmit,
    onDeleteHander,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useBusinessContinuityPlanForm;
