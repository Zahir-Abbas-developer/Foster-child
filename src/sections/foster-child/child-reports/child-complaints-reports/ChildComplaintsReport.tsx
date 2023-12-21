import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";
import { useChildComplaintsReport } from "./useChildComplaintsReport";

const ComplaintsReportLists = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    router,
    complaintReportsTableColumns,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useChildComplaintsReport();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title="Sanction Details List"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={data?.data}
        columns={complaintReportsTableColumns}
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

export default ComplaintsReportLists;
