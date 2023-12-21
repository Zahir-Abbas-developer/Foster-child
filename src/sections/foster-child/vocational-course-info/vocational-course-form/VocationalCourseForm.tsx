import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, VOCATIONALCOURSEINFODATA } from ".";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useRouter } from "next/router";

//component function
export default function VocationalCourseForm(props: any) {
  const {
    disabled,
    onSubmit,
    status,
    onEdit,
    data,
    gettingStatus,
    prevPath,
  }: any = props;

  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    // reset();
  };
  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data,
    }));
  }, [data, reset]);

  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        {VOCATIONALCOURSEINFODATA.map((form: any) => {
          return (
            <Grid
              item
              xs={12}
              md={form?.gridLength}
              key={form.id}
              {...form.gridProps}
            >
              <form.component
                size="small"
                {...form.componentProps}
                disabled={disabled}
              />
            </Grid>
          );
        })}
        {!disabled && (
          <Grid item xs={12} container gap={3}>
            <LoadingButton
              loading={status?.isLoading}
              size="large"
              disabled={status?.isLoading}
              type="submit"
              color={
                status?.isError
                  ? "error"
                  : status?.isSuccess
                  ? "success"
                  : "primary"
              }
              variant="contained"
            >
              {status?.isError ? "Try Again" : "Submit"}
            </LoadingButton>

            <Button
              size="large"
              disabled={status?.isLoading}
              type="button"
              variant="contained"
              color="warning"
              onClick={() => router.push(prevPath)}
            >
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
  // if (status?.isError) return <Error />;
  if (gettingStatus?.isLoading) return <SkeletonFormdata />;
  // if (status?.isSuccess)
  else return formEl;
}
