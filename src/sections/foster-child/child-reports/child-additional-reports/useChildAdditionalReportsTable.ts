import { useTableParams } from "@root/hooks/useTableParams";
import { useGetChildAdditionalReportTableApiQuery } from "@root/services/foster-child/child-reports/child-additional-report/childAdditionalReportAPI";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const useChildAdditionalReportsTable = () => {
  const router = useRouter();
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const { sortChangeHandler } = useTableParams();

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };

  const { data, isLoading, isError, isFetching, isSuccess }: any =
    useGetChildAdditionalReportTableApiQuery({
      params,
      fosterChildId: router?.query?.fosterChildId,
    });
  const family = data?.data?.child_additional_report;
  const meta = data?.meta;
  const headerChangeHandler = (text: any) => {
    setSearchHandle(text.search);
  };
  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return {
    sortChangeHandler,
    router,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    // postData,
  };
};
