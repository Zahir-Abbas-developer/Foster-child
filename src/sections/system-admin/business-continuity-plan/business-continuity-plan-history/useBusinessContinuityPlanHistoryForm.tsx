import {
  useCreateBusinessContinutyPlanHistoryMutation,
  useDeleteBusinessContinutyPlanHistoryMutation,
  useUpdateBusinessContinutyPlanHistoryMutation,
} from "@root/services/system-admin/business-Continuity-plan/history/businessContinutyplanHistoryApi";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const useBusinessContinuityPlanHistoryForm = () => {
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDELERS
  const [createBusinessContinutyPlanHistory] =
    useCreateBusinessContinutyPlanHistoryMutation();
  const [deleteBusinessContinutyPlanHistory] =
    useDeleteBusinessContinutyPlanHistoryMutation();
  const [updateBusinessContinutyPlanHistory] =
    useUpdateBusinessContinutyPlanHistoryMutation();
  //FUNCTIONS
  const onUploadSubmit = (data: any) => {
    console.log(data);

    setisFatching(true);
    const formData = new FormData();
    formData.append("steps_taken", data.steps_taken);
    formData.append("invoked_at", data.invoked_at);
    formData.append("outcome_name", data.outcome_name);
    formData.append("manager", data.manager);
    formData.append("outcome_file", data.documentFile);
    createBusinessContinutyPlanHistory({
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

    updateBusinessContinutyPlanHistory({
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
    deleteBusinessContinutyPlanHistory({
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

export default useBusinessContinuityPlanHistoryForm;
