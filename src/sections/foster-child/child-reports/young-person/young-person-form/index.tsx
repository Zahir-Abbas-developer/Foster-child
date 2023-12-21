import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFInputWithLabel } from "@root/components/hook-form/RHFInputWithLabel";

export const defaultValues = {
  acknowledgment: "dasdas", //1
  acknowledgedBy: "", //2
  supervisingSocialWorker: "", //3
  personName: "", //4
  personAge: new Date(), //5
  fosterCarer: "", //6
  aboutFostering: "", //7
  changeFamilyFostering: "", //8
  talkToFostering: "", //9
  IsParentFosterCarer: "", //10
  ifNotFoster: "", //11
  // whoWasIt: "", //12
  // pictureAboutFostering: "", //13
  // whereRelevant: "", //14
};

export const youngPersonFormData = [
  {
    id: 1,
    componentProps: {
      name: "acknowledgment",
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
          name: "acknowledgedBy",
          label: "Acknowledgment By",
        },
        component: RHFTextField,
        md: 12,
        mb: 2.7,
        mt: { xs: 0, md: 3 },
      },
      {
        id: 2.2,
        component: RHFSelect,
        md: 12,
        componentProps: {
          name: "supervisingSocialWorker",
          label: "Supervising Social Worker",
          select: true,
        },
        options: [{ value: "John Doel", label: "John Doel" }],
      },
    ],
  },
  {
    id: 4,
    componentProps: {
      name: "personName",
      label: "Young Person's Name",
    },
    md: 3,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "personAge",
      label: "Young Person's DOB",
    },
    md: 3,
    component: RHFDatePicker,
  },
  {
    id: 6,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "fosterCarer",
      label: "Foster Carers",
      select: true,
    },
    options: [{ value: "John Doel", label: "John Doel" }],
  },
  {
    id: 7,
    componentProps: {
      name: "aboutFostering",
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
      name: "changeFamilyFostering",
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
      name: "talkToFostering",
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
          name: "IsParentFosterCarer",
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
          name: "ifNotFoster",
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
];
