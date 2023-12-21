import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { editSystemConfigurationData } from ".";
import {
  useGetSystemConfigurationRecordDataQuery,
  useUpdateSystemConfigurationMutation,
} from "@root/services/system-admin/system-configuration/SystemConfigurationAPI";
import { enqueueSnackbar } from "notistack";

const useEditSystemConfiguration = (props: any) => {
  const { systemConfigurationData, setOpenEditModel } = props;

  const todayDate = dayjs().format("MM/DD/YYYY");
  const [selectedDate, setSelectedDate] = useState("");

  const defaultValues = {
    name: systemConfigurationData?.name,
    key: systemConfigurationData?.key,
    value: systemConfigurationData?.value,
    description: systemConfigurationData?.description,
    approver_name: systemConfigurationData?.approver_name,
    approver_role: systemConfigurationData?.approver_role,
    approver_date: systemConfigurationData?.approver_date,
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

  const methods: any = useForm({
    resolver: yupResolver(editSystemConfigurationSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;
  //Api handler
  const [updateSystemConfiguration] = useUpdateSystemConfigurationMutation();
  const onSubmit = (data: any) => {
    updateSystemConfiguration({
      body: { ...data },
    })
      .unwrap()
      .then((data) => {
        enqueueSnackbar("Information Updated Successfully", {
          variant: "success",
        });
        setOpenEditModel(false);
        reset();
      })
      .catch((error: { data: { message: any } }) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        reset();
      });
  };

  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...systemConfigurationData,
      approver_date: systemConfigurationData
        ? new Date(systemConfigurationData?.approved_at)
        : new Date(),
    }));
  }, [systemConfigurationData, reset]);

  const editSystemConfigurationFunction = editSystemConfigurationData(
    systemConfigurationData
  );
  return {
    methods,
    handleSubmit,
    onSubmit,
    defaultValues,
    selectedDate,
    setSelectedDate,
    editSystemConfigurationFunction,
    reset,
  };
};

export default useEditSystemConfiguration;
