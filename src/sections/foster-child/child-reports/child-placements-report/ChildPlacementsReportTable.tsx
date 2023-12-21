import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumnsChildPlacementsReport } from "./";
import { useRouter } from "next/router";
import { useGetPlacementReportTableApiQuery } from "@root/services/foster-child/child-reports/child-placements-report/ChildPlacementsReportApi";

export default function ChildPlacementsReportTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();

  const router = useRouter();
  const { fosterChildId } = router.query;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsChildPlacementsReport(makePath);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetPlacementReportTableApiQuery({ params, fosterChildId });

  const report = data?.data?.child_placement_report;
  const meta = data?.data?.meta;

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Child Placement Reports"
        searchKey="search"
        onChanged={headerChangeHandler}
      />

      <CustomTable
        data={report}
        columns={columns}
        showSerialNo
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
