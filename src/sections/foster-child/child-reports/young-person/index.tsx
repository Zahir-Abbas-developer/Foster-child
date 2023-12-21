import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const youngPersonTableColumnsFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row.personName,
    id: "name",
    cell: (info: any) => info.getValue(),
    header: () => <span>{`Young Person's Name (DOB)`}</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.supervisingSocialWorker,
    id: "supervisingSocialWorker",
    cell: (info: any) => info.getValue(),
    header: () => <span>Supervising Social Worker</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.fosterCarer,
    id: "fosterCarer",
    cell: (info: any) => info.getValue(),
    header: () => <span>Foster Carer</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.createdAt,
    id: "createdAt",
    cell: (info: any) => info.getValue(),
    header: () => <span>Created Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.acknowledgedBy,
    id: "acknowledgedBy",
    cell: (info: any) => info.getValue(),
    header: () => <span>Created By</span>,
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
                pathname: `/foster-child/child-reports/young-person-living-in-households-comments/young-person-form`,
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
