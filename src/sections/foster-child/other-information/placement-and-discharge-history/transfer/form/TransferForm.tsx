import { Button, Card, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";
import { formData, formSchema, defaultValues } from "./";

export default function TransferForm({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const router = useRouter();

  const { makePath } = usePath();

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(res?.message ?? `Transfer ${message} Successfully!`, {
        variant: "success",
      });
      router.push(
        makePath({
          path: "/foster-child/other-information/placement-and-discharge-history",
          skipQueries: ["transferId"],
        })
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {formData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                disabled={disabled}
                {...item.componentProps}
                fullWidth={true}
                size={"small"}
              >
                {item?.componentProps?.select &&
                  item?.options?.map((option: any) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))}
              </item.component>
            </Grid>
          ))}
          {!disabled && (
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
                loading={isSubmitting}
                color={isError ? "error" : isSuccess ? "success" : "primary"}
              >
                {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
              </LoadingButton>
              <Button
                type="button"
                variant="contained"
                onClick={() =>
                  router.push(
                    makePath({
                      path: "/foster-child/other-information/placement-and-discharge-history",
                      skipQueries: ["transferId"],
                    })
                  )
                }
              >
                Back
              </Button>
            </Grid>
          )}
        </Grid>
      </FormProvider>
    </Card>
  );
}
