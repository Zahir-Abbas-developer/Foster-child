import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import ReferenceDataManagementTable from "./ReferenceDataManagementTable";
import ReferenceDataManagementForm from "./ReferenceDataManagementForm";

export default function ReferenceDataManagementSection(props: any) {
  const {
    tableData,
    formData,
    searchedText,
    gettingStatus,
    postingStatus,
    editingStatus,
    deletingStatus,
    editedData,
    onDelete,
    modalStatus,
    onPageChange,
  } = props;

  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (i: any) => {
    searchedText(i);
  };

  return (
    <div>
      <TableHeader
        title="Reference Data Management"
        onChanged={changeHandler}
        showAddBtn
        onAdd={() => setOpenModal(true)}
      />
      <ReferenceDataManagementTable
      tableData={tableData}
      onDelete={onDelete}
      editedData={editedData}
      gettingStatus={gettingStatus}
      editingStatus={editingStatus}
      deletingStatus={deletingStatus}
      modalStatus={modalStatus}
      onPageChange={onPageChange}
      />
      <ReferenceDataManagementForm 
        content={{}}
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) => formData(data)}
        status={postingStatus}
        modalStatus={modalStatus}
      />
    </div>
  );
}
