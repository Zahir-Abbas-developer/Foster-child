import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ASSESSMENTSTAGETWODATA } from ".";
import { useGetStageTwoStatusQuery } from "@root/services/recruitment/assessment-stage-two/assessmentStageTwoApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useAssessmentStageTwo = () => {
  const route = useRouter();
  const { fosterCarerId } = route.query;
  const ASSESSMENTSTAGETWODATAFUNCTION = ASSESSMENTSTAGETWODATA(fosterCarerId);
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const theme: any = useTheme();
  const [assessmentStageTwoData, setAssessmentStageTwoData] =
    React.useState<any>(ASSESSMENTSTAGETWODATAFUNCTION);
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStageTwoStatusQuery(id);
  const assessmentStageTwoApiData = data?.data;
  isError &&
    enqueueSnackbar(data?.message ?? "Something Went Wrong!", {
      variant: "error",
    });

  isSuccess &&
    enqueueSnackbar(data?.message ?? "Data Retrieve Successfully", {
      variant: "success",
    });
  useEffect(() => {
    setAssessmentStageTwoData(
      ASSESSMENTSTAGETWODATAFUNCTION?.map((item: any) => ({
        ...item,
        status: assessmentStageTwoApiData?.[item?.textForApi],
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentStageTwoApiData]);
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    assessmentStageTwoData,
    setAssessmentStageTwoData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    assessmentStageTwoApiData,
  };
};
