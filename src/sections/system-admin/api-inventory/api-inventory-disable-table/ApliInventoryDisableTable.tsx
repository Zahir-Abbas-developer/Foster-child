import React from "react";
import { useApliInventoryDisableTable } from "./useApliInventoryDisableTable";
import CustomTable from "@root/components/Table/CustomTable";

const ApliInventoryDisableTable = () => {
  const {
    columns,
    data,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    pageChangeHandler,
    sortChangeHandler,
  } = useApliInventoryDisableTable();
  return (
    <>
      <CustomTable
        data={data?.data?.disabled}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default ApliInventoryDisableTable;
