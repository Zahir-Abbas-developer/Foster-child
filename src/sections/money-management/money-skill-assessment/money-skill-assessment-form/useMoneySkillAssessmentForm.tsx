import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { defaultValuesMoneySkillAssessment } from ".";
import {
  usePatchMoneyAssessmentSkillMutation,
  usePostMoneyAssessmentSkillMutation,
} from "@root/services/money-management/money-skill-assessment/MoneySkillAssessmentAPI";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";

export const useMoneySkillAssessmentForm = (props: any) => {
  const router = useRouter();
  console.log(router, "router?.query");

  const { user }: any = useAuth();

  const fosterChildId = user?.userId;

  const { disabled, defaultValues } = props;
  console.log("defaultValues are here", defaultValuesMoneySkillAssessment);

  const methods: any = useForm({
    defaultValues: defaultValues ?? defaultValuesMoneySkillAssessment,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, ioisDirty },
  } = methods;

  const [postMoneyAssessmentSkillList] = usePostMoneyAssessmentSkillMutation();
  const [patchMoneyAssessmentSkillList] =
    usePatchMoneyAssessmentSkillMutation();

  const onSubmit = async (data: any) => {
    console.log("form data", data);

    if (!!router?.query?.money_skill_assessmen_id) {
      return patchKidieeSavingHandler(data);
    }

    // Post API of Money Assessment Skill
    try {
      const res: any = await postMoneyAssessmentSkillList({
        data,
        fosterChildId,
      }).unwrap();
      console.log(res);

      router.push(`/money-management/money-skill-assessment`);
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch API of Money Assessment Skill
  const patchKidieeSavingHandler = async (data: any) => {
    const patchData = { body: data, id: router?.query?.money_skill_assessmen_id };
    console.log(patchData);

    try {
      const res: any = await patchMoneyAssessmentSkillList(patchData).unwrap();
      console.log(res);
      if (
        router?.asPath.split("/").pop() === "view" ||
        router?.asPath.split("/").pop() === "edit"
      ) {
        router.push(`/money-management/money-skill-assessment`);
      } else {
        router.push(
          `/money-management/money-skill-assessment/add-money-skill-assessment`
        );
      }
      enqueueSnackbar(res?.message ?? `Details Updated Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    methods,
    disabled,
    handleSubmit,
    onSubmit,
    router,
    isSubmitting,
  };
};
