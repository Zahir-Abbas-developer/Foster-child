import { Box, Button } from "@mui/material";
import Image from "next/image";
import TableAction from "@root/components/TableAction";
import pdfFile from "../../../../assets/svg/safeguarding/pdfDownload.svg";
import dayjs from "dayjs";

export const dischargePlacementcolumnsFunction = (
  buttonStyle: any,
  router: any,
  setIsDeleteModal: any
) => [
  {
    accessorFn: (row: any) => row.childName,
    id: "childName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Name</span>,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.carerName,
    id: "carerName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Carer Name</span>,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.dateOfDischarge,
    id: "dateOfDischarge",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Date Of Discharge</span>,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.photo,
    id: "photo",
    cell: (info: any) => (
      <Box sx={{ borderRadius: "50px" }}>
        <Image width={40} height={40} src={pdfFile} alt="" />
      </Box>
    ),
    header: () => <span>Discharge report</span>,
  },
  {
    accessorFn: (row: any) => row.approvedBy,
    id: "approvedBy",
    cell: (info: any) => info.getValue(),
    header: () => <span>Approved by (Role)</span>,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.localAuthority,
    id: "localAuthority",
    cell: (info: any) => info.getValue(),
    header: () => <span>Local Authority</span>,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.localAuthoritySW,
    id: "localAuthoritySW",
    cell: (info: any) => info.getValue(),
    header: () => <span>Local Authority SW</span>,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => (
      <Button
        style={buttonStyle(info.getValue())}
        variant="contained"
        size="small"
      >
        {info.getValue()}
      </Button>
    ),
    header: () => <span>Status</span>,
    isSortable: false,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() =>
            router.push({
              pathname: "/placement/discharge/form",
              query: { id: info.row.original.id, action: "edit" },
            })
          }
        />
        <TableAction type="delete" onClicked={() => setIsDeleteModal(true)} />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

export const DISCHARGEPLACEMENTLISTPAGELIMIT = 10;
