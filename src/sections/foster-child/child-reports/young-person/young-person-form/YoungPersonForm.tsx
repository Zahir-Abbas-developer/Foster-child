import React from "react";
import { Card, Grid, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Comments from "@root/components/comment/Comment";
import { defaultValues, youngPersonFormData } from ".";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const YoungPersonForm = ({
  data = defaultValues,
  isLoading,
  onSubmitHanlder,
}: any) => {
  console.log(data);

  const router = useRouter();
  const theme: any = useTheme();

  const methods: any = useForm({
    // resolver: yupResolver(areaOfficeFormSchema),
    defaultValues: data,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data: any) => {
    onSubmitHanlder(data);
  };
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {youngPersonFormData?.map((parent: any) => (
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
                      disabled
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
                  disabled
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
        </Grid>
      </FormProvider>
      <Comments
        referenceType={"YOUNG_PERSON_HOUSEHOLD"}
        fosterChildId={router?.query?.fosterChildId as string}
        ReportID={router?.query?.id as string}
      />
    </Card>
  );
};

export default YoungPersonForm;
