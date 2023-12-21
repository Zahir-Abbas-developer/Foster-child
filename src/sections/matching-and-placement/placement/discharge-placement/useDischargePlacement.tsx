import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import {
  DISCHARGEPLACEMENTLISTPAGELIMIT,
  dischargePlacementcolumnsFunction,
} from ".";
import { useGetAllDischargePlacementDataQuery } from "@root/services/matching-and-placement/placement/discharge-placement/dischargePlacement";

// ===========================================================================

export const useDischargePlacement = () => {
  let router = useRouter();
  const theme: any = useTheme();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const handleDeleteClose = () => setIsDeleteModal(!isDeleteModal);
  const buttonStyle = (status: string) => ({
    // width: "95px",
    // height: "31px",
    // border: "none",
    // borderRadius: "4px",
    // color: "#fff",
    backgroundColor:
      status === "Inprogress"
        ? theme.palette.orange.main
        : theme.palette.primary.main,
  });
  const SELECT_FILTERS = [
    {
      key: "fosterCarer",
      label: "Foster Carer",
      options: [{ label: "Foster Carer", value: "FosterCarer" }],
    },
  ];
  const pathParams = {
    // ...(router?.query?.fosterChildId && {
    //   fosterChildId:
    //     router?.query?.fosterChildId || "0887f19a-e5df-4d41-b4be-b530a1f816c4",
    // }),
    fosterChildId:
      router?.query?.fosterChildId || "0887f19a-e5df-4d41-b4be-b530a1f816c4",
  };
  const queryParams = {
    search: searchValue,
    offset: page,
    limit: DISCHARGEPLACEMENTLISTPAGELIMIT,
  };

  const apiDataParameter = { queryParams, pathParams };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllDischargePlacementDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });
  const dischargePlacementcolumns = dischargePlacementcolumnsFunction(
    buttonStyle,
    router,
    setIsDeleteModal
  );
  return {
    theme,
    router,
    dischargePlacementcolumns,
    SELECT_FILTERS,
    isDeleteModal,
    handleDeleteClose,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setPage,
    DISCHARGEPLACEMENTLISTPAGELIMIT,
    setSearchValue,
  };
};
