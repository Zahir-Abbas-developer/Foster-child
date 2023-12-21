import { useTableParams } from "@root/hooks/useTableParams";
import { useUploadDocument } from "./useUploadDocument";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { UPLOAD_DOCUMENT_DATA, columns } from ".";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import Page from "@root/components/Page";

export const UploadDocument = (props: any) => {
  const { breadCrumbData } = props;
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    uploadDocumentApiData,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    deleteDocument,
    documentUploadHandler,
    meta,
    setSearch
  } = useUploadDocument(breadCrumbData);
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return (
    <Page title="Upload Documents">
      <Card sx={{ p: 1 }}>
        {/* <TableHeader
        ref={tableHeaderRef}
        // showSelectFilters
        // disabled={isLoading}
        title="Upload Documents"
        searchKey="search"
        showAddBtn
        onAdd={() =>
          router.push(
            "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs"
          )
        }
        onChanged={headerChangeHandler}
        // selectFilters={SELECT_FILTERS}
      /> 
        <CustomTable
        data={UPLOAD_DOCUMENT_DATA}
        columns={columns}
        // showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={false}
      /> */}
        {/* <UploadDocuments
      tableData={UPLOAD_DOCUMENT_DATA}
      columns={columns}
      isSuccess={true}
      /> */}
        {/* <UploadDocuments
          // readOnly={user?.defaultRole === "FOSTER_CARER"}
          tableData={UPLOAD_DOCUMENT_DATA}
          isLoading={false}
          column={[
            "documentName",
            "documentType",
            "documentDate",
            "personUploaded",
            "password",
          ]}
          isFetching={false}
          isError={false}
          isSuccess={true}
          modalData={(data: any) => console.log("data all the way here", data)}
        /> */}

        <UploadDocuments
          // readOnly={true}

          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={uploadDocumentApiData}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          column={["docName", "docType", "date", "uploadedBy", "password"]}
          modalData={(data: any) => documentUploadHandler(data)}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isPagination={true}
          totalPages={meta?.pages ?? 0}
          currentPage={meta?.page ?? 1}
          onDelete={(data: any) => {
            deleteDocument(data?.id);
          }}
        />
      </Card>
    </Page>
  );
};
