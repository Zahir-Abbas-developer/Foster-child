import { useRouter } from "next/router";
import React from "react";

import { Box, Card } from "@mui/material";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useReviewOfficerReportsTable } from "./useReviewOfficerReportsTable";
export const ReviewOfficerReportsTable = (props: any) => {
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
  } = useReviewOfficerReportsTable();

  console.log(data);

  const columns = [
    {
      accessorFn: (row: any) => row?.fosterCarerName,
      id: "fosterCarerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dateOfReviewMeeting,
      id: "dateOfReviewMeeting",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Review Meeting</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.present?.reviewingOfficer,
      id: "reviewingOfficer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reviewing Officer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.present?.supervisingSocialWorker,
      id: "supervisingSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.present?.fosterCarers,
      id: "fosterCarers",
      cell: (info: any) => info.getValue(),
      header: () => <span>{`Foster Career's`}</span>,
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
                pathname: `/foster-child/child-reports/review-officer-reports/${info.getValue()}/view`,
                query: { fosterChildId: fosterChildId },
              })
            }
          />
          <TableAction type="print" onClicked={() => window.print()} />
          <TableAction
            type="share"
            onClicked={() =>
              router.push({
                // pathname: `/foster-child/child-reports/review-officer-reports/${info.getValue()}/share`,
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

  console.log(data?.reviewing_officer_reports);

  return (
    <>
      <Card>
        <TableHeader
          title="REVIEWING OFFICER REPORTS"
          searchKey="search"
          onChanged={headerChangeHandler}
        />
        <CustomTable
          showSerialNo
          data={data?.data?.reviewing_officer_reports}
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
