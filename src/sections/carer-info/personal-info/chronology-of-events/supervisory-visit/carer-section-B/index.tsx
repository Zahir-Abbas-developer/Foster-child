import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const carerSectionBetaData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "caringForChilds",
      label: "Caring of Children:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "workingWithTeam",
      label: "Working as part of a team:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "trainingAndDevelopment",
      label: "Training & Personal Development:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "carerPersonalIssue",
      label: "Carer Personal Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "agencyIssue",
      label: "Agency Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "safeCarerIssue",
      label: "Providing a Safe Enviroment / Safe Care Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "commendations",
      label: "Concerns / Allegations / Commendations:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "dayCare",
      label: "Day Care / Household Respite Carer and Respite Training:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    otherOptions: {
      name: "medicationSheetChecked",
      label: "Medication Sheet Checked",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerCommments",
      label: "Foster Carer comments on Supervision:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "lineManagerComments",
      label: "Line Managers's Comments on Supervision",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as CarerSectionBeta } from "./CarerSectionB";

export const defaultValues = {
  caringForChilds: "",
  workingWithTeam: "",
  trainingAndDevelopment: "",
  carerPersonalIssue: "",
  agencyIssue: "",
  safeCarerIssue: "",
  commendations: "",
  dayCare: "",
  medicationSheetChecked: true,
  fosterCarerCommments: "",
  lineManagerComments: "",
};

export const formSchema = Yup.object().shape({
  caringForChilds: Yup.string().required("required"),
  workingWithTeam: Yup.string().required("required"),
  trainingAndDevelopment: Yup.string().required("required"),
  carerPersonalIssue: Yup.string().required("required"),
  agencyIssue: Yup.string().required("required"),
  safeCarerIssue: Yup.string().required("required"),
  commendations: Yup.string().required("required"),
  dayCare: Yup.string().required("required"),
  medicationSheetChecked: Yup.boolean().required("required"),
  fosterCarerCommments: Yup.string().required("required"),
  lineManagerComments: Yup.string().required("required"),
});
