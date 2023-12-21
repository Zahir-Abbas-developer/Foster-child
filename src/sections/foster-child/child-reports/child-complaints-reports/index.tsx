import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const complaintReportsTableColumnsFunction = (
  router?: any,
) => [
  {
    accessorFn: (row: any) => row.caseId,
    id: "caseId",
    cell: (info: any) => info.getValue(),
    header: () => <span>Case ID</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.createdAt,
    id: "school",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date / Time of Occurence</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.fosterChildName,
    id: "fosterChildName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.complaintAgainstPersonCateg,
    id: "complaintAgainstPersonCateg",
    cell: (info: any) => info.getValue(),
    header: () => <span>Complaint Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.complaintDetails,
    id: "complaintDetails",
    cell: (info: any) => info.getValue(),
    header: () => <span>Complaint Description</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/child-complaints-report/complaints-form`,
                query: {
                  id: info?.getValue(),
                  action: "view",
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
          />
          <TableAction type="print" />
          <TableAction type="share" />
        </Box>
      );
    },
    header: () => <span>actions</span>,
  },
];
