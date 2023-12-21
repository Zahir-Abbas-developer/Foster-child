import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const getColumnsChildSocialWorkerReport = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.nameOfChild ?? "-",
      id: "nameOfChild",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Name of Child (DOB)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.socialWorkerName ?? "-",
      id: "socialWorkerName",
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
      accessorFn: (row: any) => row?.signedDate ?? "-",
      id: "signedDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Signed Date",
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
                  path: "/foster-child/child-reports/childs-social-worker-report/view-childs-social-worker-report",
                  queryParams: { childSocialId: info.getValue() },
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

export { default as ChildsSocialWorkerReportTable } from "./ChildsSocialWorkerReportTable";
