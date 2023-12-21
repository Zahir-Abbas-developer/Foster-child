import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { columns } from ".";
import { useArchiveSettings } from "./useArchiveSettings";

const ArchiveSettings = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    theme,
    router,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useArchiveSettings();

  return (
    <Card sx={{ padding: "19px 10px 10px 10px" }}>
      <>
        <TableHeader
          title="Backup and Archive Settings"
          onChanged={headerChangeHandler}
        />
        {/* table body start here */}
        <CustomTable
          showSerialNo
          data={data?.data?.backups}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          isPagination={true}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          rootSX={{ my: theme.spacing(2) }}
        />
      </>
    </Card>
  );
};

export default ArchiveSettings;
