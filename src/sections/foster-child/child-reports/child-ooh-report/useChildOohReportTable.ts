import { useTableParams } from "@root/hooks/useTableParams";
import {
  useChildReportListQuery,
  useDeleteChildReportListMutation,
} from "@root/services/foster-child/child-reports/child-ooh-report/childReportApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useChildOohReportTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Child Ooh Report List
  const {
    data: childReportList,
    isError: childReportListError,
    isLoading: childReportListIsloading,
    isFetching: childReportListIsfetching,
    isSuccess: childReportListIsSuccess,
  }: any = useChildReportListQuery({
    params: {
      search: search,
      ...params,
    },
    fosterChildId: fosterChildId,
  });

  //Getting API data and Meta
  const childReportData = childReportList?.data;
  const meta = childReportList?.data?.meta;

  const [deleteList] = useDeleteChildReportListMutation();
  //DELETE API For Child Report List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    router,
    tableHeaderRefTwo,
    childReportListIsloading,
    childReportData,
    childReportListIsfetching,
    childReportListError,
    childReportListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterChildId,
  };
};
