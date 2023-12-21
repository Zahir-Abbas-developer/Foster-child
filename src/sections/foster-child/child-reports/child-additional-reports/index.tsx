import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";

export const defaultValues = {
  acknowledgedment: "",
  acknowledgedBy: "",
  name: "",
  position: "",
  nameOfChildren: "",
  nameOfFosterCarer: "",
  describeRole: "",
  fosterCarerMet: "",
  strengthOfFosterCarer: "",
  fosterCarerCommunication: "",
  extraComment: "",
  signDate: new Date(),
  signature: "",
};
export const ChildAdditionlReportFormData = [
  {
    id: 1,
    componentProps: {
      name: "acknowledgedment",
      label: "Acknowledgedment",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 2,
    componentProps: {
      name: "acknowledgedBy",
      label: "Acknowledged By",
      select: true,
    },
    component: RHFSelect,
    md: 12,
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 3,
    componentProps: {
      name: "name",
      label: "Name",
      multiline: true,

      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "position",
      label: "Position",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 4,
    componentProps: {
      name: "nameOfChildren",
      label: "Name of child/children",
      multiline: true,

      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "nameOfFosterCarer",
      label: "Name of foster carer",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 6,
    componentProps: {
      name: "describeRole",
      label:
        "Briefly describe your role with the child/children and foster carer, including the nature and frequency of contact.",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 7,
    componentProps: {
      name: "fosterCarerMet",
      label:
        "How has the foster carer met the health/education/other needs of the child/ children in placement?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 8,
    componentProps: {
      name: "strengthOfFosterCarer",
      label: "Please comment on the strengths of the foster carer",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 9,
    componentProps: {
      name: "",
      label:
        "Please comment on any limitations of the foster carer or their household. Do you believe that there are areas where the carer could benefit from additional advice or training?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 10,
    componentProps: {
      name: "fosterCarerCommunication",
      label:
        "How well has the foster carer communicated with you/your organisation?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 11,
    componentProps: {
      name: "extraComment",
      label: "Is there anything else you would like to say?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 12,
  },
  {
    id: 12,
    componentProps: {
      name: "name",
      label: "Signed",
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 13,
    componentProps: { name: "signDate", label: "Date:" },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
    md: 6,
  },
  {
    id: 14,
    componentProps: {
      name: "signature",
      label: "Signature",
    },
    component: SignaturePad,
    md: 4,
  },
];
