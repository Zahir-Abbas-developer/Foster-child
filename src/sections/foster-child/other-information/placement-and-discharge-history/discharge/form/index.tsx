import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const formData = [
  {
    id: 1,
    componentProps: {
      name: "childName",
      label: "Child Name (Code)",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "placementDate",
      label: "Placement Date",
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "placementType",
      label: "Placement Type",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "dischargeDate",
      label: "Discharge Date",
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "isRespite",
      label: "Is Respite",
      select: true,
    },
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
  {
    id: 6,
    componentProps: {
      name: "dischargeReason",
      label: "Discharge Reason",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];

export const defaultValues = {
  childName: "", //1
  placementDate: new Date(), //2
  placementType: "", //3
  dischargeDate: new Date(), //4
  isRespite: "", //5
  dischargeReason: "", //6
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().trim().required("Field is Required"),
  placementDate: Yup.date().required("Field is Required"),
  placementType: Yup.string().trim().required("Field is Required"),
  dischargeDate: Yup.date().required("Field is Required"),
  isRespite: Yup.boolean().required("Field is Required"),
  dischargeReason: Yup.string().trim().required("Field is Required"),
});

export { default as DischargeForm } from "./DischargeForm";
