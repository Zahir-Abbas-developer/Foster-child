import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const OtherDocumentsFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Notice: Depending on the policy of the fostering service, the reviewing officer may be required to check other documents, such as:",
    otherOptions: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.fosterHomeSafetyCheck",
      label: "Foster home safety check",
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
      name: "otherDocuments.commentsFosterHomeSafetyCheck",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.unanxxuncedVisit",
      label: "Unanxxunced visit",
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
      name: "otherDocuments.commentsUnanxxuncedVisit",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.fireSafetyPlan",
      label: "Fire safety plan",
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
      name: "otherDocuments.commentsFireSafetyPlan",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.familySaferCaringPolicy",
      label: "Family safer caring policy",
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
      name: "otherDocuments.commentsFamilySaferCaringPolicy",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.petAssessments",
      label: "Pet assessments",
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
      name: "otherDocuments.commentsPetAssessments",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.smookingAgreement",
      label: "Smoking agreement",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.commentsSmookingAgreement",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.personalDevPlan",
      label: "Personal development plan",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.commentsPersonalDevPlan",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.completedTSDS",
      label: "Completed TSDS",
      fullWidth: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      name: "otherDocuments.commentsCompletedTSDS",
      label: "Comments",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 12,
    heading:
      "If any of these required documents are not available or issues have arisen from them, please comment:",
    component: Typography,
  },
  {
    id: 18,
    gridLength: 12,
    otherOptions: {
      name: "otherDocuments.comments",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
