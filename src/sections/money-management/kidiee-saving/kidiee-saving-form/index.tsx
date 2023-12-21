import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const kidieeSavingData = [
  {
    id: 1,
    componentProps: {
      name: "date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "amountPounds",
      label: "Amount",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "category",
      label: "Category",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "purposeComment",
      label: "Purpose / Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 5,
    componentProps: {
      name: "total",
      label: "Total",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "subTotal",
      label: "Sub Total",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
];

export const kidieeSavingtValidation = Yup.object().shape({
  date: Yup.date().required("Required"),
  amountPounds: Yup.string().required("Required"),
  purposeComment: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  total: Yup.string().required("Required"),
  subTotal: Yup.string().required("Required"),
});

export const defaultValueskidieeSaving = {
  date: new Date(),
  amountPounds: "",
  purposeComment: "",
  category: "",
  total: "",
  subTotal: "",
};
