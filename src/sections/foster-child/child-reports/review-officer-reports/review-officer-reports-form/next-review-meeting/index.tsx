import SignaturePad from "@root/components/SignaturePad";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";

export const nextReviewMeetingFormData = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "nextReviewMeeting.date",
      label: "Date",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "nextReviewMeeting.time",
      label: "Time",
      fullWidth: true,
      sx: { mt: 2 },
    },
    component: RHFTimePicker,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "nextReviewMeeting.venue",
      label: "Venue",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "nextReviewMeeting.dated",
      label: "Dated",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      label: "Signed (reviewing officer)",
      name: "nextReviewMeeting.file",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: SignaturePad,
  },
];
