import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Fade, Grid, Modal, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  ReferenceDataManagementCategoriesFormData,
  ReferenceDataManagementCategoriesFormSchema,
  ReferenceDataManagementCategoriesdefaultValues,
} from ".";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TableAction from "@root/components/TableAction";
import Typography from "@root/theme/overrides/Typography";

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
export default function AddReferenceDataForm(props: any) {
  const {
    content,
    readOnly,
    btnType,
    openModal,
    closeModal,
    formData,
    status,
    modalStatus,
  }: any = props;

  const theme: any = useTheme();
  const [open, setOpen] = useState(false);

  // const selectedRow = content?.row?.original;

  const handleOpen = () => {
    modalStatus(true);
    setOpen(true);
  };
  const handleClose = useCallback(() => {
    modalStatus(false);
    setOpen(false);
    !readOnly && closeModal(false);
  }, [modalStatus, setOpen, closeModal, readOnly]);

  useEffect(() => {}, []);

  useEffect(() => {
    status?.isSuccess && handleClose();
  }, [status?.isSuccess]);

  return (
    <div>
      {btnType && (
        <TableAction type={btnType} onClicked={handleOpen} size="small" />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal || open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal || open}>
          <Box sx={style}>
            <FormPiece
              disableForm={readOnly}
              selectedRow={content}
              formData={formData}
              isError={status?.isError}
              isLoading={status?.isLoading}
            >
              <Button
                size="small"
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.dark },
                }}
                onClick={handleClose}
              >
                {readOnly ? "Close" : "Cancel"}
              </Button>
            </FormPiece>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
const FormPiece = (props: any) => {
  const { disableForm, children, selectedRow, formData, isError, isLoading } =
    props;

  //-------------------------------------------//

  //-----------------------------------------------//

  const methods: any = useForm({
    resolver: yupResolver(ReferenceDataManagementCategoriesFormSchema),
    defaultValues:
      selectedRow ?? ReferenceDataManagementCategoriesdefaultValues,
  });
  const { reset, handleSubmit } = methods;
  console.log(selectedRow);
  const onSubmit = (data: any) => {
    formData(data);
    // reset();
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {ReferenceDataManagementCategoriesFormData.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <form.component
                {...form.componentProps}
                size="small"
                disabled={disableForm}
              />
            </Grid>
          );
        })}
        <Grid
          item
          xs={12}
          md={12}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {!disableForm && (
            <LoadingButton
              size="small"
              loading={isLoading}
              type="submit"
              variant="contained"
              color={isError ? "error" : "primary"}
              sx={{
                mt: 1,
              }}
            >
              {isError ? "Try Again" : "Submit"}
            </LoadingButton>
          )}
          {children}
        </Grid>
      </Grid>
    </FormProvider>
  );
};
