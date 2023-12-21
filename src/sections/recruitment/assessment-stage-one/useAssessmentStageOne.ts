import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ASSESSMENTSTAGEONEDATA } from ".";
import { useGetStageOneStatusQuery } from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useAssessmentStageOne = () => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";
  const ASSESSMENTSTAGEONEDATAFUNCTION = ASSESSMENTSTAGEONEDATA(fosterCarerId);
  const theme: any = useTheme();
  const [assessmentStageOneData, setAssessmentStageOneData] = React.useState(
    ASSESSMENTSTAGEONEDATAFUNCTION
  );

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStageOneStatusQuery(id);

  isError &&
    enqueueSnackbar(data?.message ?? "Something Went Wrong!", {
      variant: "error",
    });

  isSuccess &&
    enqueueSnackbar(data?.message ?? "Data Retrieve Successfully", {
      variant: "success",
    });
  const assessmentStageOneApiData = data?.data;

  useEffect(() => {
    setAssessmentStageOneData(
      ASSESSMENTSTAGEONEDATAFUNCTION?.map((item: any) => ({
        ...item,
        status: assessmentStageOneApiData?.[item?.textForApi],
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assessmentStageOneApiData]);

  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    formDialogId,
    setFormDialogId,
    setOpenIdForInfo,
    assessmentStageOneData,
    setAssessmentStageOneData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};
