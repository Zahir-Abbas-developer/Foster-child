import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import {
  childDaylogEventsReportInfoFormDataFunction,
  childDaylogEventsReportInfoFormSchema,
  childDaylogEventsReportInfoFormValues,
  defaultValueChildDaylogEventsReportInfoForm,
} from ".";
import { useGetSingleChildDaylogEventsReportInfoDataQuery } from "@root/services/foster-child/child-reports/child-day-log-events-reports/childDayLogEventsReportsInfo";

export const useChildDaylogEventsReportInfo = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const childDaylogEventsReportInfoFormData =
    childDaylogEventsReportInfoFormDataFunction(
      router?.query?.action === "view"
    );
  // get api params
  const pathParams = {
    id: router.query?.id,
  };

  const apiDataParameter = { pathParams };
  const { data, isLoading } = useGetSingleChildDaylogEventsReportInfoDataQuery(
    apiDataParameter,
    {
      skip: !!!router?.query?.id,
      refetchOnMountOrArgChange: true,
    }
  );
  const methods: any = useForm({
    resolver: yupResolver(childDaylogEventsReportInfoFormSchema),
    defaultValues: defaultValueChildDaylogEventsReportInfoForm(
      childDaylogEventsReportInfoFormValues
    ),
  });
  const { handleSubmit, reset } = methods;
  const childDaylogEventsReportsData = {
    "Carer Name": "Not Placed",
    "Supervising Social Worker": "Not Assigned",
    "User Name": "Sana",
  };
  useEffect(() => {
    reset(() => defaultValueChildDaylogEventsReportInfoForm(data?.data));
  }, [data, reset]);

  return {
    childDaylogEventsReportInfoFormData,
    methods,
    handleSubmit,
    router,
    theme,
    isLoading,
    childDaylogEventsReportsData,
  };
};
