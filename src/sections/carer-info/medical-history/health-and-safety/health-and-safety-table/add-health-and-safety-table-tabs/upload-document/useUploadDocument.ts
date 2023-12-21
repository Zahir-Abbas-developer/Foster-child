import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteHealthAndSafetyDocumentMutation,
  useGetHealthAndSafetyDocumentListQuery,
  useHealthAndSafetyDocumentPostMutation,
} from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useRef } from "react";

export const useUploadDocument = (breadCrumbData: any) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const router = useRouter();
  const { params, pageChangeHandler, sortChangeHandler } = useTableParams();
  const { healthAndSafetyId } = router.query;
  const tableHeaderRef = useRef<any>();
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetHealthAndSafetyDocumentListQuery({
      healthAndSafetyId,
      search: search,
      ...params,
    });
  const uploadDocumentApiData = data?.data?.healthAndSafetyDocs;
  const meta = data?.data?.meta;

  isError &&
    enqueueSnackbar(data?.message ?? "Something Went Wrong!", {
      variant: "error",
    });

  const [postDocuments]: any = useHealthAndSafetyDocumentPostMutation();
  const [deleteDocumentList]: any = useDeleteHealthAndSafetyDocumentMutation();

  const documentUploadHandler = async (data: any) => {
    console.log(data);

    const formData = new FormData();
    formData.append("docType", data.documentType);
    formData.append("date", data.documentDate);
    formData.append("password", data.password);
    formData.append("docFile", data.chosenFile);
    try {
      await postDocuments({ healthAndSafetyId, formData }).unwrap();
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const deleteDocument = async (id: any) => {
    deleteDocumentList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar(res?.message ?? "Information Deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  useEffect(() => {
    breadCrumbData("Upload Documents");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
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
    documentUploadHandler,
    deleteDocument,
    meta,
    setSearch,
  };
};
