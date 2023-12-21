import { Box, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useChildOohReportTable } from "./useChildOohReportTable";
import dayjs from "dayjs";

const ChildOohReportTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    childReportListIsloading,
    childReportData,
    childReportListIsfetching,
    childReportListError,
    childReportListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    fosterChildId,
  } = useChildOohReportTable();

  const columns = [
    {
      accessorFn: (row: any) => row.fosterChildName ?? "-",
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateTime ?? "-",
      id: "occurance",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date/Time of Occurance</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "childStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdAt ?? "-",
      id: "createdDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdBy ?? "-",
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-reports/child-ooh-report/view-child-reports",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          <TableAction size="small" type="print" />
          <TableAction size="small" type="share" />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Paper
        elevation={2}
        sx={{ borderRadius: "8px", p: { xs: 0.7, md: 1.5 } }}
      >
        <TableHeader
          ref={tableHeaderRefTwo}
          title=" CHILD OOH REPORTS"
          searchKey="search"
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          showAddBtn={false}
          onAdd={() => {
            router.push({
              pathname:
                "/foster-child/child-reports/child-ooh-report/view-child-reports",
              query: { action: "add", fosterChildId: fosterChildId },
            });
          }}
        />
        <CustomTable
          data={childReportData}
          columns={columns}
          isLoading={childReportListIsloading}
          isFetching={childReportListIsfetching}
          isError={childReportListError}
          isSuccess={childReportListIsSuccess}
          showSerialNo={true}
          totalPages={meta?.pages ?? 0}
          currentPage={meta?.page ?? 1}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Paper>
    </>
  );
};

export default ChildOohReportTable;
