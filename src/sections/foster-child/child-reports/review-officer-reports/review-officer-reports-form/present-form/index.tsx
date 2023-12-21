import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const PresentFormData = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "present.reviewingOfficer",
      label: "Reviewing officer *",
      fullWidth: true,
      select: true,
      sx: { mt: 2 },
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "present.supervisingSocialWorker",
      label: "Supervising social worker *",
      fullWidth: true,
      select: true,
      sx: { mt: 2 },
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "present.fosterCarers[0]",
      label: "Foster Carer(s) *",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 12,
    componentProps: {
      label: "others",
      name: "present.others",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
