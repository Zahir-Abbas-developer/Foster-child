import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useApiInventoryTable } from "./useApiInventoryTable";

const ApiInventoryTable = () => {
  const {
    columns,
    data,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    pageChangeHandler,
    sortChangeHandler,
  } = useApiInventoryTable();

  return (
    <>
      <CustomTable
        data={data?.data?.active}
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

export default ApiInventoryTable;
