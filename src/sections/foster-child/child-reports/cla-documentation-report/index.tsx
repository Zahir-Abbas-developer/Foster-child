import {
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
import { Typography } from "@mui/material";

//Form

export const ClaDocumentationReportData = [
  {
    id: 1,
    heading: "Foster Placement Agreement",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "agreementDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "agreementOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "agreementCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },

  {
    id: 5,
    heading: "Placement Information Record / Placement Plan",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "placementPlanDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "placementPlanOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "placementPlanCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 9,
    heading: "Local Authority Placement Plan",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "localAuthorityPlacementPlanDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "localAuthorityPlacementPlanOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "localAuthorityPlacementPlanComment",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 13,
    heading: "Local Authority Risk Plan",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      name: "riskAssessmentDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      name: "riskAssessmentOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 16,
    gridLength: 12,
    otherOptions: {
      name: "riskAssessmentCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 17,
    heading: "Delegated Authority",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 18,
    gridLength: 6,
    otherOptions: {
      name: "delegatedAuthorityDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 19,
    gridLength: 6,
    otherOptions: {
      name: "delegatedAuthorityOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 20,
    gridLength: 12,
    otherOptions: {
      name: "delegatedAuthorityComment",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 21,
    heading: "CLA Medical Date",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      name: "CLAMedicalDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      name: "CLAMedicalOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 24,
    gridLength: 12,
    otherOptions: {
      name: "CLAMedicalCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 25,
    heading: "CLA Review Date",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 26,
    gridLength: 6,
    otherOptions: {
      name: "CLAReviewDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 27,
    gridLength: 6,
    otherOptions: {
      name: "CLAReviewOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 28,
    gridLength: 12,
    otherOptions: {
      name: "CLAReviewCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 29,
    heading: "CLA Plan Pt1 Date",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 30,
    gridLength: 6,
    otherOptions: {
      name: "carePlanPt1Date",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 31,
    gridLength: 6,
    otherOptions: {
      name: "carePlanPt1OnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 32,
    gridLength: 12,
    otherOptions: {
      name: "carePlanPt1Commnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 33,
    heading: "CLA Plan Pt2 Date",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 34,
    gridLength: 6,
    otherOptions: {
      name: "carePlanPt2Date",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 35,
    gridLength: 6,
    otherOptions: {
      name: "carePlanPt2OnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 36,
    gridLength: 12,
    otherOptions: {
      name: "carePlanPt2Commnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 37,
    heading: "PEP Date",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 38,
    gridLength: 6,
    otherOptions: {
      name: "PEPDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 39,
    gridLength: 6,
    otherOptions: {
      name: "PEPOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 40,
    gridLength: 12,
    otherOptions: {
      name: "PEPCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 41,
    heading: "EHCP Date",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 42,
    gridLength: 6,
    otherOptions: {
      name: "EHCPDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 43,
    gridLength: 6,
    otherOptions: {
      name: "EHCPOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 44,
    gridLength: 12,
    otherOptions: {
      name: "EHCPCommne",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 45,
    heading: "Pathway PLan",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 46,
    gridLength: 6,
    otherOptions: {
      name: "pathwayPlanDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 47,
    gridLength: 6,
    otherOptions: {
      name: "pathwayPlanOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 48,
    gridLength: 12,
    otherOptions: {
      name: "pathwayPlanCommnet",
      label: "Comments",
      fullWidth: true,
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 49,
    heading: "Grab Pack",
    fullWidth: true,
    otherOptions: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 50,
    gridLength: 6,
    otherOptions: {
      name: "grabPackDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 51,
    gridLength: 6,
    otherOptions: {
      name: "grabPackOnFile",
      label: "On File",
      fullWidth: true,
      select: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },

    component: RHFSelect,
    md: 6,
  },
  {
    id: 52,
    gridLength: 12,
    otherOptions: {
      name: "grabPackCommnet",
      label: "Comments",
      sx: { mb: 2 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];

// EHCP Form Default Values
export const ClaDocumentationReportValue = {
  agreementDate: new Date(),
  agreementOnFile: "",
  agreementCommnet: "",

  placementPlanDate: new Date(),
  placementPlanOnFile: "",
  placementPlanCommnet: "",

  localAuthorityPlacementPlanDate: new Date(),
  localAuthorityPlacementPlanOnFile: "",
  localAuthorityPlacementPlanComment: "",

  riskAssessmentDate: new Date(),
  riskAssessmentOnFile: "",
  riskAssessmentCommnet: "",

  delegatedAuthorityDate: new Date(),
  delegatedAuthorityOnFile: "",
  delegatedAuthorityComment: "",

  CLAMedicalDate: new Date(),
  CLAMedicalOnFile: "",
  CLAMedicalCommnet: "",

  CLAReviewDate: new Date(),
  CLAReviewOnFile: "",
  CLAReviewCommnet: "",

  carePlanPt1Date: new Date(),
  carePlanPt1OnFile: "",
  carePlanPt1Commnet: "",

  carePlanPt2Date: new Date(),
  carePlanPt2OnFile: "",
  carePlanPt2Commnet: "",

  PEPDate: new Date(),
  PEPOnFile: "",
  PEPCommnet: "",

  EHCPDate: new Date(),
  EHCPOnFile: "",
  EHCPCommnet: "",

  pathwayPlanDate: new Date(),
  pathwayPlanOnFile: "",
  pathwayPlanCommnet: "",

  grabPackDate: new Date(),
  grabPackOnFile: "",
  grabPackCommnet: "",
};

export const FormSchema = Yup.object().shape({
  agreementDate: Yup.date().required("required"),
  agreementOnFile: Yup.string().required("required"),
  agreementCommnet: Yup.string().required("required"),

  placementPlanDate: Yup.date().required("required"),
  placementPlanOnFile: Yup.string().required("required"),
  placementPlanCommnet: Yup.string().required("required"),

  localAuthorityPlacementPlanDate: Yup.date().required("required"),
  localAuthorityPlacementPlanOnFile: Yup.string().required("required"),
  localAuthorityPlacementPlanComment: Yup.string().required("required"),

  riskAssessmentDate: Yup.date().required("required"),
  riskAssessmentOnFile: Yup.string().required("required"),
  riskAssessmentCommnet: Yup.string().required("required"),

  delegatedAuthorityDate: Yup.date().required("required"),
  delegatedAuthorityOnFile: Yup.string().required("required"),
  delegatedAuthorityComment: Yup.string().required("required"),

  CLAMedicalDate: Yup.date().required("required"),
  CLAMedicalOnFile: Yup.string().required("required"),
  CLAMedicalCommnet: Yup.string().required("required"),

  CLAReviewDate: Yup.date().required("required"),
  CLAReviewOnFile: Yup.string().required("required"),
  CLAReviewCommnet: Yup.string().required("required"),

  carePlanPt1Date: Yup.date().required("required"),
  carePlanPt1OnFile: Yup.string().required("required"),
  carePlanPt1Commnet: Yup.string().required("required"),

  carePlanPt2Date: Yup.date().required("required"),
  carePlanPt2OnFile: Yup.string().required("required"),
  carePlanPt2Commnet: Yup.string().required("required"),

  PEPDate: Yup.date().required("required"),
  PEPOnFile: Yup.string().required("required"),
  PEPCommnet: Yup.string().required("required"),

  EHCPDate: Yup.date().required("required"),
  EHCPOnFile: Yup.string().required("required"),
  EHCPCommnet: Yup.string().required("required"),

  pathwayPlanDate: Yup.date().required("required"),
  pathwayPlanOnFile: Yup.string().required("required"),
  pathwayPlanCommnet: Yup.string().required("required"),

  grabPackDate: Yup.date().required("required"),
  grabPackOnFile: Yup.string().required("required"),
  grabPackCommnet: Yup.string().required("required"),
});
