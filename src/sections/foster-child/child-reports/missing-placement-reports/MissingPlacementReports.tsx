import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";
import { useMissingPlacementList } from "./useMissingPlacementReports";

const MissingPlacementList = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    missingPlacementReportsTableColumns,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useMissingPlacementList();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        title="Child Missing Placement Reports"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={data?.data?.child_missing_placement_report}
        columns={missingPlacementReportsTableColumns}
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

export default MissingPlacementList;
