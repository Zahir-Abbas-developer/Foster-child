import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useState } from "react";
import {
  useDeleteAddReferenceDataByIdMutation,
  useGetAddReferenceDataTableApiQuery,
  usePostAddReferenceDataApiMutation,
  usePutAddReferenceDataByIdMutation,
} from "@root/services/system-admin/reference-data-management/ReferenceDataManagementAPI";
import { enqueueSnackbar } from "notistack";
import AddReferenceDataSection from "@root/sections/system-admin/reference-data-managment/add-reference-data/AddReferenceDataSection";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dropdown Management",
    href: "/system-admin/reference-data-managment",
  },
  {
    name: "Reference Data Managment",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
AddReferenceData.getLayout = function getLayout(page: any) {
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
export default function AddReferenceData() {
  const router = useRouter();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const tableData = useGetAddReferenceDataTableApiQuery({
    params: {
      parentId: router?.query?.id,
      ...params,
    },
  });

  const [postFormData, postingStatus] = usePostAddReferenceDataApiMutation();
  const [editFormData, editingStatus] = usePutAddReferenceDataByIdMutation();
  const [deleteEntry, deletingStatus] = useDeleteAddReferenceDataByIdMutation();
  const submitFormHandler = async (formData: any) => {
    try {
      const res: any = await postFormData({
        ...formData,
        parent_id: router?.query?.id,
      }).unwrap();
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
      <AddReferenceDataSection
        tableData={tableData?.data?.data?.referencesData}
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
