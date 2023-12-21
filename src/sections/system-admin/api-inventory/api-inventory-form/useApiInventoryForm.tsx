import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormData, defaultValues, formSchema, formatters } from ".";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
import {
  useLazyGetApiInventoryByIdQuery,
  usePutApiInventoryMutation,
  usePostApiInventoryMutation,
} from "@root/services/system-admin/ApiInventoryAPI";
import { useState } from "react";

export const useInventoryTableForm = () => {
  const router = useRouter();
  const { action, id } = router.query;
  const [getApiInventoryById] = useLazyGetApiInventoryByIdQuery();
  const [postApiInventory] = usePostApiInventoryMutation();
  const [putApiInventory] = usePutApiInventoryMutation();
  const [isLoading, setIsLoading] = useState(true);
  const getDefaultValue = async () => {
    if (action === "edit" || action === "view") {
      const { data, isError } = await getApiInventoryById({ apiInventoryId: id });
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
      parseDatesToTimeStampByKey(responseData);

      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };
  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });

  const onSubmit = async (data: any) => {
    if (action === "add") {
      
      postApiInventory({ formData: { ...data } })
        .unwrap()
        .then((res: any) => {
          
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/system-admin/api-inventory",
          });
        })
        .catch((error: any) => {
          
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
     
      putApiInventory({ formData: { ...data, id } })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/system-admin/api-inventory",
          });
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else {
      return null;
    }
  };
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  return {
    methods,
    FormData,
    handleSubmit,
    isSubmitting,
    onSubmit,
    action,isLoading
  };
};
