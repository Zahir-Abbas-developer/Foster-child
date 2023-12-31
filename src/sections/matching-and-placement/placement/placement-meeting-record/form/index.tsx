import {
  RHFMultiCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const meetingRecordData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Meeting Date",
      name: "meetingDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    title: "Meeting Attendees (Role)",
    otherOptions: {
      name: "meetingAttendeesRole",
      options: ["Child", "Carer", "LA_SSW", "SSW"],
    },
    sx: { "& .MuiFormGroup-root": { flexDirection: "row !important" } },
    component: RHFMultiCheckbox,
  },

  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      label: "Meeting Agenda",
      name: "meetingAgenda",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Meeting Actions",
      name: "meetingActions",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Meeting Minutes",
      name: "meetingMinutes",
      fullWidth: true,
    },
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "Meeting Outcome",
      name: "meetingOutCome",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const formatters: any = {};
for (const formControl of meetingRecordData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  childName: "",
  carerName: "",
  meetingDate: new Date(),
  meetingAttendeesRole: "",
  meetingAgenda: "",
  meetingActions: "",
  meetingMinutes: "",
  meetingOutCome: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerName: Yup.string().required("Field is required"),
  meetingDate: Yup.date().required("Field is required"),
  meetingAttendeesRole: Yup.string().required("Field is required"),
  meetingAgenda: Yup.string().required("Field is required"),
  meetingActions: Yup.string().required("Field is required"),
  meetingMinutes: Yup.string().required("Field is required"),
  meetingOutCome: Yup.string().required("Field is required"),
});
