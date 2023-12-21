import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { defaultValuesFosterManagerReport } from ".";

export const useFostringServiceManagerReportForm = (props: any) => {
  // props
  const { defaultValues = defaultValuesFosterManagerReport } = props;

  // router
  const router = useRouter();

  // useForm
  const methods: any = useForm({
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    // await onSubmitted(data);
    console.log("form data: ", data);
  };

  return {
    router,
    methods,
    handleSubmit,
    onSubmit,
  };
};
