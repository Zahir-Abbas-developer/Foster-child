import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
export const BCPHistoryFormValue = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "steps_taken",
      label: "Step Taken",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "outcome_name",
      label: "Outcome Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "invoked_at",
      label: "Invoked Date",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      name: "manager",
      label: "BCP Manager (Role)",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const BCPHistoryValue = {
  steps_taken: "",
  outcome_name: "",
  invoked_at: new Date(),
  manager: "",
};

export const formet = Yup.object().shape({
  steps_taken: Yup.string().required("required"),
  outcome_name: Yup.string().required("required"),
  invoked_at: Yup.date().required("required"),
  manager: Yup.string().required("required"),
});
