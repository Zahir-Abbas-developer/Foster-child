import { useTheme } from "@mui/material";
import { ENQUIRYSTAGEDATA } from "./index";
import { useGetEnquiryStageStatusQuery } from "@root/services/recruitment/enquiry-stage/enquiryStage";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { enqueueSnackbar } from "notistack";

export const useEnquiryStage: any = () => {
  const router = useRouter();
  const { fosterCarerId } = router.query;

  const ENQUIRYSTAGEDATAFunction = ENQUIRYSTAGEDATA(fosterCarerId);
  const [enquiryStageData, setEnquiryStageData] = React.useState(
    ENQUIRYSTAGEDATAFunction
  );

  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetEnquiryStageStatusQuery(id);
  const enquiryStageApiData = data?.data;
  isError &&
    enqueueSnackbar(data?.message ?? "Something Went Wrong!", {
      variant: "error",
    });

  isSuccess &&
    enqueueSnackbar(data?.message ?? "Data Retrieve Successfully", {
      variant: "success",
    });
  useEffect(() => {
    setEnquiryStageData(
      ENQUIRYSTAGEDATAFunction.map((item) => ({
        ...item,
        status: enquiryStageApiData?.[item.textForApi],
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enquiryStageApiData]);

  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  const [
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
  ] = React.useState(false);

  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
    enquiryStageData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    setEnquiryStageData,
  };
};
