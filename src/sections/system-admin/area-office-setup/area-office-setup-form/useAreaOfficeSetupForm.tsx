import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  AreaOfficeFormDataFucntion,
  areaOfficeFormSchema,
  defaultValueAreaOfficeForm,
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
import { enqueueSnackbar } from "notistack";
export const useAreaOfficeSetupForm = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const sanctionDetailsFormData = AreaOfficeFormDataFucntion(
    router?.query?.action === "view"
  );
  const [postAreaOfficeDataTrigger, postAreaOfficeDataStatus] =
    usePostAreaOfficeDataMutation();
  const [patchAreaOfficeDataTrigger, patchAreaOfficeDataStatus] =
    usePatchAreaOfficeDataMutation();

  const methods: any = useForm({
    resolver: yupResolver(areaOfficeFormSchema),
    defaultValues: defaultValueAreaOfficeForm(initialValues),
  });

  const { data, isLoading } = useGetSingleAreaOfficeDataQuery(
    {
      AreaOfficeId: router?.query?.AreaOfficeId,
    },
    {
      skip: !!!router?.query?.AreaOfficeId,
    }
  );

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => defaultValueAreaOfficeForm(data?.data));
  }, [data, reset]);

  // ----------- POST and PATCH Hanlder --------------- //
  const combinedPost_PatchFunction = async (data: any, apiTOHit: any) => {
    const apiDataParameter = {
      body: {
        ...data,
        ...(router?.query?.AreaOfficeId && {
          id: router?.query?.AreaOfficeId,
        }),
      },
    };
    try {
      const res: any = await apiTOHit(apiDataParameter).unwrap();
      router.push({
        pathname: router?.query?.AreaOfficeId
          ? `/system-admin/area-office-setup/form`
          : "/system-admin/area-office-setup",
        query: router?.query?.AreaOfficeId && {
          action: "edit",
          AreaOfficeId: router?.query?.AreaOfficeId,
        },
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  
  // ----------- Submit Hanlder --------------- //
  const onSubmit = async (data: any) => {
    if (!!router?.query?.AreaOfficeId) {
      combinedPost_PatchFunction(data, patchAreaOfficeDataTrigger);
      return;
    }
    combinedPost_PatchFunction(data, postAreaOfficeDataTrigger);
  };
  return {
    sanctionDetailsFormData,
    methods,
    isSubmitting,
    router,
    theme,
    isLoading,
    handleSubmit,
    onSubmit,
    postAreaOfficeDataStatus,
    patchAreaOfficeDataStatus,
  };
};
