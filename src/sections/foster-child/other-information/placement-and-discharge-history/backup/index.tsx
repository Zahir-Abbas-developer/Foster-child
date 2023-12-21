import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const getColumnsBackup = (makePath: any, setOpen: any) => {
  return [
    {
      accessorFn: (row: any) => row?.backupCareName ?? "-",
      id: "backupCareName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Backup Carer Name (Code)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.childName ?? "-",
      id: "childName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Child Name (Code)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.placementDate ?? "-",
      id: "placementDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY - HH:MM"),
      header: "Placement Date / Time",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dischargeDate ?? "-",
      id: "dischargeDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY - HH:MM"),
      header: "Discharge Date / Time",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "id",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/other-information/placement-and-discharge-history/edit/backup",
                  queryParams: { backupId: info.getValue() },
                })
              )
            }
          />
          <TableAction
            type="delete"
            onClicked={() => setOpen(info.getValue())}
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/other-information/placement-and-discharge-history/view/backup",
                  queryParams: { backupId: info.getValue() },
                })
              )
            }
          />
        </Box>
      ),
      header: "Action",
    },
  ];
};

export { default as BackupTable } from "./BackupTable";
