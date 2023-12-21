const checkStatus = (row: any) => {
  let color;
  switch (row?.status) {
    case "Success":
      color = "#4C9E78";
      break;
    case "Started":
      color = "#E69D18";
      break;
    case "error":
      color = "#D00101";
      break;
    case "inProgress":
      color = "var(--logo-orange, #F6830F)";
      break;
    default:
      color = "#18938D";
      break;
  }
  return <span style={{ color }}>{row?.status}</span>;
};

export const columns = [
  {
    accessorFn: (row: any) => row?.file,
    id: "file",
    cell: (info: any) => info.getValue(),
    header: () => <span>Backup File</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.type,
    id: "type",
    cell: (info: any) => info.getValue(),
    header: () => <span>Backup type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => checkStatus(row),
    id: "Status",
    cell: (info: any) => info.getValue(),
    header: () => <span>Status</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => (row?.reason === null ? "-" : row?.reason),
    id: "reason",
    cell: (info: any) => info.getValue(),
    header: () => <span>Reason</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.createdAt,
    id: "createdAt",
    cell: (info: any) => info.getValue(),
    header: () => <span>Created at</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.updatedAt,
    id: "updatedAt",
    cell: (info: any) => info.getValue(),
    header: () => <span>Updated at</span>,
    isSortable: true,
  },
];
