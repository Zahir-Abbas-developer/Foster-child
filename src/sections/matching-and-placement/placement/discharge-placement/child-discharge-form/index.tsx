import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFAutocompleteAsync from "@root/components/hook-form/RHFAutocompleteAsync";
import dayjs from "dayjs";
const todayDate = dayjs().format("MM/DD/YYYY");
// =====================================================
export const initialValuesDischargePlacement = {
  childName: "",
  carerName: "",
  dateOfDischarge: todayDate,
  dischargeReport: "",
  approvedBy: "",
  localAuthority: "",
  localAuthoritySW: "",
  status: "",
};

export const defaultValuesDischargePlacement = (
  data = initialValuesDischargePlacement
) => {
  return {
    childName: { name: data?.childName },
    carerName: { name: data.carerName },
    dateOfDischarge: new Date(data?.dateOfDischarge),
    dischargeReport: data?.dischargeReport,
    approvedBy: data?.approvedBy,
    localAuthority: data?.localAuthority,
    localAuthoritySW: data?.localAuthoritySW,
    status: data?.status,
  };
};
// ======================================================
export const dischargePlacementFormSchema = Yup.object().shape({
  childName: Yup.mixed().required("Field is required"),
  carerName: Yup.mixed().required("Field is required"),
  dateOfDischarge: Yup.date().required("Field is required"),
  dischargeReport: Yup.mixed().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  localAuthoritySW: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
});

// =========================================================
export const dischargePlacementFormDataFunction = (
  autoCompleteChildNameTrigger: any,
  autoCompleteCarerNameTrigger: any,
  autoCompleteChildNameStatus: any,
  autoCompleteCarerNameStatus: any,
  queryParams: any
) => {
  return [
    {
      id: 1,
      gridLength: 6,
      otherOptions: {
        label: "Child Name",
        name: "childName",
        fullWidth: true,
        size: "small",
        apiTrigger: autoCompleteChildNameTrigger,
        apiStatus: autoCompleteChildNameStatus,
        triggerQueryParams: queryParams,
        optionsToShow: autoCompleteChildNameStatus?.data?.data?.users,
        noOptionsText: "No Child Found",
        getOptionLabel: (option: any) => {
          if (option?.name) return option?.name;
          return "";
        },
      },
      component: RHFAutocompleteAsync,
    },
    {
      id: 2,
      gridLength: 6,
      otherOptions: {
        label: "Carer Name",
        name: "carerName",
        size: "small",
        fullWidth: true,
        apiTrigger: autoCompleteCarerNameTrigger,
        apiStatus: autoCompleteCarerNameStatus,
        optionsToShow: autoCompleteCarerNameStatus?.data?.data?.users,
        noOptionsText: "No Carer Found",
        getOptionLabel: (option: any) => {
          if (option?.name) return option?.name;
          return "";
        },
      },
      component: RHFAutocompleteAsync,
    },
    {
      id: 3,
      gridLength: 6,
      otherOptions: {
        label: "Date of Discharge",
        name: "dateOfDischarge",
        fullWidth: true,
      },
      component: RHFDatePicker,
    },
    {
      id: 4,
      gridLength: 6,
      requireFileUpload: true,
    },
    {
      id: 5,
      gridLength: 6,
      otherOptions: {
        name: "approvedBy",
        label: "Approved by (Role)",
        fullWidth: true,
        select: true,
      },
      options: [
        { value: "option 1", label: "option 1" },
        {
          value: "option 2",
          label: "option 2",
        },
      ],
      component: RHFSelect,
    },
    {
      id: 6,
      gridLength: 6,
      otherOptions: {
        name: "localAuthority",
        label: "Local Authority",
        fullWidth: true,
        select: true,
      },
      options: [
        { value: "option 1", label: "option 1" },
        {
          value: "option 2",
          label: "option 2",
        },
      ],
      component: RHFSelect,
    },
    {
      id: 7,
      gridLength: 6,
      otherOptions: {
        name: "localAuthoritySW",
        label: "Local Authority SW",
        fullWidth: true,
        select: true,
      },
      options: [
        { value: "option 1", label: "option 1" },
        {
          value: "option 2",
          label: "option 2",
        },
      ],
      component: RHFSelect,
    },
    {
      id: 8,
      gridLength: 6,
      otherOptions: {
        name: "status",
        label: "Status",
        fullWidth: true,
        select: true,
      },
      options: [
        { value: "option 1", label: "option 1" },
        {
          value: "option 2",
          label: "option 2",
        },
      ],
      component: RHFSelect,
    },
  ];
};
