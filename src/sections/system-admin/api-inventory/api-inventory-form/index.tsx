import * as Yup from "yup";
import { RHFRadioGroup, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const FormData = [
  {
    id: 1,
    md: 6,
    gridLength: 6,
    componentProps: {
      name: "api_name",
      label: "API Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },

  {
    id: 2,
    md: 6,
    gridLength: 6,
    componentProps: {
      name: "api_key",
      label: "API Key",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    id: 3,
    md: 6,
    gridLength: 6,
    componentProps: {
      name: "expiry_date",
      label: "Expiry Date",
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    md: 6,
    gridLength: 6,
    componentProps: {
      name: "api_link",
      label: "API Link",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    id: 5,
    md: 6,
    gridLength: 6,
    componentProps: {
      name: "api_link_name",
      label: "API Link Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },
  {
    id: 6,
    md: 6,
    gridLength: 6,
    componentProps: {
      name: "status",
      label: "Status",
      options: ["disabled", "active"],
    },
    component: RHFRadioGroupWithLabel,
  },
];

export const defaultValues = {
  api_name: "Nil",
  api_key: "Nil",
  expiry_date: new Date(),
  api_link: "Nil",
  api_link_name: "Nil",
  status: "active",
};
export const formatters: any = {};
export const formSchema = Yup.object().shape({
  api_name: Yup.string().trim().required("Field is Required"),
  api_key: Yup.string().trim().required("Field is Required"),
  expiry_date: Yup.date().required("Field is Required"),
  api_link: Yup.string().trim().required("Field is Required"),
  api_link_name: Yup.string().trim().required("Field is Required"),
});
