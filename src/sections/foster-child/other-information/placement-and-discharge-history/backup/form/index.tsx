import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const formData = [
  {
    id: 1,
    componentProps: {
      name: "backupCareName",
      label: "Backup Carer Name (Code)",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "childName",
      label: "Child Name (Code)",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "placementDate",
      label: "Placement Date",
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "dischargeDate",
      label: "Discharge Date",
    },
    component: RHFDatePicker,
    md: 6,
  },
];

export const defaultValues = {
  backupCareName: "", //1
  childName: "", //2
  placementDate: new Date(), //3
  dischargeDate: new Date(), //4
};

export const formSchema = Yup.object().shape({
  backupCareName: Yup.string().trim().required("Field is Required"),
  childName: Yup.string().trim().required("Field is Required"),
  placementDate: Yup.date().required("Field is Required"),
  dischargeDate: Yup.date().required("Field is Required"),
});

export { default as BackupForm } from "./BackupForm";
