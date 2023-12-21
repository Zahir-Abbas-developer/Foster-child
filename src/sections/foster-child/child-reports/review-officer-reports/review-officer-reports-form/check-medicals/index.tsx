import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const CheckMedicalFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Notice: When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of the foster carer(s)",
    otherOptions: {
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.dbsFosterCarers",
      label: "DBS foster carers",
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.commentsForCarers",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.dbsHouseholdMembers",
      label: "DBS household members",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.commentsForMembers",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.dbsNonHouseholdMembers",
      label: "DBS non-household members",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.commentsForNonMembers",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.dbsChecksAndUpdates",
      label: "DBS checks / updates",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.commentsForDbs",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.otherCheck",
      label: "Other",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "checksAndMedicals.commentsForOthers",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    heading:
    "If any required checks are not available or issues have arisen from the checks, please comment:",
    component: Typography,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "checksAndMedicals.comments",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: {mt: -2}
    },
    component: RHFTextField,
  },
];
