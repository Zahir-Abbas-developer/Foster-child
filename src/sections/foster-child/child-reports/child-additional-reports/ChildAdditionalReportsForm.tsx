import React from "react";
import { FormProvider } from "../../../../components/hook-form";
import { Button, Card, Grid, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChildAdditionlReportFormData } from ".";
import { useChildAdditionalReportForm } from "./useChildAdditionalReportsForm";
import Comments from "@root/components/comment/Comment";

export default function ChildAdditionalReportForm(props: any) {
  const router: any = useRouter();
  const theme: any = useTheme();

  const { disabled } = props;
  const {
    methods,
    handleSubmit,
    // onSubmit,
    isSubmitting,
    // isError,
    // isSuccess,
    // isLoading,
  } = useChildAdditionalReportForm();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={() => {}}>
        <Grid container spacing={4}>
          {ChildAdditionlReportFormData?.map((item) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                disabled={disabled}
                {...item.componentProps}
                size={"small"}
                fullWidth
              >
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))
                  : null}
              </item.component>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Link
              href={`/foster-child/child-reports/child-additional-reports?fosterChildId=${router?.query?.fosterChildId}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                type="button"
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
      <Comments
        referenceType={"CHILD_ADDITIONAL_REPORT"}
        fosterChildId={router?.query?.fosterChildId}
        ReportID={router?.query?.id}
      />
    </Card>
  );
}
