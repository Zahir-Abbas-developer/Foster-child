import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
export const BCPFormValue = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "type",
      label: "BCP Type",
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
      name: "document_name",
      label: "Marketing Plan",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "approved_by",
      label: "Approved By",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "approved_date",
      label: "Approved Date",
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

export const BCPValue = {
  type: "",
  document_name: "",
  approved_by: "",
  approved_date: new Date(),
  manager: "",
};

export const formet = Yup.object().shape({
  type: Yup.string().required("required"),
  document_name: Yup.string().required("required"),
  approved_by: Yup.string().required("required"),
  approved_date: Yup.date().required("required"),
  manager: Yup.string().required("required"),
});
