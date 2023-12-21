import { Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useRejectionForm } from "./useRejectionForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const RejectionForm = () => {
  const {
    router,
    methods,
    onSubmit,
    handleSubmit,
    theme,
    patchRejectionDataStatus,
    postRejectionDataStatus,
    rejectionPlacementFormData,
    isLoading,
  } = useRejectionForm();

  if (isLoading) return <SkeletonFormdata />;

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {rejectionPlacementFormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12} sx={form.sx}>
              {form.title && (
                <Typography
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#343A40"}
                >
                  {form.title}
                </Typography>
              )}
              <form.component size="small" {...form.otherOptions}>
                {form.otherOptions.select
                  ? form.otherOptions.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
              {/* {form.otherOptions.name === 'voiceMemo' && <RHFUploadFile {...form.otherOptions} {...methods} />} */}
            </Grid>
          ))}

          <Grid item xs={12} mt={3}>
            {router.query?.action !== "view" && (
              <Grid item xs={12}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  sx={{ mr: 2 }}
                  loading={
                    postRejectionDataStatus.isLoading ||
                    patchRejectionDataStatus.isLoading
                  }
                >
                  Submit
                </LoadingButton>
                <LoadingButton
                  type="button"
                  variant="contained"
                  sx={{
                    marginRight: "1rem",
                    bgcolor: theme.palette?.orange.main,
                    "&:hover": { bgcolor: theme.palette?.orange.dark },
                  }}
                  onClick={() =>
                    router.push({
                      pathname: `/placement/rejections`,
                    })
                  }
                >
                  Back
                </LoadingButton>
              </Grid>
            )}
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default RejectionForm;
