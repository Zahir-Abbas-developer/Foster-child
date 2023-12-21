import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const getColumnsChildLivingInTheHouseholdsComments = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.childName ?? "-",
      id: "childName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Child's Name (DOB)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.socialWorker ?? "-",
      id: "socialWorker",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Supervising Social Worker",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.fosterCarers ?? "-",
      id: "fosterCarers",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Foster Carer(s)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dob ?? "-",
      id: "dob",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date of Birth",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdAt ?? "-",
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Created Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "id",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/child-reports/child-living-in-households-comments/view-child-living-in-the-households-comments",
                  queryParams: { childCommentsId: info.getValue() },
                })
              )
            }
          />
          <TableAction type="print" onClicked={() => {}} />
          <TableAction type="share" onClicked={() => {}} />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};

export { default as ChildLivingInTheHouseholdCommentsTable } from "./ChildLivingInTheHouseholdCommentsTable";
