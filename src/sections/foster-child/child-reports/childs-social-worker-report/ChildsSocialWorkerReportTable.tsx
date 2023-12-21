import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumnsChildSocialWorkerReport } from "./";
import { useRouter } from "next/router";
import { useGetSocialWorkerReportTableApiQuery } from "@root/services/foster-child/child-reports/childs-social-worker-report/ChildSocialWorkerReportApi";

export default function ChildsSocialWorkerReportTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();

  const router = useRouter();
  const { fosterChildId } = router.query;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsChildSocialWorkerReport(makePath);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetSocialWorkerReportTableApiQuery({ params, fosterChildId });

  const report = data?.data?.child_social_workers_report;
  const meta = data?.data?.meta;

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Child Social Worker"
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
