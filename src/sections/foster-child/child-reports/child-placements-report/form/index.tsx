import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const formData = [
  {
    id: 1,
    componentProps: {
      name: "childName",
      label: "Child Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "carerName",
      label: "Carer Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "typeOfPlacement",
      label: "Type of Placement",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 4,
    componentProps: {
      name: "dateOfPlacement",
      label: "Date of Placement",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "placementEndDate",
      label: "Placement End Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 6,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "agencySocialWorker",
      label: "Agency Social Worker",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 7,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "localAuthority",
      label: "Local Authority",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 8,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "laSocialWorker",
      label: "LA Social Worker",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 9,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "status",
      label: "Status",
      select: true,
    },
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
  },
  {
    id: 10,
    componentProps: {
      name: "placementPlan",
      label: "Placement Plan",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    md: 6,
  },
  {
    id: 12,
    md: 6,
  },
  {
    id: 13,
    componentProps: {
      name: "approvedBy",
      label: "Approved By (Role)",
    },
    component: RHFTextField,
    md: 6,
  },
];

export const defaultValues = {
  childName: "", //1
  carerName: "", //2
  typeOfPlacement: "", //3
  dateOfPlacement: new Date(), //4
  placementEndDate: new Date(), //5
  agencySocialWorker: "", //6
  localAuthority: "", //7
  laSocialWorker: "", //8
  status: "", //9
  placementPlan: "", //10
  uploadFile1: null, //11
  uploadFile2: null, //12
  approvedBy: "", //13
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().trim().required("Field is Required"),
  carerName: Yup.string().trim().required("Field is Required"),
  typeOfPlacement: Yup.string().trim().required("Field is Required"),
  dateOfPlacement: Yup.date().required("Field is Required"),
  placementEndDate: Yup.date().required("Field is Required"),
  agencySocialWorker: Yup.string().trim().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  laSocialWorker: Yup.string().trim().required("Field is Required"),
  status: Yup.string().trim().required("Field is Required"),
  placementPlan: Yup.string().trim().required("Field is Required"),
  uploadFile1: Yup.mixed().required("Photo is is required"),
  uploadFile2: Yup.mixed().required("Photo is is required"),
  approvedBy: Yup.string().trim().required("Field is Required"),
});

export { default as ChildPlacementsReportForm } from "./ChildPlacementsReportForm";
