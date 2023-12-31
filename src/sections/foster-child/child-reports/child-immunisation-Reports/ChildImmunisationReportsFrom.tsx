import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "@root/components/hook-form";
import router from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";
import { FormSchema, childImmunisationReportsData } from ".";
import Comments from "@root/components/comment/Comment";
import useChildImmunisationReports from "./useChildImmunisationReports";

const backPath =
  "/foster-child/child-reports/child-immunisation-details-report";
interface IChildImmunisationReportsFrom {
  fosterChildId: string;
  ChildImmunisationReportID?: string;
  action: "add" | "edit" | "view";
}

const ChildImmunisationReportsFrom = (props: IChildImmunisationReportsFrom) => {
  //PROPS AND STATS
  const { action, fosterChildId, ChildImmunisationReportID } = props;
  const theme: any = useTheme();
  //API HANDLERS HOOK
  const { SubmitData, getDefaultValue, isloading, isFatching } =
    useChildImmunisationReports({
      action: action,
      fosterChildId: fosterChildId,
      ChildImmunisationReportID: ChildImmunisationReportID,
    });
  //FORM HOOKS
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: getDefaultValue,
  });
  const { handleSubmit } = methods;
  if (isloading) return <SkeletonFormdata />;
  return (
    <Box sx={{ px: 0, py: 0.1 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit(SubmitData)}>
            <Grid container>
              <IsFetching isFetching={isFatching} />
              {childImmunisationReportsData.map((form: any, index) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={index}>
                    <Box sx={{ pr: 1, py: 1 }}>
                      {form.component === "label" ? (
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.grey[600],
                            fontWeight: theme.typography.fontWeightMedium,
                          }}
                        >
                          {form.label}
                        </Typography>
                      ) : (
                        <form.component
                          size="small"
                          {...form.otherOptions}
                          disabled={action === "view" ? true : false}
                          InputLabelProps={{
                            shrink: action === "view" ? true : undefined,
                            disabled: action === "view" ? true : undefined,
                          }}
                        >
                          {form.otherOptions.select &&
                            form.otherOptions.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                        </form.component>
                      )}
                    </Box>
                  </Grid>
                );
              })}

              <Grid
                item
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  px: 0.9,
                }}
                xs={12}
              >
                {action === "edit" || action === "add" ? (
                  <Button
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      "&:hover": { bgcolor: theme.palette.primary.main },
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                ) : null}

                <Button
                  sx={{
                    bgcolor: theme.palette.orange.main,
                    "&:hover": { bgcolor: theme.palette.orange.main },
                  }}
                  variant="contained"
                  onClick={() =>
                    router.push({
                      pathname: `${backPath}`,
                      query: {
                        fosterChildId: fosterChildId,
                      },
                    })
                  }
                >
                  back
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
          <Comments
            referenceType={"CHILD_IMMUNISATION_REPORT"}
            fosterChildId={fosterChildId}
            ReportID={ChildImmunisationReportID}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChildImmunisationReportsFrom;
