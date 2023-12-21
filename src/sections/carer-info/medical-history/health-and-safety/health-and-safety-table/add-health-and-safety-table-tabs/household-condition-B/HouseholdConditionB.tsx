import React, { useEffect } from "react";

import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { householdConditionB_Data, defaultValues } from ".";
import { useHouseholdConditionB } from "./useHouseholdConditionB";

export const HouseholdConditionB = (props: any) => {
  const {
    disabled,
    message,
    onSubmitHandler,
    formData,
    initialValueProps = defaultValues,
    isLoading,
    isError,
    isSuccess,
    breadCrumbData,
  } = props;

  const {
    theme,
    handleSubmit,
    isSubmitting,
    router,
    methods,
    makePath,
    onSubmit,
  }: any = useHouseholdConditionB({
    breadCrumbData,
    formData,
    onSubmitHandler,
    initialValueProps,
    message,
  });

  return (
    <Page title="Household Condition - B">
      <Card sx={{ p: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* <Grid item md={12}>
            <Typography variant="h6">Summary And Recommendation</Typography>
          </Grid> */}

            {householdConditionB_Data?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <form.component
                        {...form.componentProps}
                        disabled={disabled || isLoading}
                        size="small"
                      >
                        {form?.componentProps.select
                          ? form?.componentProps.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {" "}
                                {option.label}{" "}
                              </option>
                            ))
                          : null}
                      </form.component>
                    ) : (
                      <Typography
                        variant={form.variant}
                        color={theme.palette.primary.main}
                      >
                        {" "}
                        {form.heading}{" "}
                      </Typography>
                    )}{" "}
                  </>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    Loading &nbsp; <CircularProgress size={20} />
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>

              <Button
                sx={{
                  bgcolor: theme?.palette?.orange?.main,
                  "&:hover": { bgcolor: theme?.palette?.orange?.main },
                  ml: 1,
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    makePath({
                      path: "/carer-info/medical-history/health-and-safety",
                      skipQueries: ["healthAndSafetyId"],
                    })
                  )
                }
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Card>
    </Page>
  );
};
