import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { Fragment, useRef, useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useRouter } from "next/router";
import { getColumnsTransfer } from "./";
import DeleteModel from "@root/components/modal/DeleteModel";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteTransferByIdMutation,
  useGetTransferListQuery,
} from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";

export default function TransferTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();
  const router = useRouter();

  const [open, setOpen] = useState<any>(false);

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsTransfer(makePath, setOpen);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetTransferListQuery({ params });

  const transferData = data?.placement_details;
  const meta = data?.meta;

  const [deleteReview] = useDeleteTransferByIdMutation();

  return (
    <Fragment>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Placement / Transfer"
        searchKey="search"
        onChanged={headerChangeHandler}
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/foster-child/other-information/placement-and-discharge-history/add/transfer",
            })
          );
        }}
      />

      <CustomTable
        data={transferData}
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
          enqueueSnackbar("Transfer deleted successfully!", {
            variant: "success",
          });
          setOpen(false);
        }}
      />
    </Fragment>
  );
}
