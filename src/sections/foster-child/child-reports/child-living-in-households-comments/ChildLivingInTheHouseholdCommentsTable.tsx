import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumnsChildLivingInTheHouseholdsComments } from "./";
import { useGetLivingHouseholdReportTableApiQuery } from "@root/services/foster-child/child-reports/child-living-in-households-comments/ChildLivingHouseholdsCommentsApi";
import { useRouter } from "next/router";

export default function ChildLivingInTheHouseholdCommentsTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();

  const router = useRouter();
  const { fosterChildId } = router.query;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsChildLivingInTheHouseholdsComments(makePath);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetLivingHouseholdReportTableApiQuery({ params, fosterChildId });

  const report = data?.data?.house_hold_comments_info;
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
