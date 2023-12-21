import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetChildImmunisationReportsListQuery } from "@root/services/foster-child/child-records/child-immunisation-reports/ChildImmunisationReportsApi";
import useChildImmunisationReports from "./useChildImmunisationReports";
const activepath =
  "/foster-child/child-reports/child-immunisation-details-report/actions";
const ChildImmunisationReportsTable = (props: any) => {
  const { fosterChildId } = props;
  //STATES
  const [search, setsearch] = useState("");
  const { deleteHander } = useChildImmunisationReports({
    fosterChildId: fosterChildId,
  });
  //TABLES COLUMNS
  const columns = [
    {
      accessorFn: (row: any) => row.fosterChildName,
      id: "childName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Child Name</span>,
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row.dateTimeOfOccurence,
      id: "dateTimeOfOccurence",
      cell: (info: any) =>
        dayjs(info.getValue()).format("hh:mm :: YYYY-MM-DD") ?? "-",
      header: () => <span>Date / Time of Occurence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.type,
      id: "immunisationType",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Immunisation Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdAt,
      id: "createdDate",
      cell: (info: any) => dayjs(info.getValue()).format("YYYY-MM-DD") ?? "-",
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: "createdBY",
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
            {/* <DeletePrompt
              onDeleteClick={() => deleteHander(info.row.original.id)}
            />

            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "edit",
                    ChildImmunisationReportID: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            /> */}
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "view",
                    ChildImmunisationReportID: info.row.original.id,
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
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  //API HANDLERS
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetChildImmunisationReportsListQuery({
      params: {
        fosterChildId: fosterChildId,
        search,
        ...params,
      },
    });

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="CHILD IMMUNISATION REPORTS"
                  searchKey="search"
                  showAddBtn={false}
                  onChanged={(e: any) => {
                    setsearch(e.search);
                  }}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", fosterChildId: fosterChildId },
                    });
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

export default ChildImmunisationReportsTable;
