import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { defaultValuesSupervisoryHomeVisit } from ".";

export const useSupervisoryHomeVisitForm = (props: any) => {
  // props
  const { defaultValues = defaultValuesSupervisoryHomeVisit } = props;

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
