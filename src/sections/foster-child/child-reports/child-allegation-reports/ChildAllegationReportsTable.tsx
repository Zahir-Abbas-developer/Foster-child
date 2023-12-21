import { useRouter } from "next/router";
import React from "react";

import { Box, Card } from "@mui/material";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useChildAllegationReportsTable } from "./useChildAllegationReportsTable";
import dayjs from "dayjs";
export const ChildAllegationReportsTable = (props: any) => {
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
  } = useChildAllegationReportsTable();

  console.log(data);

  const columns = [
    {
      accessorFn: (row: any) => row?.caseId,
      id: "caseId",
      cell: (info: any) => info.getValue(),
      header: () => <span>Case ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.allegationDate,
      id: "allegationDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY - HH:MM"),
      header: () => <span>Date / Time of Occurence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.allegationAgainstPerson,
      id: "allegationAgainstPerson",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.allegationAgainstPersonCategory,
      id: "allegationAgainstPersonCategory",
      cell: (info: any) => info.getValue(),
      header: () => <span>Allegation Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.allegationDetails,
      id: "allegationDetails",
      cell: (info: any) => info.getValue(),
      header: () => <span>Allegation Description</span>,
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
                pathname: `/foster-child/child-reports/child-allegations-report/${info.getValue()}/view`,
                query: { fosterChildId: fosterChildId },
              })
            }
          />
          <TableAction type="print" onClicked={() => window.print()} />
          <TableAction
            type="share"
            onClicked={() =>
              router.push({
                // pathname: `/foster-child/child-reports/child-allegations-report/${info.getValue()}/share`,
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

  console.log(data?.data?.child_allegation_reports);

  return (
    <>
      <Card>
        <TableHeader
          title="ALLEGATION REPORT"
          searchKey="search"
          onChanged={headerChangeHandler}
        />
        <CustomTable
          showSerialNo
          data={data?.data?.child_allegation_reports}
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
