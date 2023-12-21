import { Box, Grid } from "@mui/material";
import { ChildAllegationReportsFormData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useChildAllegationReportsForm } from "./useChildAllegationReportsForm";
import Comments from "@root/components/comment/Comment";

export const ChildAllegationReportsForm = ({fosterChildId, defaultValues}: any) => {
  const { handleSubmit, methods, onSubmit, router } = 
    useChildAllegationReportsForm({defaultValues}); 
    console.log(defaultValues); 

  return ( 
    <> 
      <Box sx={{ p: 3 }}>
        <Grid container>
          <Grid item xs={12}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                {ChildAllegationReportsFormData?.map((form: any) => {
                  return (
                    <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                      <Grid>
                        <form.component
                          size="small"
                          {...form.otherOptions}
                          disabled
                        >
                          {form.otherOptions
                            ? form.options?.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))
                            : null}
                        </form.component>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </FormProvider>
            <Comments
              referenceType="ALLEGATION_REPORT"
              fosterChildId={fosterChildId}
              ReportID={router?.query?.child_allegation_report_id as string}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
