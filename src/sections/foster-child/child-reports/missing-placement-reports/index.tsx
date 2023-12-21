import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const missingPlacementTableColumnsFunction = (
  router?: any,
) => [
  {
    accessorFn: (row: any) => row.personName,
    id: "name",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.childMissingDate,
    id: "childMissingDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Missing Date</span>,
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
                pathname: `/foster-child/child-reports/child-missing-placement-report/missing-placement-form`,
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
