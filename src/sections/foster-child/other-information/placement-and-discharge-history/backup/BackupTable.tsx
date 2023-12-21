import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { Fragment, useRef, useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useRouter } from "next/router";
import { getColumnsBackup } from "./";
import DeleteModel from "@root/components/modal/DeleteModel";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteBackupByIdMutation,
  useGetBackupListQuery,
} from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";

export default function BackupTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();
  const router = useRouter();

  const [open, setOpen] = useState<any>(false);

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsBackup(makePath, setOpen);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetBackupListQuery({ params });

  const backupData = data?.Backup_Carer_details;
  const meta = data?.meta;

  const [deleteReview] = useDeleteBackupByIdMutation();

  return (
    <Fragment>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Backup Carer Placement / Discharge"
        searchKey="search"
        onChanged={headerChangeHandler}
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/foster-child/other-information/placement-and-discharge-history/add/backup",
            })
          );
        }}
      />

      <CustomTable
        data={backupData}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />

      <DeleteModel
        open={!!open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {
          deleteReview(open);
          enqueueSnackbar("Backup deleted successfully!", {
            variant: "success",
          });
          setOpen(false);
        }}
      />
    </Fragment>
  );
}
