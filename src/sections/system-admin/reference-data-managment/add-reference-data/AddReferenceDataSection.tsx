import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import AddReferenceDataTable from "./AddReferenceDataTable";
import AddReferenceDataForm from "./AddReferenceDataForm";
import { useRouter } from "next/router";

export default function AddReferenceDataSection(props: any) {
  const router = useRouter();
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
        title={router?.query?.name}
        onChanged={changeHandler}
        showAddBtn
        onAdd={() => setOpenModal(true)}
      />
      <AddReferenceDataTable
        tableData={tableData}
        onDelete={onDelete}
        editedData={editedData}
        gettingStatus={gettingStatus}
        editingStatus={editingStatus}
        deletingStatus={deletingStatus}
        modalStatus={modalStatus}
        onPageChange={onPageChange}
      />
      <AddReferenceDataForm
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
