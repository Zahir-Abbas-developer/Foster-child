import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  childComplaintsFormDataFunction,
  defaultValueComplaintsForm,
  initialValues,
} from ".";
import { useEffect } from "react";
import {
  useGetSingleAreaOfficeDataQuery,
  usePatchAreaOfficeDataMutation,
  usePostAreaOfficeDataMutation,
} from "@root/services/system-admin/area-office-setup/areaOfficeSetup";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
export const useChildComplaintsForm = ({ data, onSubmitHanlder }: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  console.log(data?.data);

  const complaintsFormData = childComplaintsFormDataFunction(
    router?.query?.action === "view"
  );

  const methods: any = useForm({
    // resolver: yupResolver(areaOfficeFormSchema),
    defaultValues: defaultValueComplaintsForm(initialValues),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => defaultValueComplaintsForm(data?.data));
  }, [data, reset]);

  const onSubmit = (data: any) => {
    onSubmitHanlder(data);
  };
  return {
    complaintsFormData,
    methods,
    isSubmitting,
    router,
    theme,
    onSubmit,
    handleSubmit,
  };
};
