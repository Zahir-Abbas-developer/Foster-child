import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const recommendationFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Make a clear recommendation regarding continued suitability to foster, including any recommendation regarding the appropriate terms of approval. If this recommendation is different to the supervising social worker recommendations in FR-A, please explain *",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "recommendation",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
