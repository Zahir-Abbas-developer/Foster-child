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
} from "@root/services/carer-info/personal-info/chronology-of-events/supervisory-visit-api/superVisoryVisitApi";
import useAuth from "@root/hooks/useAuth";
export const useCarerSectionB = (action: any, id: any) => {
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [getVisitList] = useLazySingleSupervisingVisitListQuery();
  const [editVisitList] = usePatchSupervisingVisitListMutation();
  const {
    user: { firstName, lastName },
  }: any = useAuth();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getVisitList(id);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = {
        ...data.data?.getSupervisoryHomeVisitRes?.carerSectionB,
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
    if (action === "edit") {
      setIsFetching(true);
      editVisitList({
        formData: {
          nameOfSupervising: firstName + " " + lastName,
          visitDate: new Date(),
          carerSectionB: { ...data },
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
