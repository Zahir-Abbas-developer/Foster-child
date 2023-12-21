import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { ComplaintsDataValue } from ".";
import {
  useCreateComplaintsDocumentsMutation,
  useDeleteComplaintsDocumentsMutation,
} from "@root/services/foster-child/events-and-notification/complaints/complaintsdocumentsApi";
import {
  useCreateComplaintsListMutation,
  useDeleteComplaintsListMutation,
  useLazyGetComplaintsListQueryByIdQuery,
  useUpdateComplaintsListMutation,
} from "@root/services/foster-child/events-and-notification/complaints/Complaints";

const useComplaintsFrom = (props: any) => {
  const { action, fosterChildId, complaintsId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS
  const [createComplaintsList] = useCreateComplaintsListMutation();
  const [updateComplaintsList] = useUpdateComplaintsListMutation();
  const [deleteComplaintsList] = useDeleteComplaintsListMutation();
  const [GetComplaintsListQueryById] = useLazyGetComplaintsListQueryByIdQuery();
  //UPLOAD API

  const [createComplaintsDocuments] = useCreateComplaintsDocumentsMutation();
  const [deleteComplaintsDocuments] = useDeleteComplaintsDocumentsMutation();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(ComplaintsDataValue);
    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      createComplaintsList({
        body: { fosterChildId: fosterChildId, status: "in progress", ...data },
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/events-and-notification/complaints/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              complaintsId: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateComplaintsList({
        params: {
          id: complaintsId,
        },
        body: {
          fosterChildId: fosterChildId,
          status: "in progress",
          ...sendata,
        },
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/health-medical-history/hospitalisation/",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else {
      return null;
    }
  };
  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view" || action === "edit") {
      const { data, isError } = await GetComplaintsListQueryById({
        params: {
          id: complaintsId,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return ComplaintsDataValue;
      }
      const responseData = { ...data?.data };
      for (const key in responseData) {
        if (key.includes("date") || key.includes("Date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }

      return responseData;
    } else {
      setisloading(false);
      return ComplaintsDataValue;
    }
  };
  const deleteHander = (id: any) => {
    deleteComplaintsList(id)
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: { data: { message: any } }) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  //UPLOAD DOCUMENTS
  const onUploadSubmit = (data: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("formName", "COMPLAINTS");
    formData.append("recordId", complaintsId);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.documentFile);
    createComplaintsDocuments({
      params: {
        fosterChildId: fosterChildId,
      },
      body: formData,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Add Successfully", {
          variant: "success",
        });
        setisFatching(false);
        setModelOpen(false);
      })
      .catch((error: any) => {
        setisFatching(false);
        setModelOpen(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const onDeleteHander = (id: any) => {
    deleteComplaintsDocuments({ id: id })
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    onUploadSubmit,
    onDeleteHander,
    SubmitData,
    getDefaultValue,
    deleteHander,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useComplaintsFrom;
