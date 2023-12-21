import {
  Backdrop,
  Box,
  Fade,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAddFormModal } from "./useAddFormModal";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};

const AddFormModal = (props: any) => {
  const { open, onClose } = props;
  const {
    methods,
    handleSubmit,
    router,
    submitManageFaqsDataForm,
    manageFaqsFormFields,
    postManageFaqsDataStatus,
    putManageFaqsDataStatus,
    theme,
    singleData,
  } = useAddFormModal(props);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            component="span"
            variant="h5"
            color={theme.palette.primary.main}
          >
            {`${router?.query?.action?.toString()?.toUpperCase()} FAQ`}
          </Typography>
          <IconButton onClick={onClose} style={{ float: "right" }}>
            <CloseRoundedIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
          {singleData?.isLoading ? (
            <SkeletonFormdata />
          ) : (
            <FormProvider
              methods={methods}
              onSubmit={handleSubmit(submitManageFaqsDataForm)}
            >
              <Grid container spacing={2}>
                {manageFaqsFormFields.map((form: any, index: number) => (
                  <Grid
                    item
                    xs={12}
                    md={form?.gridLength}
                    key={form.id + index}
                  >
                    <form.component {...form.componentProps} size="small">
                      {form.componentProps.select
                        ? form.componentProps.options.map((option: any) => (
                            <option key={option.label} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
                <LoadingButton
                  sx={{ marginRight: "1rem" }}
                  type="submit"
                  variant="contained"
                  disabled={
                    postManageFaqsDataStatus?.isLoading ||
                    putManageFaqsDataStatus?.isLoading
                  }
                >
                  Upload
                </LoadingButton>
              </Grid>
            </FormProvider>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddFormModal;
