import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const impactFostringFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Summarise discussions around how fostering has personally impacted on the foster carers, that might include impact on other family members, how they make use of support from their networks, and issues for male, BME and LGBT+ carers [7.1(a)(b)(c)] *",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "discussionsFostering",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
