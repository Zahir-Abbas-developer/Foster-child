import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { defaultValuesReviewOfficerReport } from ".";

export const useReviewOfficerReportForm = (props: any) => {
  // props
  const { defaultValues = defaultValuesReviewOfficerReport } = props;

  // router
  const router = useRouter();
  console.log(defaultValues);
  // useForm
  const methods: any = useForm({
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    // await onSubmitted(data);
    // console.log("form data: ", data);
  };

  return {
    router,
    methods,
    handleSubmit,
    onSubmit,
  };
};
