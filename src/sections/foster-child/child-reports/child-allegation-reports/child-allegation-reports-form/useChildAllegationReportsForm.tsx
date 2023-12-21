import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {} from "@root/services/foster-child/child-reports/review-officer-reports/ReviewOfficerReportsAPI";
import { defaultValuesChildAllegationReport } from ".";

export const useChildAllegationReportsForm = (props: any) => {
  // props
  const { defaultValues = defaultValuesChildAllegationReport } = props;

  // router
  const router = useRouter();

  // useForm
  const methods: any = useForm({
    defaultValues: defaultValues,
  });

  console.log("asdfsafsfsdf", defaultValues);

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    // await onSubmitted(data);
    console.log("form data: ", defaultValues);
  };

  return {
    router,
    methods,
    handleSubmit,
    onSubmit,
  };
};
