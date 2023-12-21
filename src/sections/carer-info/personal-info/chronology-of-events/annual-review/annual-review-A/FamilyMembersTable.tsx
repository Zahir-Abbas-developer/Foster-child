import { Box, Card, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useRef } from "react";
import { useFamilyMembersTable } from "./useFamilyMembersTable";

const FamilyMembersTable = () => {
  const {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    theme,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  } = useFamilyMembersTable();

  const columns = [
    {
      accessorFn: (row: any) => row.firstName + " " + row.lastName ?? "-",
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfBirth ?? "-",
      id: "dob",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation ?? "-",
      id: "relation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.livingAtHome ?? "",
      id: "livingHome",
      cell: (info: any) => info.getValue().toString(),
      header: () => <span>Is Living at Home</span>,
      isSortable: true,
    },
  ];
  return (
    <Card sx={{ p: { xs: 1, md: 2 } }}>
      <Typography
        variant="subtitle2"
        sx={{ mb: 2, color: theme.palette.grey[600] }}
      >
        Household Compostions/Household Members:
      </Typography>

      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="EXISTING FAMILY MEMBERS(S) DETAILS"
        searchKey="search"
        showAddBtn={false}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
};

export default FamilyMembersTable;
