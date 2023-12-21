import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { safetyFactorsOutdoors_Data, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { useSafetyFactorsOutdoors } from "./useSafetyFactorsOutdoors";

export const SafetyFactorsOutdoors = (props: any) => {
  const {
    disabled,
    formData,
    isLoading,
    isError,
    isSuccess,
    breadCrumbData,
    onSubmitHandler,
    initialValueProps = defaultValues,
    message,
  } = props;

  const {
    theme,
    handleSubmit,
    isSubmitting,
    router,
    methods,
    makePath,
    onSubmit,
  }: any = useSafetyFactorsOutdoors({
    breadCrumbData,
    formData,
    onSubmitHandler,
    initialValueProps,
    message,
  });

  return (
    <Page title="Safety Factors - Outdoors">
      <Card sx={{ p: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {safetyFactorsOutdoors_Data?.map((form: any) => {
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
              <Button type="submit" disabled={isSubmitting} variant="contained">
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
