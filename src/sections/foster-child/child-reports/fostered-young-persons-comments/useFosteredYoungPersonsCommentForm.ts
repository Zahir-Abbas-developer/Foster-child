import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useGetFosteredYoungPersonsCommentsByIdQuery } from "@root/services/foster-child/child-reports/fostered-young-persons-comments/fosteredYoungPersonsCommentsAPI";
import { defaultValues } from ".";

export const useFosteredYoungPersonsCommentForm = () => {
  const router = useRouter();

  const { data } = useGetFosteredYoungPersonsCommentsByIdQuery(
    router?.query?.id,
    {
      skip: router?.query?.action === "add",
      refetchOnMountOrArgChange: true,
    }
  );

  const methods: any = useForm({
    // mode: "onTouched",
    // resolver: yupResolver(StudySupportInfoFormSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data?.data,
      date: data ? new Date(data?.data?.date) : new Date(),
    }));
  }, [data, reset]);

  return {
    methods,
    handleSubmit,
    // onSubmit,
    isSubmitting,
    // isError,
    // isSuccess,
    // isLoading,
  };
};
