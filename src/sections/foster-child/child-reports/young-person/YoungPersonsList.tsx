import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";
import { useYoungPersonsList } from "./useYoungPersonsList";

const YoungPersonsList = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    youngPersonReportsTableColumns,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useYoungPersonsList();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title="Young Person living in the Household's comments"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={data?.data?.young_person_household_comments}
        columns={youngPersonReportsTableColumns}
        isLoading={isLoading}
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
};

export default YoungPersonsList;
