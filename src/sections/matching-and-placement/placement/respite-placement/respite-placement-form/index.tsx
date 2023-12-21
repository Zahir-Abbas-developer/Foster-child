import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const defaultValues = {
  childName: "",
  primaryCarer: "",
  respiteCarerName: "",
  respiteStartDate: new Date(),
  respiteEndDate: new Date(),
  respitePlan: "",
  approvedBy: "",
  localAuthority: "",
  localAuthoritySW: "",
  status: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  primaryCarer: Yup.string().required("Field is required"),
  respiteCarerName: Yup.string().required("Field is required"),
  respiteStartDate: Yup.date().required("Field is required"),
  respiteEndDate: Yup.date().required("Field is required"),
  respitePlan: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  localAuthoritySW: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Primary Carer",
      name: "primaryCarer",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Respite Carer Name",
      name: "respiteCarerName",
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Respite(Start Date)",
      name: "respiteStartDate",
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Respite(End Date)",
      name: "respiteEndDate",
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Respite Plan",
      name: "respitePlan",
      fullWidth: true,
    },
    // requireFileUpload: true,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Approved by(Role)",
      name: "approvedBy",
      select: true,
      options: [{ value: "select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "Local Authority",
      name: "localAuthority",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "Local Authority SW",
      name: "localAuthoritySW",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      label: "Status",
      name: "status",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
];
export const formatters: any = {};
for (const formControl of formFields) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}
