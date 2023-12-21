import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const exemptionsFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
    "Were there any exemptions or placements outside the carer's terms of approval (unlawful placements)",
    otherOptions: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "exemptionsOutsideApproval.details",
      sx: { mt: -2 },
    },
    options: [
      { value: "xx", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 12,
    heading:
    "If yes, please provide details and any action required *",
    otherOptions: {
      sx: { mb: -2 },
    },
    component: Typography,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "exemptionsOutsideApproval.unlawfulPlacements",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 2 },
    },
    component: RHFTextField,
  },
];
