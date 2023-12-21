import { SupervisoryHomeVisitFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import AccordianList from "@root/components/AccordianList";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useSupervisoryHomeVisitForm } from "./useSupervisoryHomeVisitForm";
import Comments from "@root/components/comment/Comment";

export const SupervisoryHomeVisitForm = ({
  fosterChildId,
  defaultValues,
}: any) => {
  const { handleSubmit, methods, onSubmit, router } =
    useSupervisoryHomeVisitForm({ defaultValues });

  const visitOfDate = dayjs(defaultValues?.visitDate).format("DD/MM/YYYY");
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  value={defaultValues?.nameOfSupervising}
                  fullWidth
                  id="name"
                  // select
                  label="Name of Supervising Social Worker"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={visitOfDate}
                  fullWidth
                  multiline
                  disabled
                  label="Date of Visit *"
                />
              </Grid>
            </Grid>
            <Grid container>
              {SupervisoryHomeVisitFormData?.map((item: any) => (
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
            referenceType="SUPERVISORY_HOME_VISIT"
            fosterChildId={fosterChildId}
            ReportID={router?.query?.supervisory_home_visit_id as string}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
