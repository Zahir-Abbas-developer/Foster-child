import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { kidieeSavingData } from ".";
import { useKidieeSavingForm } from "./useKidieeSavingForm";

export const KidieeSavingForm = (props: any) => {
  const { methods, handleSubmit, onSubmit, disabled, router, isSubmitting } =
    useKidieeSavingForm(props);

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {kidieeSavingData?.map((item: any, index: any) => (
            <Grid item xs={12} md={item?.md} key={index}> 
              <item.component
                size={"small"}
                {...item.componentProps}
                disabled={disabled}
              >
                {item.componentProps
                  ? item.options?.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
                {item?.heading}
              </item.component>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", mb: "1rem" }}>
          {!disabled && (
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          )}
          <LoadingButton
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            variant="contained"
            onClick={() =>
              router.push({
                pathname: "/money-management/kidiee-saving",
              })
            }
          >
            Back
          </LoadingButton>
        </Box>
      </FormProvider>
    </Paper>
  );
};
