import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  defaultValueManageFaqsForm,
  manageFaqsFormFieldsFunction,
  manageFaqsFormSchema,
} from ".";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import {
  useGetSingleManageFaqsDataQuery,
  usePostManageFaqsDataMutation,
  usePutManageFaqsDataMutation,
} from "@root/services/system-admin/manage-faqs/manageFaqs";
import { useTheme } from "@mui/material";

export const useAddFormModal = (props: any) => {
  const { FaqsCategories, onClose } = props;
  const theme: any = useTheme();

  const router = useRouter();
  const [postManageFaqsDataTrigger, postManageFaqsDataStatus] =
    usePostManageFaqsDataMutation();

  const [putManageFaqsDataTrigger, putManageFaqsDataStatus] =
    usePutManageFaqsDataMutation();

  // get api params
  const pathParams = {
    faqId: router.query?.id,
  };
  const apiDataParameter = { pathParams };
  const singleData = useGetSingleManageFaqsDataQuery(apiDataParameter, {
    skip: !!!router.query?.id,
  });
  const methods: any = useForm({
    resolver: yupResolver(manageFaqsFormSchema),
    defaultValues: defaultValueManageFaqsForm(),
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(() => defaultValueManageFaqsForm(singleData?.data?.data));
  }, [singleData?.data, reset]);
  const manageFaqsFormFields = manageFaqsFormFieldsFunction(FaqsCategories);

  const submitManageFaqsDataForm = async (data: any) => {
    if (!!router.query?.id) {
      putManageFaqsDataForm(data);
      return;
    }
    const queryParams = {
      statutoryMedicalType: router.query?.type,
      ...(router?.query?.fosterChildId && {
        fosterChildId: router?.query?.fosterChildId,
      }),
    };
    const apiDataParameter = { queryParams, body: data };
    try {
      const res: any = await postManageFaqsDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/system-admin/manage-FAQs`,
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      onClose?.();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const putManageFaqsDataForm = async (data: any) => {
    const putData = {
      id: router?.query?.id,
      ...data,
    };
    const apiDataParameter = { body: putData };
    try {
      const res: any = await putManageFaqsDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/system-admin/manage-FAQs`,
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      onClose?.();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    methods,
    handleSubmit,
    router,
    manageFaqsFormFields,
    submitManageFaqsDataForm,
    postManageFaqsDataStatus,
    putManageFaqsDataStatus,
    theme,
    singleData,
  };
};
