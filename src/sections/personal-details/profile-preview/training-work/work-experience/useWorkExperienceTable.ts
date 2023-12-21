import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import { useRef } from "react";

export const useWorkExperienceTable = () => {
  const theme: any = useTheme();
  const tableHeaderRefTwo = useRef<any>();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();

  const {
    data: experiencelist,
    isError: experienceListError,
    isLoading: experienceListIsloading,
    isFetching: experiencelistIsfetching,
    isSuccess: experienceListIsSuccess,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "workExperience",
  });

  const experiences = experiencelist?.data?.workExperience;
  const meta = experiencelist?.data?.meta;

  return {
    tableHeaderRefTwo,
    experienceListIsloading,
    experiences,
    experiencelistIsfetching,
    experienceListError,
    experienceListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  };
};
