import {
  useCreateCommentsMutation,
  useDeleteCommentsMutation,
  useLikeACommentsMutation,
} from "@root/services/comments/CommentsApi";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
interface IpostAComments {
  fosterChildId: string;
  message: string;
  refrenceTypeId: string;
  refrenceType: string;
}

const useComments = () => {
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  //API HANDELERS
  const [createComments] = useCreateCommentsMutation();
  const [deleteComments] = useDeleteCommentsMutation();
  const [LikeAComments] = useLikeACommentsMutation();
  //FUNCTIONS
  const PostAComments = ({
    fosterChildId,
    message,
    refrenceTypeId,
    refrenceType,
  }: IpostAComments) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("refrenceType", refrenceType);
    formData.append("message", message);
    formData.append("refrenceTypeId", refrenceTypeId);
    createComments({
      params: {
        fosterChildId: fosterChildId,
      },
      body: formData,
    })
      .unwrap()
      .then((res) => {
        setisFatching(false);
        enqueueSnackbar("Comment Add Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        setisFatching(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const ReplyAComment = ({
    fosterChildId,
    message,
    refrenceTypeId,
    refrenceType,
    parentid,
  }: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("refrenceType", refrenceType);
    formData.append("message", message);
    formData.append("refrenceTypeId", refrenceTypeId);
    formData.append("parent", parentid);
    createComments({
      params: {
        fosterChildId: fosterChildId,
      },
      body: formData,
    })
      .unwrap()
      .then((res) => {
        setisFatching(false);
        enqueueSnackbar("Comment Add Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        setisFatching(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const DeleteAComment = (id: string) => {
    setisFatching(true);
    deleteComments({
      id: id,
    })
      .unwrap()
      .then((res) => {
        setisFatching(false);
        enqueueSnackbar("Comment delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        setisFatching(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  const LikeAComment = (id: string) => {
    LikeAComments({
      params: {
        commentId: id,
      },
    })
      .unwrap()
      .then((res) => {
        setisFatching(false);
        enqueueSnackbar("You Like This Comment Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        setisFatching(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    isFatching,
    PostAComments,
    DeleteAComment,
    ReplyAComment,
    LikeAComment,
  };
};

export default useComments;
