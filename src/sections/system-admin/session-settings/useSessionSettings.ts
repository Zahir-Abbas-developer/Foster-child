import { useForm } from "react-hook-form";
import { sessionSettingFormSchema, initialValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";

export const useSessionSettings = () => {
  const route = useRouter();
  const theme = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(sessionSettingFormSchema),
    defaultValues: initialValues,
  });
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = () => {
    route.push("/system-admin/");
    enqueueSnackbar("Information update Successfully", {
      variant: "success",
    });
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    route,
    theme,
  };
};
