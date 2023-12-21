import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import { useRef } from "react";

export const usePassport = () => {
  const theme: any = useTheme();
  const tableHeaderRefTwo = useRef<any>();

  const {
    data: passportlist,
    isError: passportListError,
    isLoading: passportListIsloading,
    isFetching: passportlistIsfetching,
    isSuccess: passportListIsSuccess,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "aboutCandidate.passport",
  });

  const passports = passportlist?.data;

  return {
    tableHeaderRefTwo,
    passportListIsloading,
    passports,
    passportlistIsfetching,
    passportListError,
    passportListIsSuccess,
    theme,
  };
};
