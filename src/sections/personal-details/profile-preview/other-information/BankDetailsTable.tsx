import React from "react";
import { Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { useBankDetailsTable } from "./useBankDetailsTable";

const BankDetailsTable = () => {
  const {
    trainings,
    trainingListIsloading,
    traininglistIsfetching,
    trainingListError,
    trainingListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useBankDetailsTable();

  const columns = [
    {
      accessorFn: (row: any) => row.userName,
      id: "userName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account User Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.bankName,
      id: "bankName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Bank Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.sortCode,
      id: "sortCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sort Code</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.accountNumber,
      id: "accountNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.accountType,
      id: "accountType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Type</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 3 }}
        component="div"
      >
        Bank Details
      </Typography>
      <CustomTable
        data={trainings}
        columns={columns}
        isLoading={trainingListIsloading}
        isFetching={traininglistIsfetching}
        isError={trainingListError}
        isSuccess={trainingListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default BankDetailsTable;
