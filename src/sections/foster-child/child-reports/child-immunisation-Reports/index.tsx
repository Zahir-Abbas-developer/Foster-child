import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const dummy = [
  {
    childName: "John",
    dateTimeOfOccurence: "03/11/2021  ::  11:00",
    type: "Abc",
    createdDate: "04/11/2021",
    createdBY: "RoseMarry",
  },
];

export const childImmunisationReportsData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Date Of Immunisation",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Due Date",
      name: "dueDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Immunisation Type",
      name: "type",
      fullWidth: true,
      select: true,
      options: [
        { value: "RequestforSingleData", label: "Request for Single Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      label: "Immunisation Details",
      name: "details",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const childImmunisationReportsValue = {
  date: new Date(),
  dueDate: new Date(),
  type: "",
  details: "",
};
export const FormSchema = Yup.object().shape({
  date: Yup.date().required("required"),
  dueDate: Yup.date().required("required"),
  type: Yup.string().required("required"),
  details: Yup.string().required("required"),
});
