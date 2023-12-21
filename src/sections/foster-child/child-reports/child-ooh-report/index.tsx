import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const childReportData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "outOfHours",
      label: "Out of Hours",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "incidentType",
      label: "OOH Incident Type",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: 0, label: 0 },
      { value: 1, label: 1 },
    ],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "dateTime",
      label: "Date / Time of Occurance",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "incidentDescription",
      label: "Incident Description",
      multiline: true,
      rows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    Options: [true, false],
    otherOptions: {
      name: "isHospitalizationResolved",
      label: "Did it resolved Hospitalisation?",
    },
    component: "RadioGroup",
  },
  {
    id: 6,
    gridLength: 12,
    Options: [true, false],
    otherOptions: {
      name: "isPoliceInvolved",
      label: "Did it involved Police?",
    },
    component: "RadioGroup",
  },
];

export const formatters: any = {};

for (const formControl of childReportData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  outOfHours: new Date(),
  incidentType: "",
  dateTime: new Date(),
  incidentDescription: "",
  comments: "",
  isHospitalizationResolved: null,
  isPoliceInvolved: null,
};
export const formSchema = Yup.object().shape({
  outOfHours: Yup.date().required("Required"),
  incidentType: Yup.string().required("Required"),
  dateTime: Yup.date().required("Required"),
  incidentDescription: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
  isHospitalizationResolved: Yup.boolean().required("Required"),
  isPoliceInvolved: Yup.boolean().required("Required"),
});
