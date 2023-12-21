import { Box, Grid } from "@mui/material";
import Comments from "@root/components/comment/Comment";
import { FostringServiceManagerReportFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useFostringServiceManagerReportForm } from "./useFostringServiceManagerReportForm";

export const FostringServiceManagerReportForm = ({fosterChildId, defaultValues}: any) => {
  
  console.log(defaultValues); 
  const { handleSubmit, methods, onSubmit, router } = 
    useFostringServiceManagerReportForm({defaultValues});

  return ( 
    <>
      <Box sx={{ p: 3 }}>
        <Grid container>
          <Grid item xs={12}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                {FostringServiceManagerReportFormData?.map((form: any) => {
                  return (
                    <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                      <>
                        <Grid>
                          <form.component
                            size="small"
                            {...form.otherOptions}
                            disabled
                          >
                            {form.otherOptions
                              ? form.options?.map((option: any) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))
                              : null}
                            {form.heading}
                          </form.component>
                        </Grid>
                      </>
                    </Grid>
                  );
                })}
              </Grid>
            </FormProvider>
            <Comments
              referenceType="FOSTER_SERVICE_MANAGER_REPORT"
              fosterChildId={fosterChildId}
              ReportID={
                router?.query?.fostering_service_manager_report_id as string
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
