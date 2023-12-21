import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const carerDevelopmentTwoFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Summarise discussions around how the foster carer has demonstrated their commitment to continuing professional development in line with their Personal Development Plan [7.4(a)(b)(c)(d), 7.3(b)(d)(e), 7.5(b)] *",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "discussionsFosterCarer2",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
