import router, { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { ClaDocumentationReportValue } from ".";
import { useLazyGetClaDocumentationReportsListQueryByIdQuery } from "@root/services/foster-child/child-reports/cla-documentation-report/ClaDocumentationReportAPI";

const useClaDocumentationReportForm = (props: any) => {
  const { action } = props;
  const router: any = useRouter();
  const { id } = router.query;

  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS

  const [GetClaDocumentationReportsListQueryById] =
    useLazyGetClaDocumentationReportsListQueryByIdQuery();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(ClaDocumentationReportValue);
    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    // if (action === "add") {
    //   createChildImmunisationReportsList({
    //     params: {
    //       fosterChildId: fosterChildId,
    //     },
    //     body: { ...data },
    //   })
    //     .unwrap()
    //     .then((data) => {
    //       setisFatching(false);
    //       enqueueSnackbar("Information Added Successfully", {
    //         variant: "success",
    //       });

    //       router.push({
    //         pathname:
    //           "/foster-child/child-reports/child-immunisation-details-report/actions",
    //         query: {
    //           action: "edit",
    //           fosterChildId: fosterChildId,
    //           ClaDocumentationReportID: data?.data?.id,
    //           // ChildImmunisationReportID: data?.data?.id,
    //         },
    //       });
    //     })
    //     .catch((error: { data: { message: any } }) => {
    //       setisFatching(false);
    //       const errMsg = error?.data?.message;
    //       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    //     });
    // } else if (action === "edit") {
    //   updateChildImmunisationReportsList({
    //     params: {
    //       id: ClaDocumentationReportID,
    //       // id: ChildImmunisationReportID,
    //     },
    //     body: {
    //       fosterChildId: fosterChildId,

    //       ...sendata,
    //     },
    //   })
    //     .unwrap()
    //     .then(() => {
    //       setisFatching(false);
    //       enqueueSnackbar("Information Added Successfully", {
    //         variant: "success",
    //       });
    //       router.push({
    //         pathname: "/foster-child/health-medical-history/hospitalisation/",
    //         query: {
    //           fosterChildId: fosterChildId,
    //         },
    //       });
    //     })
    //     .catch((error: { data: { message: any } }) => {
    //       setisFatching(false);
    //       const errMsg = error?.data?.message;
    //       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    //     });
    // } else {
    //   return null;
    // }
  };

  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view") {
      const { data, isError } = await GetClaDocumentationReportsListQueryById(
        {
          params: {
            childReportId: id,
          },
        },
        true
      );

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return ClaDocumentationReportValue;
      }
      const responseData = { ...data?.data?.getchildReport };
      console.log("responseData", responseData);
      for (const key in responseData) {
        if (key.includes("date") || key.includes("Date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }
      return responseData;
    } else {
      setisloading(false);
      return ClaDocumentationReportValue;
    }
  };
  return {
    getDefaultValue,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useClaDocumentationReportForm;
