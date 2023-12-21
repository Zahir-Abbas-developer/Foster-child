import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef } from "react";
import { getAuditTrailsAndLogsColumns } from "./";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAuditLogsListQuery } from "@root/services/system-admin/audit-trails-and-audit-logs/AuditLogsApi";

const AuditLogs = () => {
  const tableHeaderRef = useRef<any>();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // const [open, setOpen] = useState<any>(false);

  const columns = getAuditTrailsAndLogsColumns();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAuditLogsListQuery({ params });

  const audits = data?.data?.logs;
  const meta = data?.data?.meta;

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={false}
        title="Foster Carer(s)"
        searchKey="search"
        onChanged={headerChangeHandler}
      />

      <CustomTable
        data={audits}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
      {/* <DeleteModel
        open={!!open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {
          // deleteAudit(open);
          enqueueSnackbar("Audit deleted successfully!", {
            variant: "success",
          });
          setOpen(false);
        }}
      /> */}
    </Card>
  );
};

export default AuditLogs;
