import React from "react";
import { FormProvider } from "../../../../components/hook-form";
import { Button, Card, Grid, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FosteredYoungPersonsCommentFormData } from ".";
import { useFosteredYoungPersonsCommentForm } from "./useFosteredYoungPersonsCommentForm";
import Comments from "@root/components/comment/Comment";
import RHFUploadImage from "@root/components/hook-form/RHFUploadImage";

export default function FosteredYoungPersonsCommentForm(props: any) {
  const router: any = useRouter();

  const { disabled } = props;
  const {
    methods,
    handleSubmit,
    // onSubmit,
    isSubmitting,
    // isError,
    // isSuccess,
    // isLoading,
  } = useFosteredYoungPersonsCommentForm();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={() => {}}>
        <Grid container spacing={4}>
          {FosteredYoungPersonsCommentFormData?.map((parent: any) => (
            <Grid item xs={12} key={parent?.id} md={parent?.md}>
              {parent?.child ? (
                parent?.child?.map((child: any) => (
                  <Grid
                    item
                    xs={12}
                    md={child?.md}
                    key={child?.id}
                    mb={child?.mb}
                    mt={child?.mt}
                  >
                    <child.component
                      disabled={disabled}
                      {...child?.componentProps}
                      fullWidth
                      size={"small"}
                    >
                      {child?.componentProps?.select &&
                        child?.options?.map((option: any) => (
                          <option key={option?.value} value={option?.value}>
                            {option?.label}
                          </option>
                        ))}
                    </child.component>
                  </Grid>
                ))
              ) : (
                <parent.component
                  disabled={disabled}
                  {...parent?.componentProps}
                  fullWidth
                  size={"small"}
                >
                  {parent?.componentProps?.select &&
                    parent?.options?.map((option: any) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))}
                </parent.component>
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              type="button"
              variant="contained"
              onClick={() => {
                router.push(
                  `/foster-child/child-reports/fostered-young-persons-comments?fosterChildId=${router?.query?.fosterChildId}`
                );
              }}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
      <Comments
        referenceType={"FOSTERED_YOUNG_PERSONS_COMMENTS"}
        fosterChildId={router?.query?.fosterChildId}
        ReportID={router?.query?.id}
      />
    </Card>
  );
}
