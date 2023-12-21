import { Box, Button, Card } from "@mui/material";
import useConfiguration from "./useConfiguration";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import EditSystemConfiguration from "./edit-system-configuration/EditSystemConfiguration";
import IsFetching from "@root/components/loaders/IsFetching";
import AddSystemConfiguration from "./add-system-configuration/AddSystemConfiguration";
import useAddSystemConfiguration from "./add-system-configuration/useAddSystemConfiguration";
import useEditSystemConfiguration from "./edit-system-configuration/useEditSystemConfiguration";

export default function Configuration() {
  const {
    data,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    systemConfigurationColoums,
    openEditModel,
    setOpenEditModel,
    systemConfigurationData,
    setSystemConfigurationData,
  } = useConfiguration();
  const { openAddModel, reset } = useAddSystemConfiguration();
  const EditHandler = useEditSystemConfiguration({});
  return (
    <>
      <EditSystemConfiguration
        openEditModel={openEditModel}
        setOpenEditModel={setOpenEditModel}
        systemConfigurationData={systemConfigurationData}
        setSystemConfigurationData={setSystemConfigurationData}
      />

      <Card>
        <TableHeader title="System Configuration" searchKey="search" />
        <Box px={0}>
          <CustomTable
            columns={systemConfigurationColoums}
            data={data?.data}
            onSortByChange={sortChangeHandler}
            isSuccess={isSuccess}
            isError={isError}
            isFetching={isFetching}
            isLoading={isLoading}
            isPagination={false}
          />
        </Box>

        <AddSystemConfiguration />
      </Card>
    </>
  );
}
