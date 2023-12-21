import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const editSystemConfigurationData = (systemConfigurationData: any) => [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Configuration Name",
      name: "name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Configuration Value",
      name: "value",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Description",
      name: "description",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Approver",
      name: "approver_name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Approver Role",
      name: "approver_role",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Approver Date",
      name: "approver_date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      disabled: true,
      label: "Enter Key",
      name: "key",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
