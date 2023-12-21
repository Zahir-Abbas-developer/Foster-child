import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetCarerFamilyTableApiQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { getColumnsCarerFamilySupportNetwork } from "./";

export const useCarerFamilySupportNetworkTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const { makePath } = usePath();

  const columnsCarerFamilySupportNetwork =
    getColumnsCarerFamilySupportNetwork(makePath);

  const { params, pageChangeHandler, sortChangeHandler } = useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetCarerFamilyTableApiQuery({
      params: {
        ...params,
        search: search,
      },
    });

  const family = data?.faimly_details;
  const meta = data?.meta;

  return {
    makePath,
    router,
    tableHeaderRef,
    isLoading,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    columnsCarerFamilySupportNetwork,
    setSearch,
  };
};
