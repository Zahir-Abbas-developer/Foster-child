import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import { useRef } from "react";

export const useTrainingWork = () => {
  const theme: any = useTheme();
  const tableHeaderRefTwo = useRef<any>();

  const {
    data: traininglist,
    isError: trainingListError,
    isLoading: trainingListIsloading,
    isFetching: traininglistIsfetching,
    isSuccess: trainingListIsSuccess,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "trainingHistory.trainingCertificate",
  });

  const trainings = traininglist?.data;

  return {
    tableHeaderRefTwo,
    trainingListIsloading,
    trainings,
    traininglistIsfetching,
    trainingListError,
    trainingListIsSuccess,
    theme,
  };
};
