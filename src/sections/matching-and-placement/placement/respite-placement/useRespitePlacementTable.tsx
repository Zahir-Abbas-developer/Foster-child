import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteRespitePlacementListMutation,
  useGetRespitePlacementListQuery,
} from "@root/services/matching-and-placement/respite-placement/childRespitePlacementApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useRespitePlacementTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();

  //GET API For Car Placement List
  const {
    data: respitePlacementList,
    isError: respitePlacementListError,
    isLoading: respitePlacementListIsloading,
    isFetching: respitePlacementListIsfetching,
    isSuccess: respitePlacementListIsSuccess,
  }: any = useGetRespitePlacementListQuery({
    params: { search: search, ...params, filter: "CHILD" },
    fosterChildId: "2af08ed3-75cc-4e29-91bd-3ccc93509208",
  });

  //Getting API data and Meta
  const respitePlacementReferenceData =
    respitePlacementList?.data?.respite_list_infos;
  const meta = respitePlacementList?.data?.meta;

  const [deleteList] = useDeleteRespitePlacementListMutation();

  //DELETE API For  respite Placement List
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
    respitePlacementListIsloading,
    respitePlacementReferenceData,
    respitePlacementListIsfetching,
    respitePlacementListError,
    respitePlacementListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterChildId,
  };
};
