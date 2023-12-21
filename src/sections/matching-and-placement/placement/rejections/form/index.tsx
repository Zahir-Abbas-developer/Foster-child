import {
  RHFMultiCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  childName: "",
  carerName: "",
  whoRejected: [],
  date: new Date(),
  placementType: "",
  reason: "",
  agencySocialWorker: "",
  localAuthority: "",
  voiceMemo: "",
};

export const formSchema: any = Yup.object().shape({
  // childName: Yup.string().required("Field is required"),
  // carerName: Yup.string().required("Field is required"),
  // whoRejected: Yup.string().required("Field is required"),
  // date: Yup.date().required("Field is required"),
  // placementType: Yup.string().required("Field is required"),
  // reason: Yup.string().required("Field is required"),
  // agencySocialWorker: Yup.string().required("Field is required"),
  // localAuthority: Yup.string().required("Field is required"),
  // voiceMemo: Yup.string().required("Field is required"),
});

export const rejectionPlacementFormDataFunction = (isFieldDisable = false) => [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Who Rejected?",
    otherOptions: {
      name: "whoRejected",
      options: ["Child", "Carer", "lA_SSW", "SSW"],
      disabled: isFieldDisable,
    },
    sx: { "& .MuiFormGroup-root": { flexDirection: "row !important" } },
    component: RHFMultiCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Rejecteion Date",
      name: "date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Placement Type",
      name: "placementType",
      fullWidth: true,
      select: true,
      options: [{ value: "value", label: "label" }],
      disabled: isFieldDisable,
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Rejection Reason",
      name: "reason",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Agency Social Worker (SSW)",
      name: "agencySocialWorker",
      fullWidth: true,
      select: true,
      options: [{ value: "value", label: "label" }],
      disabled: isFieldDisable,
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority Worker SW",
      name: "localAuthority",
      fullWidth: true,
      select: true,
      options: [{ value: "value", label: "label" }],
      disabled: isFieldDisable,
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Voice Memo on Rejection",
      name: "voiceMemo",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
];

export const defaultValueRejectionForm = (data: any = initialValues) => {
  function whoRejectedFn(obj: any) {
    console.log(obj);
    let arr = [];
    for (const key in obj) {
      if (obj[key]) arr.push(key);
    }
    return arr;
  }
  return {
    childName: data?.childName,
    carerName: data?.carerName,
    whoRejected: whoRejectedFn(data?.whoRejected),
    date: new Date(data?.date),
    placementType: data?.placementType,
    reason: data?.reason,
    agencySocialWorker: data?.agencySocialWorker,
    localAuthority: data?.localAuthority,
    voiceMemo: data?.voiceMemo,
  };
};
