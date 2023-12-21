import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef } from "react";
import { useRespitePlacementsTable } from "./useRespitePlacementsTable";

const RespitePlacementsTable = () => {
  const {
    tableHeaderRefTwo,
    annualReviewListIsloading,
    annualReviewData,
    annualReviewListIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  } = useRespitePlacementsTable();

  const columns = [
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.childCode ?? "-",
      id: "childCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Code</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.age ?? "-",
      id: "age",
      cell: (info: any) => info.getValue(),
      header: () => <span>Age</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.athnicity ?? "-",
      id: "ethnicity",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ethnicity</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.legalStatus ?? "-",
      id: "legalStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Legal Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.placementType ?? "-",
      id: "placementType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.PlacementDate ?? "-",
      id: "placementDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.respitePlacements?.dischargeDate ?? "-",
      id: "dischangeDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Dischange Date</span>,
      isSortable: true,
    },
  ];
  return (
    <Box sx={{ mt: 3 }}>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Respite Placements"
        onChanged={(e: any) => {
          setSearch(e.search);
        }}
      />
      <CustomTable
        data={annualReviewData}
        columns={columns}
        isLoading={annualReviewListIsloading}
        isFetching={annualReviewListIsfetching}
        isError={annualReviewListError}
        isSuccess={annualReviewListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Box>
  );
};

export default RespitePlacementsTable;
