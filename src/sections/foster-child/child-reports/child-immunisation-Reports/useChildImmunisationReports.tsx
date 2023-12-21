import {
  useCreateChildImmunisationReportsListMutation,
  useDeleteChildImmunisationReportsListMutation,
  useLazyGetChildImmunisationReportsListQueryByIdQuery,
  useUpdateChildImmunisationReportsListMutation,
} from "@root/services/foster-child/child-records/child-immunisation-reports/ChildImmunisationReportsApi";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { childImmunisationReportsValue } from ".";
const useChildImmunisationReports = (props: any) => {
  const { action, fosterChildId, ChildImmunisationReportID } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS
  const [createChildImmunisationReportsList] =
    useCreateChildImmunisationReportsListMutation();
  const [deleteChildImmunisationReportsList] =
    useDeleteChildImmunisationReportsListMutation();
  const [updateChildImmunisationReportsList] =
    useUpdateChildImmunisationReportsListMutation();
  const [GetChildImmunisationReportsListQueryById] =
    useLazyGetChildImmunisationReportsListQueryByIdQuery();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(childImmunisationReportsValue);
    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      createChildImmunisationReportsList({
        params: {
          fosterChildId: fosterChildId,
        },
        body: { ...data },
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/child-reports/child-immunisation-details-report/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              ChildImmunisationReportID: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateChildImmunisationReportsList({
        params: {
          id: ChildImmunisationReportID,
        },
        body: {
          fosterChildId: fosterChildId,

          ...sendata,
        },
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/health-medical-history/hospitalisation/",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else {
      return null;
    }
  };
  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view" || action === "edit") {
      const { data, isError } = await GetChildImmunisationReportsListQueryById({
        params: {
          id: ChildImmunisationReportID,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return childImmunisationReportsValue;
      }
      const responseData = { ...data?.data };
      for (const key in responseData) {
        if (key.includes("date") || key.includes("Date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }

      return responseData;
    } else {
      setisloading(false);
      return childImmunisationReportsValue;
    }
  };
  const deleteHander = (id: any) => {
    deleteChildImmunisationReportsList(id)
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: { data: { message: any } }) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return {
    SubmitData,
    getDefaultValue,
    deleteHander,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useChildImmunisationReports;
