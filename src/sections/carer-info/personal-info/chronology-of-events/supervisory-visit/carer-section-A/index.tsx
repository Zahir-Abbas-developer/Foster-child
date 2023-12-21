import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const carerSectionAlphaData = [
  {
    id: 1,
    otherOptions: {
      name: "category",
      label: "Category",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "normal",
        label: "normal",
      },
      {
        value: "special",
        label: "special",
      },
    ],
  },
  {
    id: 2,
    otherOptions: {
      name: "homeVisitType",
      label: "Home Visit Type",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "normal",
        label: "normal",
      },
      {
        value: "special",
        label: "special",
      },
    ],
  },
  {
    id: 3,
    otherOptions: {
      name: "homeVisitStatus",
      label: "Home Visit Status",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "normal",
        label: "normal",
      },
      {
        value: "special",
        label: "special",
      },
    ],
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "dateOfVisit",
      label: "Date of Visit",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    otherOptions: {
      name: "homeFileSeen",
      label: "Home File Seen",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 6,
    otherOptions: {
      name: "medicationSheetChecked",
      label: "Medication Sheet Checked",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 7,
    otherOptions: {
      name: "localAuthorityFeedbackRequired",
      label: "Local Authority Feedback Required",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "natureOfVisit",
      label: "Nature of Visit",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    otherOptions: {
      name: "detailsOfPlacements",
      label:
        "Name of all those present at the meeting, Details of any new placements since the last visit. Note if children wrer seen alone. If not seen at all, reason why?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
];
export { default as CarerSectionAlpha } from "./CarerSectionA";

export const defaultValues = {
  natureOfVisit: "",
  category: "",
  homeVisitType: "",
  dateOfVisit: new Date(),
  homeVisitStatus: "",
  homeFileSeen: null,
  medicationSheetChecked: null,
  localAuthorityFeedbackRequired: null,
  detailsOfPlacements: "",
};

export const formSchema = Yup.object().shape({
  natureOfVisit: Yup.string().required("required"),
  category: Yup.string().required("required"),
  homeVisitType: Yup.string().required("required"),
  dateOfVisit: Yup.date().required("required"),
  homeVisitStatus: Yup.string().required("required"),
  homeFileSeen: Yup.boolean().required("required"),
  medicationSheetChecked: Yup.boolean().required("required"),
  localAuthorityFeedbackRequired: Yup.boolean().required("required"),
  detailsOfPlacements: Yup.string().required("required"),
});
