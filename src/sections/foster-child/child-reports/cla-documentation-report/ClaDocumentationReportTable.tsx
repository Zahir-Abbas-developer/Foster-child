import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import router from "next/router";
import dayjs from "dayjs";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetClaDocumentationReportsListQuery } from "@root/services/foster-child/child-reports/cla-documentation-report/ClaDocumentationReportAPI";
const activepath =
  "/foster-child/child-reports/cla-documentation-report/actions";
const ClaDocumentationReportTable = (props: any) => {
  const { fosterChildId } = props;

  //STATES
  const [search, setsearch] = useState("");

  const columns = [
    {
      accessorFn: (row: any) => row.fosterChildName,
      id: "fosterChildName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdAt,
      id: "createdAt",
      cell: (info: any) =>
        dayjs(info.getValue()).format("YYYY-MM-DD :: hh:mm ") ?? "-",
      header: () => <span>Date / Time of Occurence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ChildStatus,
      id: "ChildStatus",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Child Status</span>,
      isSortable: true,
    },
    {
      //
      accessorFn: (row: any) => row.createdAt,
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("YYYY-MM-DD") ?? "-",
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: "createdBy",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span> Created By</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={0.5}
          >
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "view",
                    id: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
            <TableAction size="small" type="print" />
            <TableAction size="small" type="share" />
          </Box>
        );
      },
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  //TABLE PAGE HANDELRS
  const { pageChangeHandler, sortChangeHandler, params } = useTableParams();
  //API HANDLERS
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetClaDocumentationReportsListQuery({
      params: {
        search,
        ...params,
      },
      fosterChildId: fosterChildId,
    });
  console.log("testing", data?.data);
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="CLA DOCUMENTATION"
                  searchKey="search"
                  onChanged={(e: any) => {
                    setsearch(e.search);
                  }}
                />
              </Box>
              <CustomTable
                data={data?.data ?? []}
                columns={columns}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                isSuccess={isSuccess}
                isPagination={true}
                showSerialNo={true}
                totalPages={data?.data?.meta?.pages ?? 0}
                currentPage={data?.data?.meta?.page ?? 1}
                onPageChange={pageChangeHandler}
                onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClaDocumentationReportTable;
