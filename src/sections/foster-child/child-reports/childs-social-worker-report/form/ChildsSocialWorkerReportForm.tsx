import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { LaDetailsFormData, defaultValues, validationSchema } from "./";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import usePath from "@root/hooks/usePath";
import { enqueueSnackbar } from "notistack";
import Comments from "@root/components/comment/Comment";

export default function ChildsSocialWorkerReportForm({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValueProps,
  });

  const router = useRouter();
  const { fosterChildId, childSocialId }: any = router.query;
  const { makePath } = usePath();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(
        res?.message ?? `Child Social Worker Report ${message} Successfully!`,
        {
          variant: "success",
        }
      );
      router.push("/foster-child/child-reports/childs-social-worker-report");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {LaDetailsFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                disabled={disabled}
                {...item.componentProps}
                size={"small"}
              >
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))
                  : item?.heading}
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
                      path: "/foster-child/child-reports/childs-social-worker-report",
                      skipQueries: ["childSocialId"],
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
      <Comments
        referenceType={"CHILD_SOCIAL_WORKER_REPORT"}
        fosterChildId={fosterChildId}
        ReportID={childSocialId}
      />
    </Card>
  );
}
