import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import { useRef } from "react";

export const useBankDetailsTable = () => {
  const theme: any = useTheme();
  const tableHeaderRefTwo = useRef<any>();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();

  const {
    data: traininglist,
    isError: trainingListError,
    isLoading: trainingListIsloading,
    isFetching: traininglistIsfetching,
    isSuccess: trainingListIsSuccess,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "bankDetail",
  });

  const trainings = traininglist?.data;
  const meta = traininglist?.data?.meta;

  return {
    tableHeaderRefTwo,
    trainingListIsloading,
    trainings,
    traininglistIsfetching,
    trainingListError,
    trainingListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  };
};
