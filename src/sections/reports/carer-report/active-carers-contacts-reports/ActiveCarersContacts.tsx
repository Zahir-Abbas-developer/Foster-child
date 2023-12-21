import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { TableDemoData } from ".";
import CustomTable from "@root/components/Table/CustomTable";
import { useActiveCarersContacts } from "./useActiveCarersContacts";
import DeleteModel from "@root/components/modal/DeleteModel";

const ActiveCarersContacts = () => {
  const { columns, path, handleCloseDeleteModal,router, openDelete } =
    useActiveCarersContacts();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title="ACTIVE CARER CONTACT REPORTS"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: path,
            query: { action: "add" },
          });
        }}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={TableDemoData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
      <DeleteModel
        open={openDelete}
        handleClose={handleCloseDeleteModal}
        onDeleteClick={handleCloseDeleteModal}
      />
    </Card>
  );
};

export default ActiveCarersContacts;
