import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useState } from "react";
import { addSystemConfigurationData } from ".";
import { usePostSystemConfigurationMutation } from "@root/services/system-admin/system-configuration/SystemConfigurationAPI";
import { enqueueSnackbar } from "notistack";

const useAddSystemConfiguration = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const todayDate = dayjs().format("MM/DD/YYYY");
  const [selectedDate, setSelectedDate] = useState("");

  const [postData] = usePostSystemConfigurationMutation();

  const defaultValues = {
    name: "",
    key: "",
    value: "",
    description: "",
    approver_name: "",
    approver_role: "",
    approver_date: new Date(),
  };

  const editSystemConfigurationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    key: Yup.string().required("Required"),
    value: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    approver_name: Yup.string().required("Required"),
    approver_role: Yup.string().required("Required"),
    approver_date: Yup.date().required("Required"),
  });

  const methods = useForm({
    resolver: yupResolver(editSystemConfigurationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (formData: any) => {
    const data = {
      name: formData.name,
      key: formData.key,
      value: formData.value,
      description: formData.description,
    };

    try {
      const resp = await postData(data);
      console.log(resp?.data?.message);

      resp?.error?.status === 400
        ? enqueueSnackbar(resp?.error?.data?.message ?? "Error occurred", {
            variant: "error",
          })
        : enqueueSnackbar(resp?.data?.message ?? "Successfully", {
            variant: "success",
          });
    } catch {}
  };

  const addSystemConfigurationFunction = addSystemConfigurationData();
  return {
    methods,
    handleSubmit,
    onSubmit,
    defaultValues,
    selectedDate,
    setSelectedDate,
    addSystemConfigurationFunction,
    openAddModel,
    setOpenAddModel,
    reset,
  };
};

export default useAddSystemConfiguration;
