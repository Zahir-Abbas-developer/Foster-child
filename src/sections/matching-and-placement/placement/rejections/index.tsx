import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const SELECT_FILTERS = [
  {
    key: "selectCarer",
    label: "Foster Carer",
    options: [{ label: "option 1", value: "options" }],
  },
];

export const rejectionColumnFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row.childName,
    id: "childName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.carerName,
    id: "carerName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Carer Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.date,
    id: "date",
    cell: (info: any) => info.getValue(),
    header: () => <span>Rejection Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.placementType,
    id: "placementType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Placement Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.reason,
    id: "reason",
    cell: (info: any) => info.getValue(),
    header: () => <span>Rejection Reason</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.agencySocialWorker,
    id: "agencySocialWorker",
    cell: (info: any) => info.getValue(),
    header: () => <span>Agency Social Worker (SSW)</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.localAuthority,
    id: "localAuthority",
    cell: (info: any) => info.getValue(),
    header: () => <span>Local Authority SW</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.voiceMemo,
    id: "voiceMemo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Voice Memo on Rejection</span>,
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          size="small"
          type="edit"
          onClicked={() =>
            router.push({
              pathname:
                "/placement/rejections/form",
              query: { action: "edit", id: info?.row?.original?.id },
            })
          }
        />
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push({
              pathname:
                "/placement/rejections/form",
              query: { action: "view", id: info?.row?.original?.id },
            })
          }
        />
        <TableAction
          type="delete"
          onClicked={() => prepareRecordForDelete?.(info?.row?.original?.id)}
        />
      </Box>
    ),

    header: () => <span>actions</span>,
    isSortable: false,
  },
];
