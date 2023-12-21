import { Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useChildDaylogEventsReportInfo } from "./useChildDaylogEventsReportInfo";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const ChildDaylogEventsReportInfo = (props: any) => {
  const {
    childDaylogEventsReportInfoFormData,
    methods,
    handleSubmit,
    isLoading,
    childDaylogEventsReportsData,
  }: any = useChildDaylogEventsReportInfo();

  const { submitForm, children } = props;

  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Grid container>
        {Object.entries(childDaylogEventsReportsData)?.map(
          ([key, value]: any, index: number) => {
            return (
              <Grid item xs={12} md={4} key={key + index}>
                <Typography
                  component={"p"}
                  sx={{ fontWeight: "500", fontSize: "14px", mb: "20px" }}
                >
                  {key} : {value}
                </Typography>
              </Grid>
            );
          }
        )}
      </Grid>
      <FormProvider methods={methods} onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={5}>
          {childDaylogEventsReportInfoFormData.map(
            (form: any, index: number) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
                  <form.component {...form.componentProps} size="small">
                    {form.componentProps.select
                      ? form.componentProps.options.map((option: any) => (
                          <option key={option.id} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : form?.heading
                      ? form?.heading
                      : null}
                  </form.component>
                </Grid>
              );
            }
          )}
        </Grid>
        {children}
      </FormProvider>
    </>
  );
};

export default ChildDaylogEventsReportInfo;
