import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { systemConfigurationTableFunction } from ".";
import {
  useDeleteSystemConfigurationListMutation,
  useGetSystemConfigurationListQuery,
  useGetSystemConfigurationRecordDataQuery,
} from "@root/services/system-admin/system-configuration/SystemConfigurationAPI";
import { useState } from "react";

const useConfiguration = () => {
  const [openEditModel, setOpenEditModel] = useState(false);
  
  const [systemConfigurationData, setSystemConfigurationData] = useState(null);
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetSystemConfigurationListQuery(params);

    console.log(data);
    

  const [deleteSystemConfigurationRecord] =
    useDeleteSystemConfigurationListMutation();
   

  const deleteSystemConfiguration = (id: string) => {
    const deleteRecord = {
      configId: id,
    };

    deleteSystemConfigurationRecord(deleteRecord);
  };

  const systemConfigurationColoums = systemConfigurationTableFunction({
    router,
    setOpenEditModel,
    deleteSystemConfiguration,
    setSystemConfigurationData,
  });

  return {
    data,

    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    systemConfigurationColoums,
    openEditModel,
    setOpenEditModel,
    systemConfigurationData,
    setSystemConfigurationData,
    isSuccess,
    isError,
    isLoading,
    isFetching,
  };
};

export default useConfiguration;
