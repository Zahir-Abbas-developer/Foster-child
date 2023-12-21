import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

export const FostringServiceManagerReportFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "fosterCarer",
      label: "Name of foster carer *",
      fullWidth: true,
      select: true,
      sx: { mb: 2 },
    },
    options: [
      { value: "", label: "Select Vaue" },
      { value: "Name", label: "Kuch bhi" },
    ],
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "dateOfReview",
      label: "Date of review meeting *",
      fullWidth: true,
      sx: { mb: 2 },
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "recommendation",
      label: "Recommendation *",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "reasons",
      label: "Reasons *",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments *",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    heading:
      "Declaration: This view (Consisting of Form FR Section A-H) is ready to be considered by the fostering part of the decision maker. (delete as appropriate).",
    component: Typography,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "serviceManager",
      label: "Name of fostering service manager *",
      fullWidth: true,
      select: true,
      sx: { mb: 2 },
    },
    options: [
      { value: "", label: "Select Vaue" },
      { value: "Olive Yew", label: "Olive Yew" },
    ],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "createdDate",
      label: "Date *",
      fullWidth: true,
      sx: { mb: 2 },
    },
    component: RHFDatePicker,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "signedByFoster",
      label: "Signed by fostering service manager *",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: SignaturePad,
  },
];

export const defaultValuesFosterManagerReport = {
  comments: "",
  createdAt: "",
  createdBy: "",
  createdDate: new Date(),
  dateOfReview: new Date(),
  fosterCarer: "",
  fosterChildId: "",
  reasons: "",
  recommendation: "",
  serviceManager: "",
  signedByFoster: "",
};
