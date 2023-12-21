import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazySingleSupervisingVisitListQuery,
  usePatchSupervisingVisitListMutation,
  usePostSupervisingVisitListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/supervisory-visit-api/superVisoryVisitApi";
import useAuth from "@root/hooks/useAuth";
export const useCarerSectionA = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [getReviewList] = useLazySingleSupervisingVisitListQuery();
  const [postReviewDetails] = usePostSupervisingVisitListMutation();
  const [editReviewList] = usePatchSupervisingVisitListMutation();
  const {
    user: { firstName, lastName },
  }: any = useAuth();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getReviewList(id);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = {
        ...data?.data?.getSupervisoryHomeVisitRes?.carerSectionA,
      };
      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });
  const {
    setValue,
    trigger,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postReviewDetails({
        params: {
          fosterCarerId: fosterCarerId,
        },
        body: {
          nameOfSupervising: firstName + " " + lastName,
          visitDate: new Date(),
          carerSectionA: { ...data },
        },
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Review Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/personal-info/carer-chronology-of-events/supervisory-visit",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterCarerId: fosterCarerId,
            },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else if (action === "edit") {
      setIsFetching(true);
      editReviewList({
        formData: {
          nameOfSupervising: firstName + " " + lastName,
          visitDate: new Date(),
          carerSectionA: { ...data },
        },
        id: id,
      })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Review Edited Successfully", {
            variant: "success",
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
          setIsFetching(false);
        });
    } else {
      return null;
    }
  };
  return {
    router,
    onSubmit,
    isLoading,
    getDefaultValue,
    theme,
    setValue,
    trigger,
    handleSubmit,
    getValues,
    methods,
    isFetching,
    isSubmitting,
    fosterCarerId,
  };
};
