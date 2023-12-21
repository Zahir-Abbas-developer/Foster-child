import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteMoneyAssessmentSkillMutation,
  useGetMoneyAssessmentSkillListQuery,
} from "@root/services/money-management/money-skill-assessment/MoneySkillAssessmentAPI";

export const useMoneySkillAssessmentTable = () => {
  const router = useRouter();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { user }: any = useAuth();

  const fosterChildId = user?.userId;
  console.log(fosterChildId);
  const { data, isLoading, isError, isFetching, isSuccess }: any =
    useGetMoneyAssessmentSkillListQuery({
      params,
      fosterChildId,
    });
  console.log("pagination", params);

  // DELETE API For Money assessment Skill List
  const [deleteList] = useDeleteMoneyAssessmentSkillMutation();

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
  console.log("my data",data); 
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
