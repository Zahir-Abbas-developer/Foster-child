import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteKidieeSavingMutation,
  useGetKidieeSavingListQuery,
} from "@root/services/money-management/kidiee-saving/KidieeSavingAPI";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";

export const useKidieeSavingTable = () => {
  const router = useRouter();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { user }: any = useAuth();

  const fosterChildId = user?.userId;
  console.log(fosterChildId);
  const { data, isLoading, isError, isFetching, isSuccess }: any =
    useGetKidieeSavingListQuery({
      params,
      fosterChildId,
    });
  console.log("pagination", params);
  
  // DELETE API For Kidiee Saving List
  const [deleteList] = useDeleteKidieeSavingMutation();

  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  console.log(data);
  return {
    router,
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
