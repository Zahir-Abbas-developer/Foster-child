import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteManageFaqsDataMutation,
  useGetAllManageFaqsDataQuery,
  useGetAllRolesQuery,
} from "@root/services/system-admin/manage-faqs/manageFaqs";

export const useManageFaqsTabs = () => {
  const router = useRouter();
  const [deleteManageFaqsDataTrigger] = useDeleteManageFaqsDataMutation();

  const [deleteData, setDeleteData] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const handleDeleteModal = (item: any) => {
    setDeleteData(item?.id);
    setIsDeleteModal(true);
  };

  useEffect(() => {
    router.push({
      pathname: `/system-admin/manage-FAQs`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenDialog = (item?: any, isEdit = false) => {
    router.push({
      pathname: `/system-admin/manage-FAQs`,
      query: {
        action: isEdit ? "edit" : "add",
        ...(isEdit && { id: item?.id }),
      },
    });
    setTimeout(() => setIsDialogOpen(true), 300);
  };

  const handleCloseDialog = () => {
    router.push({
      pathname: `/system-admin/manage-FAQs`,
    });
    setIsDialogOpen(false);
  };
  const onDeleteConfirm = async (data: any) => {
    const body = {
      faqId: deleteData,
    };
    const apiDataParameter = { body };
    try {
      const res: any = await deleteManageFaqsDataTrigger(
        apiDataParameter
      ).unwrap();
      setIsDeleteModal(false);

      enqueueSnackbar(res?.message || `Deleted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg || "Error occured", { variant: "error" });
    }
  };
  const userRoles = useGetAllRolesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data, isLoading } = useGetAllManageFaqsDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const tabDataArray: any = userRoles?.data?.data?.map(
    (singleRole: any) => singleRole?.title
  );

  return {
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
  };
};
