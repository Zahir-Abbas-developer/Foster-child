import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ReferenceDataManagementTable from "@root/sections/system-admin/reference-data-managment/ReferenceDataManagementTable";
import ReferenceDataManagementSection from "@root/sections/system-admin/reference-data-managment/ReferenceDataManagementSection";
import { useState } from "react";
import {
  useDeleteReferenceDataManagementCategoriesByIdMutation,
  useGetReferenceDataManagementTableApiQuery,
  usePostReferenceDataManagementCategoriesApiMutation,
  usePutReferenceDataManagementCategoriesByIdMutation,
} from "@root/services/system-admin/reference-data-management/ReferenceDataManagementAPI";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Reference Data Managment",
    href: "",
  },
  {
    name: "DropDown Management",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
ReferenceDataManagment.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function ReferenceDataManagment() {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const tableData = useGetReferenceDataManagementTableApiQuery({
    params,
  });

  const [postFormData, postingStatus] =
    usePostReferenceDataManagementCategoriesApiMutation();
  const [editFormData, editingStatus] =
    usePutReferenceDataManagementCategoriesByIdMutation();
  const [deleteEntry, deletingStatus] =
    useDeleteReferenceDataManagementCategoriesByIdMutation();
  const submitFormHandler = async (formData: any) => {
    try {
      const res: any = await postFormData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  //editing form entry
  const editFormHandler = async (formData: any) => {
    try {
      const res: any = await editFormData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Details Edited Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.errors?.[0] || error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  //deleting Form Entry
  const deleteTableRowHandler = async (id: any) => {
    console.log(id);
    try {
      const res: any = await deleteEntry(id).unwrap();
      enqueueSnackbar(res?.message ?? `Details Edited Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return (
    <Page title={PAGE_TITLE}>
      <ReferenceDataManagementSection
        tableData={tableData?.data?.data?.referenceCategories}
        formData={submitFormHandler}
        gettingStatus={tableData}
        postingStatus={postingStatus}
        editingStatus={editingStatus}
        deletingStatus={deletingStatus}
        editedData={editFormHandler}
        onDelete={deleteTableRowHandler}
        searchedText={headerChangeHandler}
        // if modal closes ,reset the queries status
        modalStatus={(state: any) => {
          if (!state) {
            postingStatus.reset();
            editingStatus.reset();
          }
        }}
        onPageChange={pageChangeHandler}
      />
    </Page>
  );
}
