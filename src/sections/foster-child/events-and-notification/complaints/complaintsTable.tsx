import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import router from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { Dummy } from ".";
import { useGetComplaintsListQuery } from "@root/services/foster-child/events-and-notification/complaints/Complaints";
import useComplaintsFrom from "./useComplaintsFrom";
const activepath = "/foster-child/events-and-notification/complaints/actions";
interface IComplaintsProps {
  fosterChildId: string;
}
const ComplaintsTable = (props: IComplaintsProps) => {
  const { fosterChildId } = props;
  //STATES
  const [search, setsearch] = useState("");
  const { deleteHander } = useComplaintsFrom({
    fosterChildId: fosterChildId,
  });
  //TABLES COLUMNS
  const columns = [
    {
      accessorFn: (row: any) => row.dateofComplaints,
      id: "dateofComplaints",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: () => <span>Date of Complaints</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "Status",
      cell: (info: any) => <Box>{info.getValue() ?? "-"}</Box>,
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
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
                    complaintsId: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "view",
                    complaintsId: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
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
    useGetComplaintsListQuery({
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
                  title="Complaints"
                  searchKey="search"
                  showAddBtn
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
                data={data?.data?.cc_complaint_info ?? []}
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

export default ComplaintsTable;
