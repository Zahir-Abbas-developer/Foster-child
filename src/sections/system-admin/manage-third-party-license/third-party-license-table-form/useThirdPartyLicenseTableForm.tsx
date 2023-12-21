import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  FormData,
  FormDataValues,
  FormValidationSchema,
  defaultValueThirdPartyLicenseForm,
} from ".";
import {
  useGetSingleThirdPartyLicenseDataQuery,
  usePatchThirdPartyLicenceDataMutation,
  usePostThirdPartyLicenceDataMutation,
} from "@root/services/system-admin/third-party-licence/thirdPartyLicence";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { useEffect } from "react";

export const useThirdPartyLicenceTableForm = () => {
  const router = useRouter();

  const [postThirdPartyLicenceDataTrigger, postThirdPartyLicenceDataStatus] =
    usePostThirdPartyLicenceDataMutation();
  const [patchThirdPartyLicenceDataTrigger, patchThirdPartyLicenceDataStatus] =
    usePatchThirdPartyLicenceDataMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormValidationSchema),
    defaultValues: defaultValueThirdPartyLicenseForm(FormDataValues),
  });
  const { data, isSuccess } = useGetSingleThirdPartyLicenseDataQuery(
    {
      licenseId: router?.query?.id,
    },
    {
      skip: !!!router?.query?.id,
    }
  );

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  useEffect(() => {
    reset((formValues: any) => defaultValueThirdPartyLicenseForm(data?.data));
  }, [data?.data, isSuccess, reset]);
  // ----------- POST and PATCH Hanlder --------------- //
  const combinedPost_PatchFunction = async (data: any, apiTOHit: any) => {
    const apiDataParameter = {
      body: {
        ...data,
        ...(router?.query?.id && {
          id: router?.query?.id,
        }),
      },
    };
    try {
      const res: any = await apiTOHit(apiDataParameter).unwrap();
      router.push({
        pathname: router?.query?.id
          ? `/system-admin/manage-third-party-license/edit-third-party-license-form`
          : "/system-admin/manage-third-party-license",
        ...(router?.query?.id && {
          query: {
            action: "edit",
            id: router?.query?.id,
          },
        }),
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
    if (!!router?.query?.id) {
      combinedPost_PatchFunction(data, patchThirdPartyLicenceDataTrigger);
      return;
    }
    combinedPost_PatchFunction(data, postThirdPartyLicenceDataTrigger);
  };

  return {
    methods,
    FormData,
    handleSubmit,
    onSubmit,
  };
};
