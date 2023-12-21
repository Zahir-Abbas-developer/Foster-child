import { Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useMeetingRecordForm } from "./useMeetingRecordForm";
import { meetingRecordData } from ".";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const MeetingRecordForm = (props: any) => {
  const { action, id } = props;
  const {
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    theme,
    router,
    fosterChildId,
  } = useMeetingRecordForm(action, id);

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {meetingRecordData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12} sx={form.sx}>
              {form.title && (
                <Typography
                  fontWeight={600}
                  fontSize={"16px"}
                  sx={{ color: theme.palette.grey[600] }}
                >
                  {form.title}
                </Typography>
              )}
              {form.component && (
                <form.component
                  disabled={action === "view" ? true : false}
                  InputLabelProps={{
                    shrink: action === "view" ? true : undefined,
                    disabled: action === "view" ? true : undefined,
                  }}
                  sx={{ color: theme.palette.grey[600] }}
                  size="small"
                  {...form.otherOptions}
                ></form.component>
              )}
              {form.otherOptions.name === "meetingMinutes" && (
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
            </Grid>
          ))}

          <Grid
            xs={12}
            sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
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
                  pathname: "/placement/meeting-record",
                  query: { fosterChildId: fosterChildId },
                })
              }
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default MeetingRecordForm;
