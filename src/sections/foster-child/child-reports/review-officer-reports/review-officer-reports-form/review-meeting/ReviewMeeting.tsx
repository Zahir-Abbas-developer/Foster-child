import React from "react";
import { ReviewFormData } from ".";
import { Grid } from "@mui/material";

export const ReviewMeeting = () => {
  return (
    <Grid container spacing={3}>
      {ReviewFormData?.map((form: any) => {
        return (
          <Grid item xs={12} md={form?.gridLength} key={form?.id}>
            <Grid>
              <form.component size="small" {...form.componentProps} disabled>
                {form.componentProps
                  ? form.options?.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
                {form?.heading}
              </form.component>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
