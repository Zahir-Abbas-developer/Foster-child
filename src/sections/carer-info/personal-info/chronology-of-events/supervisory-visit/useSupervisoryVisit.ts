import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteSupervisingVisitListMutation,
  useSupervisingVisitListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/supervisory-visit-api/superVisoryVisitApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useSupervisoryVisit = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Supervisory List
  const {
    data: supervisoryVisit,
    isError: supervisoryVisitError,
    isLoading: supervisoryVisitIsloading,
    isFetching: supervisoryVisitIsfetching,
    isSuccess: supervisoryVisitIsSuccess,
  }: any = useSupervisingVisitListQuery({
    params: {
      search: search,
      ...params,
      fosterCarerId: fosterCarerId,
    },
  });
  const supervisoryVisits = supervisoryVisit?.data?.supervisory_home_visit;
  const meta = supervisoryVisit?.data?.meta;

  const [deleteList] = useDeleteSupervisingVisitListMutation();
  //DELETE API For Supervisory List
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
    supervisoryVisitIsloading,
    supervisoryVisits,
    supervisoryVisitIsfetching,
    supervisoryVisitError,
    supervisoryVisitIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    setSearch,
    fosterCarerId,
  };
};
