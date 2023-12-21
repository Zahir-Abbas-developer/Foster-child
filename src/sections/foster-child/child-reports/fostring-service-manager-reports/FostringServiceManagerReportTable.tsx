import dayjs from "dayjs";
import React from "react";
import { useRouter } from "next/router";

import { Box, Card } from "@mui/material";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useFostringServiceManagerReportTable } from "./useFostringServiceManagerReportTable";
export const FostringServiceManagerReportTable = (props: any) => {
  const router = useRouter();
  const { fosterChildId } = props;
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useFostringServiceManagerReportTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.serviceManager,
      id: "serviceManager",
      cell: (info: any) => info.getValue(),
      header: () => <span>Fostring Service Manager</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dateOfReview,
      id: "dateOfReview",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Date of Review Meeting</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdDate,
      id: "createdDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdBy,
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/fostering-service-manager-report/${info.getValue()}/view`,
                query: { fosterChildId: fosterChildId },
              })
            }
          />
          <TableAction type="print" onClicked={() => window.print()} />
          <TableAction
            type="share"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/fostering-service-manager-report/${info.getValue()}/share`,
                query: { fosterChildId: fosterChildId },
              })
            }
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card>
        <TableHeader
          title="FOSTERING SERVICE MANAGER REPORT"
          searchKey="search"
          onChanged={headerChangeHandler}
        />
        <CustomTable
          showSerialNo
          data={data?.childReportlist}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={data?.meta?.page}
          totalPages={data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
};
