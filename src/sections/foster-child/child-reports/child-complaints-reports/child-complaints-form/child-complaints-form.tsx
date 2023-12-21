import React from "react";
import { Card, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useChildComplaintsForm } from "./useChild-complaints-form";
import Comments from "@root/components/comment/Comment";

const ChildComplaintsForm = ({ data, isLoading, onSubmitHanlder }: any) => {
  const {
    complaintsFormData,
    methods,
    router,
    isSubmitting,
    onSubmit,
    theme,
    handleSubmit,
  } = useChildComplaintsForm({ data, onSubmitHanlder });

  if (isLoading) return <SkeletonFormdata />;
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {complaintsFormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              {form.otherOptions && (
                <form.component size="small" {...form.otherOptions}>
                  {form.otherOptions.select
                    ? form.otherOptions.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} mt={3}>
          {router.query?.action !== "view" && (
            <Grid item xs={12}>
              <LoadingButton type="submit" variant="contained" sx={{ mr: 2 }}>
                Submit
              </LoadingButton>
              <LoadingButton
                type="button"
                variant="contained"
                sx={{
                  marginRight: "1rem",
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.dark },
                }}
                onClick={() =>
                  router.push({
                    pathname: `/foster-child/child-reports/child-complaints-report`,
                  })
                }
              >
                Back
              </LoadingButton>
            </Grid>
          )}
        </Grid>
      </FormProvider>
      <Comments
        referenceType={""}
        fosterChildId={router?.query?.fosterChildId as string}
        ReportID={router?.query?.id as string}
      />
    </Card>
  );
};

export default ChildComplaintsForm;
