import React from "react";
import { ReviewOfficerReportFromData } from ".";
import { FormProvider } from "@root/components/hook-form";
import AccordianList from "@root/components/AccordianList";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useReviewOfficerReportForm } from "./useReviewOfficerReportForm";
import dayjs from "dayjs";
import Comments from "@root/components/comment/Comment";
 
export const ReviewOfficerReportsForm = ({fosterChildId, defaultValues}: any) => {
  const { handleSubmit, methods, onSubmit, router } =
    useReviewOfficerReportForm({defaultValues});
  console.log(defaultValues);
  const reviewingDate = dayjs(defaultValues?.dateOfReviewMeeting).format(
    "DD/MM/YYYY"
  );

  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  value={defaultValues?.fosterCarerName}
                  fullWidth
                  id="name"
                  // select
                  label="Name of foster carer"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={reviewingDate}
                  fullWidth
                  multiline
                  disabled
                  label="Date of review meeting"
                />
              </Grid>
            </Grid>
            <Grid container>
              {ReviewOfficerReportFromData?.map((item: any) => (
                <Grid item xs={12} key={item.id}>
                  {item.isHeading && (
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {item?.title}
                    </Typography>
                  )}
                  {!item.isHeading && (
                    <AccordianList
                      title={item.title}
                      component={item.component}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </FormProvider>
          <Comments
            referenceType="REVIEW_OFFICER_REPORT"
            fosterChildId={fosterChildId}
            ReportID={router?.query?.review_officer_reports_id as string}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
