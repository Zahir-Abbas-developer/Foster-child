import dayjs from "dayjs";

export const getAuditTrailsAndLogsColumns = () => {
  return [
    {
      accessorFn: (row: any) => row.name ?? "-",
      id: "name",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.eventName ?? "-",
      id: "eventName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Event Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.eventDate ?? "-",
      id: "eventDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Event Time",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role ?? "-",
      id: "role",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Account Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ipAddress ?? "-",
      id: "ipAddress",
      cell: (info: any) => info.getValue() ?? "-",
      header: "IP Address",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "status",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Status",
      isSortable: true,
    },
    // {
    //   accessorFn: (row: any) => row.id ?? "-",
    //   id: "actions",
    //   cell: (info: any) => (
    //     <TableAction type="delete" onClicked={() => setOpen(info.getValue())} />
    //   ),
    //   header: "Actions",
    //   isSortable: false,
    // },
  ];
};

export { default as AuditLogs } from "./AuditLogs";
