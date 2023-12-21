import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  defaultValueRejectionForm,
  formSchema,
  initialValues,
  rejectionPlacementFormDataFunction,
} from ".";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useGetSingleRejectedPlacementDataQuery,
  usePatchRejectionPlacementDataMutation,
  usePostRejectionPlacementDataMutation,
} from "@root/services/matching-and-placement/placement/rejectionsPlacement";
import { useEffect } from "react";
import { useTheme } from "@mui/material";

export const useRejectionForm = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const rejectionPlacementFormData = rejectionPlacementFormDataFunction(
    router?.query?.action === "view"
  );

  const [postRejectionDataTrigger, postRejectionDataStatus] =
    usePostRejectionPlacementDataMutation();
  const [patchRejectionDataTrigger, patchRejectionDataStatus] =
    usePatchRejectionPlacementDataMutation();

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: defaultValueRejectionForm(initialValues),
  });

  const { data, isLoading } = useGetSingleRejectedPlacementDataQuery(
    {
      id: router?.query?.id,
    },
    {
      skip: !!!router?.query?.id,
      refetchOnMountOrArgChange: true,
    }
  );
  console.log("data?.data", data?.data);

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => defaultValueRejectionForm(data?.data));
  }, [data?.data, reset]);

  // ----------- POST and PATCH Hanlder --------------- //
  const combinedPost_PatchFunction = async (data: any, apiTOHit: any) => {
    const apiDataParameter = {
      body: {
        ...data,
        ...(router?.query?.id && {
          id: router?.query?.id,
        }),
      },
      ...(router?.query?.id && {
        id: router?.query?.id,
      }),
    };
    try {
      const res: any = await apiTOHit(apiDataParameter).unwrap();
      router.push({
        pathname: "/placement/rejections",
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
    function whoRejectedFn(array: any, allOptions: any) {
      let whoRejectedObj: any = {};
      for (const option of allOptions) {
        whoRejectedObj[option] = array?.includes(option);
      }
      return whoRejectedObj;
    }

    const formData = {
      ...data,
      whoRejected: whoRejectedFn(data?.whoRejected, [
        "Child",
        "Carer",
        "lA_SSW",
        "SSW",
      ]),
    };

    console.log(formData);

    if (!!router?.query?.id) {
      combinedPost_PatchFunction(formData, patchRejectionDataTrigger);
      return;
    }
    combinedPost_PatchFunction(formData, postRejectionDataTrigger);
  };
  return {
    router,
    rejectionPlacementFormData,
    methods,
    theme,
    handleSubmit,
    onSubmit,
    patchRejectionDataStatus,
    postRejectionDataStatus,
    isLoading,
  };
};
