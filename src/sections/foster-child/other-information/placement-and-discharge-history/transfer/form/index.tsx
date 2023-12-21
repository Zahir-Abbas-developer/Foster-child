import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const formData = [
  {
    id: 1,
    componentProps: {
      name: "childName",
      label: "Child Name (Code)",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "placementDate",
      label: "Placement Date",
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "placementType",
      label: "Placement Type",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "transferDate",
      label: "Transfer Date",
    },
    component: RHFDatePicker,
    md: 6,
  },
];

export const defaultValues = {
  childName: "", //1
  placementDate: new Date(), //2
  placementType: "", //3
  transferDate: new Date(), //4
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().trim().required("Field is Required"),
  placementDate: Yup.date().required("Field is Required"),
  placementType: Yup.string().trim().required("Field is Required"),
  transferDate: Yup.date().required("Field is Required"),
});

export { default as TransferForm } from "./TransferForm";
