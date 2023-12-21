import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const summaryFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Identify strengths, concerns and areas for development. Highlight any differences in views and list any outstanding or recommended future work *",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "identifyStrengths",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
