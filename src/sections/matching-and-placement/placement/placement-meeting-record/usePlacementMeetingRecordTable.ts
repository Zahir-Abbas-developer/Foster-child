import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeletePlacementRecordsListMutation,
  usePlacementRecordListQuery,
} from "@root/services/matching-and-placement/placement-meeting-record/placementMeetingRecordApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const usePlacementMeetingRecord = () => {
  const theme: any = useTheme();
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  //GET API For Car Placement List
  const {
    data: placementReferenceList,
    isError: placementReferenceListError,
    isLoading: placementReferenceListIsloading,
    isFetching: placementReferenceListIsfetching,
    isSuccess: placementReferenceListIsSuccess,
  }: any = usePlacementRecordListQuery({
    params: { search: search, ...params, filter: "CHILD" },
    fosterChildId: "2af08ed3-75cc-4e29-91bd-3ccc93509208",
  });

  //Getting API data and Meta
  const placementReferenceData =
    placementReferenceList?.data?.placement_meeting_record;
  const meta = placementReferenceList?.data?.meta;

  const [deleteList] = useDeletePlacementRecordsListMutation();
  //DELETE API For Placement Meeting Record List
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

  const SELECT_FILTERS = [
    {
      key: "selectCarer",
      label: "Select Carer",
      options: [
        { label: "Foster Carer", value: "carer" },
        { label: "Foster Child", value: "child" },
      ],
    },
  ];

  return {
    router,
    tableHeaderRefTwo,
    placementReferenceListIsloading,
    placementReferenceData,
    placementReferenceListIsfetching,
    placementReferenceListError,
    placementReferenceListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    fosterChildId,
    SELECT_FILTERS,
    theme,
  };
};
