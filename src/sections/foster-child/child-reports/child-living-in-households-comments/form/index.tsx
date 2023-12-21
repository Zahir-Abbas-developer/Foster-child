import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFInputWithLabel } from "@root/components/hook-form/RHFInputWithLabel";
import RHFUploadImage from "@root/components/hook-form/RHFUploadImage";

export const formData = [
  {
    id: 1,
    componentProps: {
      name: "ack",
      text: "Acknowledgment",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 4,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 2,
    md: 6,
    child: [
      {
        id: 2.1,
        componentProps: {
          name: "ackBy",
          label: "Acknowledgment By",
        },
        component: RHFTextField,
        md: 12,
        mb: 2.7,
        mt: { xs: 0, md: 3 },
      },
      {
        id: 2.2,
        componentProps: {
          name: "socialWorker",
          label: "Supervising Social Worker",
        },
        component: RHFTextField,
        md: 12,
      },
    ],
  },
  {
    id: 4,
    componentProps: {
      name: "childName",
      label: "Child's Name",
    },
    md: 3,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "dob",
      label: "Child's DOB",
    },
    md: 3,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "fosterCarers",
      label: "Foster Carers",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "likeAboutFostering",
      text: "What do you like about fostering (good things)?",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 4,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 8,
    componentProps: {
      name: "changeAboutFamily",
      text: "Is there anything you would like to change about your family fostering?",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 4,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 9,
    componentProps: {
      name: "unhappyAboutfostering",
      text: "If you were worried or unhappy about fostering, who would you talk to?",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 4,
      Component: RHFTextField,
      typographyProps: {
        variant: "body2",
        mb: "10px",
      },
    },
    md: 6,
    component: RHFInputWithLabel,
  },
  {
    id: 10,
    md: 6,
    child: [
      {
        id: 10.1,
        component: RHFSelect,
        md: 12,
        mb: 2.7,
        mt: { xs: 0, md: 3 },
        componentProps: {
          name: "meetup",
          label:
            "Do you meet up with other children whose parents are foster carers?",
          select: true,
        },
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: 10.2,
        component: RHFSelect,
        md: 12,
        componentProps: {
          name: "likeToDo",
          label: "If you don't, would you like to do this?",
          select: true,
        },
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  {
    id: 12,
    componentProps: {
      name: "anyoneHelped",
      text: "If anyone helped you complete this form, who was it?",
      label: "Field Value",
      fullWidth: true,
      multiline: true,
      minRows: 4,
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
    id: 13,
    md: 6,
    child: [
      {
        id: 13.1,
        component: RHFInputWithLabel,
        md: 12,
        mb: 2.7,
        componentProps: {
          name: "anythingtellFostering",
          text: "Is there anything else you would like to tell us about fostering, or would you like to draw a picture about fostering?",
          label: "Field Value",
          fullWidth: true,
          multiline: true,
          minRows: 4,
          Component: RHFTextField,
          typographyProps: {
            variant: "body2",
            mb: "10px",
          },
        },
      },
      {
        id: 13.2,
        component: RHFInputWithLabel,
        md: 12,
        mb: 2.7,
        componentProps: {
          name: "additionalComments",
          text: "Any additional comments from the person who helped the child or young person to complete this form (where relevant)? Notice: This section should only be completed if you can provide information that might help the reader make sense of, or better understand, the child or young person's comments or drawing. You may also wish to clarify the extent to which you provided help. Your own views should be provided elsewhere.",
          label: "Field Value",
          fullWidth: true,
          multiline: true,
          minRows: 4,
          Component: RHFTextField,
          typographyProps: {
            variant: "body2",
            mb: "10px",
          },
        },
      },
      {
        id: 13.3,
        componentProps: {
          name: "acknowledgeByOther",
          label: "Acknowledge By",
        },
        md: 12,
        component: RHFTextField,
      },
    ],
  },
  {
    id: 16,
    md: 6,
    child: [
      {
        id: 16.1,
        md: 12,
        mb: 2.7,
        mt: { xs: 0, md: 5.5 },
      },
    ],
  },
];

export const defaultValues = {
  ack: "", //1
  ackBy: "", //2
  socialWorker: "", //3
  childName: "", //4
  dob: new Date(), //5
  fosterCarers: "", //6
  likeAboutFostering: "", //7
  changeAboutFamily: "", //8
  unhappyAboutfostering: "", //9
  meetup: "", //10
  likeToDo: "", //11
  anyoneHelped: "", //12
  anythingtellFostering: "", //13
  additionalComments: "", //14
  acknowledgeByOther: "", //15
  childDrawing: null, //16
};

export const formSchema = Yup.object().shape({
  ack: Yup.string().trim().required("Field is Required"),
  ackBy: Yup.string().trim().required("Field is Required"),
  socialWorker: Yup.string().trim().required("Field is Required"),
  childName: Yup.string().trim().required("Field is Required"),
  dob: Yup.date().required("Field is Required"),
  fosterCarers: Yup.string().trim().required("Field is Required"),
  likeAboutFostering: Yup.string().trim().required("Field is Required"),
  changeAboutFamily: Yup.string().trim().required("Field is Required"),
  unhappyAboutfostering: Yup.string().trim().required("Field is Required"),
  meetup: Yup.string().trim().required("Field is Required"),
  likeToDo: Yup.string().trim().required("Field is Required"),
  anyoneHelped: Yup.string().trim().required("Field is Required"),
  anythingtellFostering: Yup.string().trim().required("Field is Required"),
  additionalComments: Yup.string().trim().required("Field is Required"),
  acknowledgeByOther: Yup.string().trim().required("Field is Required"),
  childDrawing: Yup.mixed().required("Photo is required"),
});

export { default as ChildLivingInTheHouseholdCommentsForm } from "./ChildLivingInTheHouseholdCommentsForm";
