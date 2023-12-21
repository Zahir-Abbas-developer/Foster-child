import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

export const sanctionDetailsDefaultValues = {
  reviewDate: dayjs().format("MM/DD/YYYY"),
  outLineBehaviour: "",
  sanctionAgrees: "",
};

export const sanctionDetailsFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    title: "Carer Name",
    titleValue: "FCC3",
    otherOptions: {
      variant: "body2",
    },
    component: Typography,
  },
  {
    id: 2,
    title: "User Name",
    titleValue: "Sangeetha Sigmani",
    otherOptions: {
      variant: "body2",
    },
    component: Typography,
  },
  {
    id: 3,
    title: "Supervising Social Worker",
    titleValue: "Not Assigned",
    otherOptions: {
      variant: "body2",
    },
    component: Typography,
  },
  {
    id: 4,
    title: "Date of Review",
    otherOptions: {
      name: "reviewDate",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 12,
    title: "OutLine Behaviour",
    otherOptions: {
      name: "outLineBehaviour",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    title: "Sanction Agreed",
    otherOptions: {
      name: "sanctionAgrees",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
];

export const defaultValueEducationInfoForm = (
  data: any = sanctionDetailsDefaultValues
) => {
  return {
    reviewDate: new Date(data?.reviewDate),
    outLineBehaviour: data?.outLineBehaviour,
    sanctionAgrees: data?.sanctionAgrees,
  };
};
