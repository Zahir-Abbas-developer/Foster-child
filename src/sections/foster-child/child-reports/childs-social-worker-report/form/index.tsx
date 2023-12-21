import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFInputWithLabel } from "@root/components/hook-form/RHFInputWithLabel";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from "yup";

export const LaDetailsFormData = [
  {
    id: 1,
    componentProps: {
      name: "acknowledgement",
      text: "Acknowledgment",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 2,
    componentProps: {
      name: "acknowledgedBy",
      label: "Acknowledgment By",
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 3,
    componentProps: {
      name: "nameOfChild",
      label: "Name of Child",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "socialWorkerName",
      label: "Name of Social Worker",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "fosterCarers",
      label: "Name of Foster Carer(s)",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "localAuthority",
      label: "Local Authority",
    },
    component: RHFTextField,
    md: 6,
  },
  // TSD 1
  {
    id: 6.1,
    heading: "TSD 1 - Principles and Values",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      textAlign: "center",
    },
    component: Typography,
  },
  {
    id: 6.2,
    componentProps: {
      text: "Individual Needs of Children",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 7,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "individualChildNeeds",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 7.1,
    componentProps: {
      text: "Does the foster carer listen to and take account of the individual needs, wishes, feelings and preferences of the child or young person?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 8,
    componentProps: {
      name: "individualChildNeedsComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 8.1,
    componentProps: {
      text: "Confidentiality",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 9,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "confidentiality",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 9.1,
    componentProps: {
      text: "Does the foster carer comply with your expectations around confidentiality?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 10,
    componentProps: {
      name: "confidentialityComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  // TSD 2
  {
    id: 10.1,
    heading: "TSD 2 - Roles as a Foster Carer",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      textAlign: "center",
    },
    component: Typography,
  },
  {
    id: 10.2,
    componentProps: {
      text: "Working as Part of a Team",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 11,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "workingAsPartTeam",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 11.1,
    componentProps: {
      text: "Does the foster carer work effictively with you as the child or young person's social worker, and other professionals, including contributing to planning, and communication effectively?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 12,
    componentProps: {
      name: "workingAsPartTeamComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 12.1,
    componentProps: {
      text: "Working with Birth Family",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 13,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "workingBirthTeam",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 13.1,
    componentProps: {
      text: "Does the foster carer understand the importance of the child or young person's birth family, and work to support and promote contact where appropriate?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 14,
    componentProps: {
      name: "workingBirthTeamComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  // TSD 3
  {
    id: 14.1,
    heading: "TSD 3 - Health Care",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      textAlign: "center",
    },
    component: Typography,
  },
  {
    id: 14.2,
    componentProps: {
      text: "Health Physical and Emotional Care",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 15,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "healthPhysicalEmotional",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 15.1,
    componentProps: {
      text: "Does the foster carer promote the health physical and emotional care of the child or young person, including their sexual health (Where appropriate)?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 16,
    componentProps: {
      name: "healthPhysicalEmotionalComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 16.1,
    componentProps: {
      text: "Managing Behaviour",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 17,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "managingBehaviour",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 17.1,
    componentProps: {
      text: "Does the foster carer promote positive behaviour and manage any challenging behaviour safely and appropriately?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 18,
    componentProps: {
      name: "managingBehaviourComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  // TSD 4
  {
    id: 18.1,
    heading: "TSD 4 - Communicating Effectively",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      textAlign: "center",
    },
    component: Typography,
  },
  {
    id: 18.2,
    componentProps: {
      text: "Communicating with Children",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 19,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "communicationWithChild",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 19.1,
    componentProps: {
      text: "Does the foster carer communicate effectively with the child or young person according to their age and stage of development, and encourage them to make their own decisions as appropriate?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 20,
    componentProps: {
      name: "communicationWithChildComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  // TSD 5
  {
    id: 20.1,
    heading: "TSD 5 - Understanding Development",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      textAlign: "center",
    },
    component: Typography,
  },
  {
    id: 20.2,
    componentProps: {
      text: "Education",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 21,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "education",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 21.1,
    componentProps: {
      text: "Does the foster carer support the child or young person in realtion to education, training, and employment, including advocating that their educational needs are met?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 22,
    componentProps: {
      name: "educationComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  // TSD 6
  {
    id: 22.1,
    heading: "TSD 6 - Keeping Children Safe",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      textAlign: "center",
    },
    component: Typography,
  },
  {
    id: 22.2,
    componentProps: {
      text: "Keeping Children Safe",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 23,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "keepChildSafe",
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: 23.1,
    componentProps: {
      text: "Does the foster carer keep the child or young person safe, and feeling safe, and help the child or young person keep themselves safe, including communication with them about risk and safety?",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        mt: { sx: 0, md: "-50px" },
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 24,
    componentProps: {
      name: "keepChildSafeComments",
      text: "Comments",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  // TSD end
  {
    id: 24.2,
    componentProps: {
      text: "Additional Comments",
      Component: Typography,
      typographyProps: {
        variant: "body2",
        fontWeight: "bold",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 25,
    componentProps: {
      name: "additionalComments",
      text: "If you have any additional comments, particularly any concerns that you might have, please provide details.",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 26,
    componentProps: {
      name: "signedChildSocialWorker",
      label: "Signed (Child's Social Worker)",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 27,
    componentProps: {
      name: "signedDate",
      label: "Date",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 28,
    componentProps: {
      name: "signature",
      label: "Signature",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
];

export const defaultValues = {
  acknowledgement: "", //1
  acknowledgedBy: "", //2
  nameOfChild: "", //3
  socialWorkerName: "", //4
  fosterCarers: "", //5
  localAuthority: "", //6
  individualChildNeeds: "", //7
  individualChildNeedsComments: "", //8
  confidentiality: "", //9
  confidentialityComments: "", //10
  workingAsPartTeam: "", //11
  workingAsPartTeamComments: "", //12
  workingBirthTeam: "", //13
  workingBirthTeamComments: "", //14
  healthPhysicalEmotional: "", //15
  healthPhysicalEmotionalComments: "", //16
  managingBehaviour: "", //17
  managingBehaviourComments: "", //18
  communicationWithChild: "", //19
  communicationWithChildComments: "", //20
  education: "", //21
  educationComments: "", //22
  keepChildSafe: "", //23
  keepChildSafeComments: "", //24
  additionalComments: "", //25
  signedChildSocialWorker: "", //26
  signedDate: new Date(), //27
  signature: null, //28
};

export const validationSchema = Yup.object().shape({
  acknowledgement: Yup.string().trim().required("Field is Required"),
  acknowledgedBy: Yup.string().trim().required("Field is Required"),
  nameOfChild: Yup.string().trim().required("Field is Required"),
  socialWorkerName: Yup.string().trim().required("Field is Required"),
  fosterCarers: Yup.string().trim().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  individualChildNeeds: Yup.string().trim().required("Field is Required"),
  individualChildNeedsComments: Yup.string()
    .trim()
    .required("Field is Required"),
  confidentiality: Yup.string().trim().required("Field is Required"),
  confidentialityComments: Yup.string().trim().required("Field is Required"),
  workingAsPartTeam: Yup.string().trim().required("Field is Required"),
  workingAsPartTeamComments: Yup.string().trim().required("Field is Required"),
  workingBirthTeam: Yup.string().trim().required("Field is Required"),
  workingBirthTeamComments: Yup.string().trim().required("Field is Required"),
  healthPhysicalEmotional: Yup.string().trim().required("Field is Required"),
  healthPhysicalEmotionalComments: Yup.string()
    .trim()
    .required("Field is Required"),
  managingBehaviour: Yup.string().trim().required("Field is Required"),
  managingBehaviourComments: Yup.string().trim().required("Field is Required"),
  communicationWithChild: Yup.string().trim().required("Field is Required"),
  communicationWithChildComments: Yup.string()
    .trim()
    .required("Field is Required"),
  education: Yup.string().trim().required("Field is Required"),
  educationComments: Yup.string().trim().required("Field is Required"),
  keepChildSafe: Yup.string().trim().required("Field is Required"),
  keepChildSafeComments: Yup.string().trim().required("Field is Required"),
  additionalComments: Yup.string().trim().required("Field is Required"),
  signedChildSocialWorker: Yup.string().trim().required("Field is Required"),
  date: Yup.date().required("Date is required"),
  signature: Yup.mixed()
    .nullable()
    .required("Signature Of Interviewee is required"),
});

export { default as ChildsSocialWorkerReportForm } from "./ChildsSocialWorkerReportForm";
