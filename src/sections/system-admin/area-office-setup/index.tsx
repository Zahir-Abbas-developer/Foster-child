import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const areaOfficeColumnFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row.office_name,
    id: "areaOfficeName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Area Office Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.agency_name,
    id: "agencyName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Agency Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => prepareRecordForDelete?.(info?.row?.original?.id)}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/system-admin/area-office-setup/form`,
                query: {
                  action: "edit",
                  AreaOfficeId: info?.getValue(),
                },
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/system-admin/area-office-setup/form`,
                query: {
                  AreaOfficeId: info?.getValue(),
                  action: "view",
                },
              })
            }
          />
        </Box>
      );
    },
    header: () => <span>actions</span>,
  },
];
