import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import useEditSystemConfiguration from "./useEditSystemConfiguration";
import { editSystemConfigurationData } from ".";
import IsFetching from "@root/components/loaders/IsFetching";

const EditSystemConfiguration = (props: any) => {
  const {
    handleCloseForm,
    openEditModel,
    setOpenEditModel,
    systemConfigurationData,
    setSystemConfigurationData,
  } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    defaultValues,
    setSelectedDate,

    editSystemConfigurationFunction,
  } = useEditSystemConfiguration({
    systemConfigurationData,
    setOpenEditModel,
  });
  return (
    <div>
      <Dialog
        open={openEditModel}
        onClose={handleCloseForm}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {editSystemConfigurationFunction?.map((form: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                    <>
                      <Grid>
                        <form.component
                          disabled={false}
                          size="small"
                          {...form.otherOptions}
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
                    </>
                  </Grid>
                );
              })}

              <Grid item xs={12}>
                <Button
                  onClick={() => {
                    setSystemConfigurationData(null);
                  }}
                  type="submit"
                  sx={{
                    color: "#fff",
                    mr: 1,
                  }}
                  size="medium"
                  variant="contained"
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    setOpenEditModel(false);
                    setSystemConfigurationData(null);
                  }}
                  size="medium"
                  type="button"
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditSystemConfiguration;
