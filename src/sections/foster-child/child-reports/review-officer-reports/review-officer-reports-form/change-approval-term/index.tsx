import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const changeApprovalTermFormData = [
  {
    id: 0,
    gridLength: 12,
    heading: "Are the carer's current terms of approval appropriate? *",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "changesToApprovalTerms.approvalAppropriate",
      sx: { mt: -2 },
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 12,
    heading:
      "If a change to the carer's terms of approval is being recommended, there should be evidence in the reports to justify that change. Please confirm that changes to approval terms were considered within the review meeting",
    component: Typography,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "changesToApprovalTerms.approvalBeingRecommended",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
