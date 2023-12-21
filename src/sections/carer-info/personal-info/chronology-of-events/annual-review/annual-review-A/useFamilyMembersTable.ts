import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetCarerFamilyTableApiQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useFamilyMembersTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();
  const [search, setSearch] = React.useState("");

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetCarerFamilyTableApiQuery({ params: { ...params, search: search } });

  const family = data?.faimly_details;
  const meta = data?.meta;

  return {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
    setSearch,
  };
};
