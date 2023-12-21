import { useEffect } from "react";
import { defaultValues } from ".";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useGetChildAdditionalReportByIdQuery } from "@root/services/foster-child/child-reports/child-additional-report/childAdditionalReportAPI";

export const useChildAdditionalReportForm = () => {
  const router = useRouter();

  const { data } = useGetChildAdditionalReportByIdQuery(router?.query?.id, {
    skip: router?.query?.action === "add",
    refetchOnMountOrArgChange: true,
  });

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
      signDate: data ? new Date(data?.data?.signDate) : new Date(),
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
