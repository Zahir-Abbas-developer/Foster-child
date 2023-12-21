import React from "react";
import { Typography } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { useReferences } from "./useReferences";

const Rerefences = () => {
  const {
    references,
    referenceListIsloading,
    referencelistIsfetching,
    referenceListError,
    referenceListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useReferences();

  const columns = [
    {
      accessorFn: (row: any) => row.referenceType ?? "-",
      id: "referenceType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reference Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refereeName ?? "-",
      id: "referenceFullName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Full name of the reference</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.contactNo ?? "-",
      id: "contactNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email ?? "-",
      id: "emailId",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "approvalStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approval Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.viewedOn ?? "-",
      id: "viewedOn",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ref. viewed on</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.completedOn ?? "-",
      id: "completedOn",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ref. completed on</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2 }}
        component="div"
      >
        References
      </Typography>
      <CustomTable
        data={references}
        columns={columns}
        isLoading={referenceListIsloading}
        isFetching={referencelistIsfetching}
        isError={referenceListError}
        isSuccess={referenceListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default Rerefences;
