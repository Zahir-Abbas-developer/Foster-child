import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  defaultValuesDischargePlacement,
  dischargePlacementFormDataFunction,
  dischargePlacementFormSchema,
  initialValuesDischargePlacement,
} from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useGetSingleDischargePlacementDataQuery,
  useLazyGetAllDischargePlacementDataQuery,
  useLazyGetAllFosterCarerListQuery,
  useLazyGetAllFosterChildListsQuery,
  usePatchDischargePlacementDataMutation,
  usePostDischargePlacementDataMutation,
} from "@root/services/matching-and-placement/placement/discharge-placement/dischargePlacement";
import { useLazyGetAllAllegationListDataQuery } from "@root/services/foster-child/events-and-notification/allegation/allegationInfo";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";

// ===================================================

export const useChildDischargeForm = () => {
  let theme = useTheme();
  const router = useRouter();
  const [fosterChildTrigger, fosterChildStatus]: any =
    useLazyGetAllFosterChildListsQuery();
  const queryParams = {
    offset: 0,
    limit: 10,
  };
  const [fosterCarerTrigger, fosterCarerStatus]: any =
    useLazyGetAllFosterCarerListQuery();
  const dischargePlacementFormData = dischargePlacementFormDataFunction(
    fosterChildTrigger,
    fosterCarerTrigger,
    fosterChildStatus,
    fosterCarerStatus,
    queryParams
  );
  const [postDischargePlacementDataTrigger, postDischargePlacementDataStatus] =
    usePostDischargePlacementDataMutation();

  const [
    patchDischargePlacementDataTrigger,
    patchDischargePlacementDataStatus,
  ] = usePatchDischargePlacementDataMutation();

  const methods: any = useForm({
    resolver: yupResolver(dischargePlacementFormSchema),
    defaultValues: defaultValuesDischargePlacement(),
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const pathParams = {
    id: router.query?.id,
  };

  const apiDataParameter = { pathParams };
  const { data, isLoading } = useGetSingleDischargePlacementDataQuery(
    apiDataParameter,
    {
      skip: !!!router?.query?.id,
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    reset(() => defaultValuesDischargePlacement(data?.data));
  }, [data?.data, reset]);

  const submitDischargePlacementInfoForm = async (data: any) => {
    const bodyFormData = new FormData();
    Object.entries(data).map(([k, v]: any) =>
      ["childName", "carerName"].includes(k)
        ? bodyFormData.append(k, v?.name)
        : bodyFormData.append(k, v)
    );
    // const body = {
    //   fosterChildId: router?.query?.fosterChildId,
    //   ...data,
    // };

    const pathParams = {
      fosterChildId:
        router?.query?.fosterChildId || "0887f19a-e5df-4d41-b4be-b530a1f816c4",
    };
    const apiDataParameter = { body: bodyFormData, pathParams };
    if (!!router?.query?.id) {
      patchDischargePlacementInfoForm(data);
      return;
    }
    try {
      const res: any = await postDischargePlacementDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/placement/discharge`,
        query: {
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });

      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };

  const patchDischargePlacementInfoForm = async (data: any) => {
    const pathParams = {
      id: router?.query?.id,
    };
    // const body = {
    //   fosterChildId: router?.query?.fosterChildId,
    //   ...data,
    // };
    const bodyFormData = new FormData();
    Object.entries(data).map(([k, v]: any) =>
      ["childName", "carerName"].includes(k)
        ? bodyFormData.append(k, v?.name)
        : bodyFormData.append(k, v)
    );
    const apiDataParameter = { body: bodyFormData, pathParams };
    try {
      const res: any = await patchDischargePlacementDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/placement/discharge`,
        query: {
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message || `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };
  return {
    theme,
    router,
    handleSubmit,
    methods,
    isSubmitting,
    dischargePlacementFormData,
    isLoading,
    submitDischargePlacementInfoForm,
  };
};
