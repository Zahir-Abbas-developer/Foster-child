import { Box, Card } from "@mui/material";
import React from "react";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { useFosteredYoungPersonsCommentsTable } from "./useFosteredYoungPersonsCommentsTable";
import dayjs from "dayjs";

export default function FosteredYoungPersonsCommentTable() {
  const {
    router,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    // postData,
    sortChangeHandler,
  } = useFosteredYoungPersonsCommentsTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.fosteredPersonName,
      id: "fosteredPersonName",
      cell: (info: any) => info.getValue(),
      header: "Name Fostered Young Person (DOB)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.supervisingSocialWorker,
      id: "supervisingSocialWorker",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Supervising Social Worker",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Foster Carer(s)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdAt,
      id: "createdAt",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Created Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.principalName,
      id: "principalName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Created By",
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* Can move it outside of the table if need arises */}

          <TableAction
            type="view"
            onClicked={() => {
              router.push({
                pathname:
                  "/foster-child/child-reports/fostered-young-persons-comments/view-fostered-young-persons-comments",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: router?.query?.fosterChildId,
                },
              });
            }}
            size="small"
          />
          <TableAction
            type="print"
            onClicked={() => {
              //   setOpen(true);
              //   setId(info.row.original);
            }}
            size="small"
          />
          <TableAction
            type="share"
            onClicked={() => {
              //   setOpen(true);
              //   setId(info.row.original);
            }}
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        disabled={isLoading}
        title="Fostered Young Persons Comments"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page ?? "1"}
        totalPages={meta?.pages ?? "1"}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
