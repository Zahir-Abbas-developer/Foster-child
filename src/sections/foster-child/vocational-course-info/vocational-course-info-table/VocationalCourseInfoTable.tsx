import React, { useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useVocationalInfoByIdQuery } from "@root/services/foster-child/vocational-info-list/VocationalInfoListApi";

export default function VocationalCourseInfoTable(props: any) {
  const {
    tableData,
    meta,
    title,
    searchedText,
    apiStatus,
    onPageChange,
    route,
    onDelete,
  } = props;

  const router = useRouter();

  const [open, setOpen] = useState<any>(false);
  const id = router?.query?.fosterChildId;

  // '1b95216c-6856-4380-a2e4-cc6688ae4f9a'

  const columns = [
    {
      accessorFn: (row: any) => row["courseType"],
      id: "courseType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Type</span>,
    },
    {
      accessorFn: (row: any) => row["duration"],
      id: "duration",
      cell: (info: any) => info.getValue(),
      header: () => <span>Duration</span>,
    },
    {
      accessorFn: (row: any) => row["qualification"],
      id: "qualification",
      cell: (info: any) => info.getValue(),
      header: () => <span>Qualification</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => {
              setOpen(info.row.original);
              console.log("delete this", info.row.original);
            }}
            size="small"
          />
          <TableAction
            type="edit"
            onClicked={() => {
              router.push(
                `/foster-child/education-records/vocational-course-info/details?fosterChildId=${id}&recordId=${info?.row?.original?.id}`
              );
            }}
            size="small"
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/vocational-course-info/details?fosterChildId=${id}&recordId=${info?.row?.original?.id}&view=true`
              )
            }
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <>
      <DeleteModel
        open={!!open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {
          onDelete(open);
          setOpen(false);
        }}
      />
      <TableHeader
        title={"Vocational Course Info"}
        onChanged={searchedText}
        showAddBtn={true}
        onAdd={() => router.push(route)}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={apiStatus?.isLoading}
        isFetching={apiStatus?.isFetching}
        isError={apiStatus?.isError}
        isSuccess={apiStatus?.isSuccess}
        showSerialNo
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={onPageChange}
      />
    </>
  );
}
