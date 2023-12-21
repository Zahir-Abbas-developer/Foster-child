import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const systemConfigurationTableFunction = ({
  router,
  setOpenEditModel,
  deleteSystemConfiguration,
  setSystemConfigurationData,
}: any) => [
  {
    accessorFn: (row: any) => row,
    id: "srNo",
    cell: (info: any) => Number(info?.row?.id) + 1,
    header: "Sr. No",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.name,
    id: "name",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
    header: () => <span>Configuration Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.value,
    id: "value",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
    header: () => <span>Configuration Value</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.description,
    id: "description",
    cell: (info: any) => (
      <Box
        minWidth={300}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {`${info.getValue().substring(0, 30)}${
          info.getValue().length > 30 ? "..." : ""
        }`}
      </Box>
    ),
    header: () => <span>Description</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.approver_name,
    id: "approver_name",
    cell: (info: any) => info.getValue() ?? "-",
    header: () => <span>Approver</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.approver_role,
    id: "approver_role",
    cell: (info: any) => info.getValue() ?? "-",
    header: () => <span>Approver Role</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.approved_at,
    id: "approved_at",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
    header: () => <span>Approver Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() => {
            setOpenEditModel(true);
            setSystemConfigurationData(info.row.original);
          }}
        />
        <TableAction
          type="delete"
          onClicked={() => deleteSystemConfiguration(info.getValue())}
          size="small"
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];
