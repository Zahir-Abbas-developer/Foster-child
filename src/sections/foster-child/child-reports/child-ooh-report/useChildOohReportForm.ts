import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazySingleChildReportListQuery } from "@root/services/foster-child/child-reports/child-ooh-report/childReportApi";
export const useChildOohReportForm = (action: any, id: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const { fosterChildId }: any = router.query;
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  //API For Getting Single Details
  const [getChildReportList] = useLazySingleChildReportListQuery();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view") {
      const { data, isError } = await getChildReportList(id, true);
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
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });

  const { setValue, trigger, getValues } = methods;

  return {
    router,
    isLoading,
    getDefaultValue,
    theme,
    setValue,
    trigger,
    getValues,
    methods,
    isFetching,
    fosterChildId,
  };
};
