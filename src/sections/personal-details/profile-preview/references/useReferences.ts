import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import { useRef } from "react";

export const useReferences = () => {
  const theme: any = useTheme();
  const tableHeaderRefTwo = useRef<any>();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();

  const {
    data: referencelist,
    isError: referenceListError,
    isLoading: referenceListIsloading,
    isFetching: referencelistIsfetching,
    isSuccess: referenceListIsSuccess,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "reference",
  });

  const references = referencelist?.data;
  const meta = referencelist?.data?.meta;

  return {
    tableHeaderRefTwo,
    referenceListIsloading,
    references,
    referencelistIsfetching,
    referenceListError,
    referenceListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  };
};
