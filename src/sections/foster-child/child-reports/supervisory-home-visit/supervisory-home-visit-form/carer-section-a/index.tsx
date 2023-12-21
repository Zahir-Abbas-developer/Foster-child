import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const crerSectionAFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "carerSectionA.category",
      label: "Category",
      fullWidth: true,
      select: true,
      sx: { mt: 2 },
    },
    options: [
      { value: "Peg legge", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ], 
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "carerSectionA.homeVisitType",
      label: "Home Visit Type",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "carerSectionA.homeVisitStatus",
      label: "Home Visit Status",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Peg legge", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "carerSectionA.dateOfVisit",
      label: "Date Of Visit",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "carerSectionA.natureOfVisit",
      label: "Nature Of Visit",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "carerSectionA.detailsOfPlacements",
      label:
        "Names of all those present at the meeting. Details of any new placements since the last visit. Note if children were seen alone. if not seen st all, reason why?       ",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "carerSectionA.notifications",
      label: "Notification (User to be notified)",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
