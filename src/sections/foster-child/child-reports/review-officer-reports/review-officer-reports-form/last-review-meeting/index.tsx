import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const lastReviewMeetingFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Recommendations made, action taken and outstanding actions (with timescale)",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "recommendationOfLastReviewMeeting",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
