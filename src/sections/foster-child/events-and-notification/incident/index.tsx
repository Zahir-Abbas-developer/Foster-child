import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupBoolean from "@root/components/hook-form/RHFRadioGroupBoolean";
import * as Yup from "yup";

// export const Dummy = [
//   {
//     nameOfIncident: "ash",
//     dateOfIncident: "4/24/2002",
//     status: "pandiiiiiiiiiiiiiiiiiiiiing",
//   },
// ];

export const IncidentFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "urnNumber",
      label: "URN Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "personNotifiedToAgency",
      label: "Person notified to Agency",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "incidentDate",
      label: "Incident Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "agencyReportedDate",
      label: "Agency Reported Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "natureOfIncident",
      label: "Nature of Incident",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Accident", label: "Accident" }],
    component: RHFSelect,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "personCompletingReport",
      label: "Person Completing Report",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "agencySocialWorkerInvolved",
      label: "Agency Social Worker Involved",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "detailsOfIncident",
      label: "Details of Incident",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "actionTakenByAgency",
      label: "Action Taken by Agency",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "actionTakenByCarer",
      label: "Action Taken by Carer",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "reportedTo",
      label: "Reported To",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "outcomeOfIncident",
      label: "Outcome of Incident",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      name: "actionTaken",
      label: "Action Taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "teamManagerComments",
      label: "Team Manager Comments",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      label: "Has Registered Manager Informed",
      name: "hasRegisteredManagerInformed",
    },
    defaultValue: "Yes",
    component: RHFRadioGroupBoolean,
  },
  {
    id: 17,
    gridLength: 6,
    otherOptions: {
      name: "registeredManagerInformedDate",
      label: "Registered Manager Informed Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 18,
    gridLength: 12,
    otherOptions: {
      name: "registeredManagerRecommendation",
      label: "Register Manager Recommendation",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 6,
    otherOptions: {
      name: "schedule7Notification",
      label: "Schedule 7 Notification",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 20,
    gridLength: 6,
    otherOptions: {
      label: "Has Ofsted been Informed",
      name: "hasOfstedInformed",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 21,
    gridLength: 6,
    otherOptions: {
      name: "ofstedOnlineFormDate",
      label: "Ofsted Online Form Filled Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 22,
    gridLength: 12,
    otherOptions: {
      name: "ofstedActionTaken",
      label: "Ofsted Action Taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      name: "closureDate",
      label: "Closure Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 24,
    gridLength: 6,
    otherOptions: {
      name: "nextAlertDate",
      label: "Next Alert Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 25,
    gridLength: 6,
    otherOptions: {
      name: "restraintCarer",
      label: "Restraint Carer",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 26,
    gridLength: 6,
    otherOptions: {
      name: "investigationRequiredBy",
      label: "Investigation Required By",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 27,
    gridLength: 6,
    otherOptions: {
      label: "Has Acknowledged by",
      name: "hasAcknowledgedBy",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 28,
    gridLength: 6,
    otherOptions: {
      label: "Were Police Called to Home",
      name: "werePoliceCalled",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 29,
    gridLength: 12,
    otherOptions: {
      name: "reasonForConcern",
      label: "Reason for Concern",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 30,
    gridLength: 12,
    otherOptions: {
      label: "Has Outcome to OFSTED",
      name: "hasOutcomeToOfsted",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 31,
    gridLength: 12,
    otherOptions: {
      name: "hospitalAdmission",
      label: "Hospital Admission",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 32,
    gridLength: 12,
    otherOptions: {
      name: "section47Offences",
      label: "Section 47 Offences",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 33,
    gridLength: 12,
    otherOptions: {
      name: "deathRecord",
      label: "Death Record",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 34,
    gridLength: 12,
    otherOptions: {
      label: "Was Independent support offered during investigation",
      name: "independentSupportOffered",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 35,
    gridLength: 12,
    otherOptions: {
      name: "independentSupportOfferedInfo",
      label: "Independent support offered Info",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 36,
    gridLength: 12,
    otherOptions: {
      label: "Has Discussion with LADO taken Place",
      name: "discussionWithLado",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 37,
    gridLength: 12,
    otherOptions: {
      name: "ladoComments",
      label: "LADO Comments",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 38,
    gridLength: 12,
    otherOptions: {
      name: "followPlan",
      label: "Follow Plan",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  urnNumber: "",
  personNotifiedToAgency: "",
  incidentDate: new Date(),
  agencyReportedDate: new Date(),
  reviewDate: new Date(),
  natureOfIncident: "",
  personCompletingReport: "",
  agencySocialWorkerInvolved: "",
  detailsOfIncident: "",
  actionTakenByAgency: "",
  actionTakenByCarer: "",
  reportedTo: "",
  outcomeOfIncident: "",
  actionTaken: "",
  teamManagerComments: "",
  hasRegisteredManagerInformed: true,
  registeredManagerInformedDate: new Date(),
  registeredManagerRecommendation: "",
  schedule7Notification: "",
  hasOfstedInformed: true,
  ofstedOnlineFormDate: new Date(),
  ofstedActionTaken: "",
  closureDate: new Date(),
  nextAlertDate: new Date(),
  restraintCarer: "",
  investigationRequiredBy: "",
  hasAcknowledgedBy: true,
  werePoliceCalled: true,
  reasonForConcern: "",
  hasOutcomeToOfsted: true,
  hospitalAdmission: "",
  section47Offences: "",
  deathRecord: "",
  independentSupportOffered: true,
  independentSupportOfferedInfo: "",
  discussionWithLado: true,
  ladoComments: "",
  followPlan: "",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  urnNumber: Yup.string().required("Required"),
  personNotifiedToAgency: Yup.string().required("Required"),
  incidentDate: Yup.date().required("Required"),
  agencyReportedDate: Yup.date().required("Required"),
  reviewDate: Yup.date().required("Required"),
  natureOfIncident: Yup.string().required("Required"),
  personCompletingReport: Yup.string().required("Required"),
  agencySocialWorkerInvolved: Yup.string().required("Required"),
  detailsOfIncident: Yup.string().required("Required"),
  actionTakenByAgency: Yup.string().required("Required"),
  actionTakenByCarer: Yup.string().required("Required"),
  reportedTo: Yup.string().required("Required"),
  outcomeOfIncident: Yup.string().required("Required"),
  actionTaken: Yup.string().required("Required"),
  teamManagerComments: Yup.string().required("Required"),
  registeredManagerInformedDate: Yup.date().required("Required"),
  registeredManagerRecommendation: Yup.string().required("Required"),
  schedule7Notification: Yup.string().required("Required"),
  ofstedOnlineFormDate: Yup.date().required("Required"),
  ofstedActionTaken: Yup.string().required("Required"),
  closureDate: Yup.date().required("Required"),
  nextAlertDate: Yup.date().required("Required"),
  restraintCarer: Yup.string().required("Required"),
  investigationRequiredBy: Yup.string().required("Required"),
  reasonForConcern: Yup.string().required("Required"),
  hospitalAdmission: Yup.string().required("Required"),
  section47Offences: Yup.string().required("Required"),
  deathRecord: Yup.string().required("Required"),
  independentSupportOfferedInfo: Yup.string().required("Required"),
  ladoComments: Yup.string().required("Required"),
  followPlan: Yup.string().required("Required"),
});
