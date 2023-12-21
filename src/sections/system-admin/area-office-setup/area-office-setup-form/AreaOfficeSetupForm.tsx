import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useAreaOfficeSetupForm } from "./useAreaOfficeSetupForm";

const AreaOfficeSetupForm = () => {
  const {
    onSubmit,
    sanctionDetailsFormData,
    methods,
    router,
    isSubmitting,
    isLoading,
    theme,
    handleSubmit,
    postAreaOfficeDataStatus,
    patchAreaOfficeDataStatus,
  } = useAreaOfficeSetupForm();

  if (isLoading) return <SkeletonFormdata />;
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {sanctionDetailsFormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              {form.head && (
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 600, color: "#0E918C" }}
                >
                  {form.head}
                </Typography>
              )}
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
          <Grid item xs={12} mt={3}>
            {router.query?.action !== "view" && (
              <Grid item xs={12}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  sx={{ mr: 2 }}
                  loading={
                    postAreaOfficeDataStatus.isLoading ||
                    patchAreaOfficeDataStatus.isLoading
                  }
                >
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
                      pathname: `/system-admin/area-office-setup`,
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

export default AreaOfficeSetupForm;
