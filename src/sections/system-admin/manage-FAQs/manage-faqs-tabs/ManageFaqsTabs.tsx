import { Box, Button } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React, { useState } from "react";
import AddFormModal from "../add-form/AddFormModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useManageFaqsTabs } from "./useManageFaqsTabs";
import CustomAccordian from "@root/components/CustomAccordian";
import TableSkeleton from "@root/components/Table/TableSkeleton";

const ManageFaqsTabs = () => {
  const {
    data,
    tabDataArray,
    handleOpenDialog,
    handleDeleteModal,
    isDialogOpen,
    handleCloseDialog,
    isDeleteModal,
    setIsDeleteModal,
    onDeleteConfirm,
    isLoading,
    userRoles,
  } = useManageFaqsTabs();

  if (userRoles?.isLoading && isLoading) return <TableSkeleton />;
  return (
    <>
      <Box display="flex" justifyContent="right" mb={2}>
        <Button onClick={() => handleOpenDialog?.()} variant="contained">
          Add
        </Button>
      </Box>
      <HorizaontalTabs tabsDataArray={tabDataArray} spacing={2}>
        {tabDataArray?.map((cat: any) => (
          <CustomAccordian
            key={cat}
            showBtn={true}
            data={data?.data?.faqs
              .filter((SingleFaq: any) => SingleFaq?.category_name === cat)
              .map((catWiseFaq: any) => ({
                id: catWiseFaq?.id,
                title: catWiseFaq?.question,
                component: catWiseFaq?.answer,
              }))}
            handleRowDelete={(item: any) => handleDeleteModal?.(item)}
            handleTitleEdit={(item: any) => handleOpenDialog?.(item, true)}
          />
        ))}
      </HorizaontalTabs>
      {isDialogOpen && (
        <AddFormModal
          open={isDialogOpen}
          onClose={handleCloseDialog}
          FaqsCategories={userRoles?.data?.data}
        />
      )}
      {isDeleteModal && (
        <DeleteModel
          open={isDeleteModal}
          handleClose={() => setIsDeleteModal(false)}
          onDeleteClick={(data: any) => {
            onDeleteConfirm?.(data);
          }}
        />
      )}
    </>
  );
};

export default ManageFaqsTabs;
