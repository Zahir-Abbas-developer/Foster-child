import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import usePath from "@root/hooks/usePath";
import { enqueueSnackbar } from "notistack";

export const useSafetyFactorsIndoorsD = ({
  breadCrumbData,
  onSubmitHandler,
  initialValueProps,
  message,
}: any) => {
  const theme: any = useTheme();
  const router = useRouter();

  const { healthAndSafetyId } = router.query;

  const { makePath } = usePath();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: initialValueProps,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    const safetyFactorsIndoorsD = data;
    const hasAnyFieldValue = Object.values(safetyFactorsIndoorsD).some(
      (value) => !!value
    );
    try {
      if (hasAnyFieldValue) {
        const res: any = await onSubmitHandler({
          healthAndSafetyId,
          formData: { safetyFactorsIndoorsD },
        }).unwrap();
        enqueueSnackbar(
          res?.message ?? `Health And Safety ${message} Successfully!`,
          { variant: "success" }
        );
      } else {
        enqueueSnackbar("Empty Form could not send!", { variant: "error" });
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong", { variant: "error" });
    }
  };
  useEffect(() => {
    breadCrumbData("Safety Factors - Indoors D");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    theme,
    handleSubmit,
    isSubmitting,
    router,
    methods,
    makePath,
    onSubmit,
  };
};
