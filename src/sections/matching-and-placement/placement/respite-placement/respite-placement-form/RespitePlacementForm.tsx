import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { formFields } from ".";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useRespitePlacementForm } from "./useRespitePlacementForm";
import { LoadingButton } from "@mui/lab";

const RespitePlacementForm = (props: any) => {
  const { action, id } = props;
  const {
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    theme,
    router,
    fosterChildId,
  } = useRespitePlacementForm(action, id);

  // const { methods, handleSubmit, router, onSubmit } = useRespitePlacementForm();

  const disabled = action === "view" ? true : false;

  return (
    <Card sx={{ py: 3, px: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {formFields.map((form: any, i) => (
            <Grid item md={form.gridLength} xs={12} key={i}>
              <Typography sx={styles.heading}>{form.title}</Typography>

              {form.component ? (
                <form.component
                  disabled={action === "view" ? true : false}
                  InputLabelProps={{
                    shrink: action === "view" ? true : undefined,
                    disabled: action === "view" ? true : undefined,
                  }}
                  sx={{ color: theme.palette.grey[600] }}
                  size="small"
                  {...form.otherOptions}
                  fullWidth
                >
                  {form.otherOptions.select
                    ? form.otherOptions?.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              ) : (
                <Typography sx={form?.sx ? form?.sx : styles.heading}>
                  {form.heading}
                </Typography>
              )}
              {form.otherOptions.name === "respitePlan" && (
                <RHFUploadFile
                  disabled={action === "view" ? true : false}
                  InputLabelProps={{
                    shrink: action === "view" ? true : undefined,
                    disabled: action === "view" ? true : undefined,
                  }}
                  {...form.otherOptions}
                  {...methods}
                />
              )}
              {/* {form.requireFileUpload && (
                <RHFUploadFile disabled={disabled} name={form.otherOptions.name} {...methods} />
              )} */}
            </Grid>
          ))}
        </Grid>
        <Grid
          xs={12}
          sx={{ display: "flex", gap: "15px", flexWrap: "wrap", mt: 3 }}
          item
        >
          {action === "add" || action === "edit" ? (
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              sx={{
                bgcolor: theme.palette.primary.main,
                "&:hover": { bgcolor: theme.palette.primary.main },
              }}
              variant="contained"
            >
              Submit
            </LoadingButton>
          ) : null}
          <Button
            sx={{
              bgcolor: theme.palette.orange.main,
              "&:hover": { bgcolor: theme.palette.orange.main },
            }}
            variant="contained"
            onClick={() =>
              router.push({
                pathname: "/placement/respite",
                query: { fosterChildId: fosterChildId },
              })
            }
          >
            Back
          </Button>
        </Grid>

        {/* <Grid item xs={12} sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
              type="button"
              variant="contained"
              onClick={() => router.push("/placement/respite")}
            >
              Back
            </Button>
          </Box>
        </Grid> */}
      </FormProvider>
    </Card>
  );
};

export default RespitePlacementForm;

const styles = {
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
