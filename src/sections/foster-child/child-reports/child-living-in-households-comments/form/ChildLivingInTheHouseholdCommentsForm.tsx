import { Button, Card, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import usePath from "@root/hooks/usePath";
import { formData, formSchema, defaultValues } from "./";
import RHFUploadImage from "@root/components/hook-form/RHFUploadImage";
import { enqueueSnackbar } from "notistack";
import Comments from "@root/components/comment/Comment";

export default function ChildLivingInTheHouseholdCommentsForm({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const router = useRouter();
  const { fosterChildId, childCommentsId }: any = router.query;
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
    console.log(data);
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(
        res?.message ??
          `Child Living in the Household Comments ${message} Successfully!`,
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
          {formData?.map((parent: any) => (
            <Grid item xs={12} key={parent?.id} md={parent?.md}>
              {parent?.child ? (
                parent?.child?.map((child: any) => (
                  <Grid
                    item
                    xs={12}
                    md={child?.md}
                    key={child?.id}
                    mb={child?.mb}
                    mt={child?.mt}
                  >
                    {child?.id === 16.1 ? (
                      <RHFUploadImage
                        name="childDrawing"
                        {...methods}
                        disabled={disabled}
                        height="420px"
                      />
                    ) : (
                      <child.component
                        disabled={disabled}
                        {...child?.componentProps}
                        fullWidth
                        size={"small"}
                      >
                        {child?.componentProps?.select &&
                          child?.options?.map((option: any) => (
                            <option key={option?.value} value={option?.value}>
                              {option?.label}
                            </option>
                          ))}
                      </child.component>
                    )}
                  </Grid>
                ))
              ) : (
                <parent.component
                  disabled={disabled}
                  {...parent?.componentProps}
                  fullWidth
                  size={"small"}
                >
                  {parent?.componentProps?.select &&
                    parent?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))}
                </parent.component>
              )}
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
                      path: "/foster-child/child-reports/child-living-in-households-comments",
                      skipQueries: ["childCommentsId"],
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
        referenceType={"CHILD_LIVING_IN_THE_HOUSEHOLD_COMMENTS"}
        fosterChildId={fosterChildId}
        ReportID={childCommentsId}
      />
    </Card>
  );
}
