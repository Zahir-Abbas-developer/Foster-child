import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { Fragment, useRef, useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useRouter } from "next/router";
import { getColumnsDischarge } from "./";
import DeleteModel from "@root/components/modal/DeleteModel";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteDischargeByIdMutation,
  useGetDischargeListQuery,
} from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";

export default function DischargeTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();
  const router = useRouter();

  const [open, setOpen] = useState<any>(false);

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = getColumnsDischarge(makePath, setOpen);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetDischargeListQuery({ params });

  const dischargeData = data?.placement_details;
  const meta = data?.meta;

  const [deleteReview] = useDeleteDischargeByIdMutation();

  return (
    <Fragment>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Placement / Discharge"
        searchKey="search"
        onChanged={headerChangeHandler}
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/foster-child/other-information/placement-and-discharge-history/add/discharge",
            })
          );
        }}
      />

      <CustomTable
        data={dischargeData}
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
          enqueueSnackbar("Discharge deleted successfully!", {
            variant: "success",
          });
          setOpen(false);
        }}
      />
    </Fragment>
  );
}
