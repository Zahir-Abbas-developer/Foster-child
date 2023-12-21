import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { defaultValues, formSchema, formatters } from "./index";
import {
  useLazySinglePlacementRecordsListQuery,
  usePatchPlacementRecordsMutation,
  usePostPlacementRecordsMutation,
} from "@root/services/matching-and-placement/placement-meeting-record/placementMeetingRecordApi";

export const useMeetingRecordForm = (action: any, id: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const { fosterChildId }: any = router.query;
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = React.useState(false);
  //API For Getting Single Details
  const [getMeetingRecordList] = useLazySinglePlacementRecordsListQuery();
  //API For Posting Car Meeting Record Form
  const [postMeetingRecordDetails] = usePostPlacementRecordsMutation();
  //API For Patch Meeting Record List
  const [editMeetingRecordList] = usePatchPlacementRecordsMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getMeetingRecordList(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };
      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }
      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };

  const methods: any = useForm({
    //resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    if (action === "add") {
      setIsFetching(true);
      const id = {
        fosterChildId: "2af08ed3-75cc-4e29-91bd-3ccc93509208",
      };
      for (let key in data) {
        formData.append(key, data[key]);
      }
      postMeetingRecordDetails({ formData, id })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/placement/meeting-record/form",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/placement/meeting-record",
            query: { fosterChildId: fosterChildId },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        params: {
          ...data,
        },
        placementMeetingRecordsId: id,
      };
      editMeetingRecordList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/placement/meeting-record",
            query: { fosterChildId: fosterChildId },
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/placement/meeting-record",
            query: { fosterChildId: fosterChildId },
          });
          setIsFetching(false);
        });
    } else {
      return null;
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    theme,
    router,
    fosterChildId,
    isLoading,
    isFetching,
  };
};
