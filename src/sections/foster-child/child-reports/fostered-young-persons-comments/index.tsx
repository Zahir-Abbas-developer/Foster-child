import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFInputWithLabel } from "@root/components/hook-form/RHFInputWithLabel";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";

export const defaultValues = {
  acknowledgment: "",
  fosteredPersonName: "",
  age: "",
  aboutFosterCarer: "",
  likeFosterCarer: "",
  talkToFosterCarer: "",
  cultureReligiousSupported: "",
  encourageHealthyLifestyle: "",
  supportSchoolWork: "",
  fosterHelpMeeting: "",
  fosterHelpComplaint: "",
  acknowledgedBy: "",
  supervisingSocialWorker: "",
  fosterCarer: "",
  HaveFosterCarerHelped: "",
  likeSocialWorker: "",
  treatedLikeFamily: "",
  helpGoodMyself: "",
  fosterOnboard: "",
  feelSafeFoster: "",
  encourageLeisureActivities: "",
  fosterUnderstandFeelings: "",
  fosterHelpLookMyself: "",
  aboutLivingFosterCarer: "",
  helpCompleteForm: "",
  name: "",
  signature: "",
  date: "",
};
export const FosteredYoungPersonsCommentFormData = [
  {
    id: 1,
    componentProps: {
      name: "acknowledgment",
      label: "Acknowledgedment",
      multiline: true,
      minRows: 6.8,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    md: 6,
    child: [
      {
        id: 2.1,
        componentProps: {
          name: "acknowledgedBy",
          label: "Acknowledgment By",
          select: true,
        },

        component: RHFSelect,
        md: 12,
        mb: 2.7,
        // mt: { xs: 0, md: 3 },
        options: COUNTRIESDROPDOWN,
      },
      {
        id: 2.2,
        componentProps: {
          name: "socialWorker",
          label: "Supervising Social Worker",
          select: true,
        },

        component: RHFSelect,
        md: 12,
        mb: 2.7,
        options: COUNTRIESDROPDOWN,
      },
      {
        id: 2.2,
        componentProps: {
          name: "fosterCarer",
          label: "Foster Carer(s)",
          select: true,
        },

        component: RHFSelect,
        md: 12,
        options: COUNTRIESDROPDOWN,
      },
    ],
  },

  {
    id: 3,
    componentProps: {
      name: "name",
      label: "Name (fostered young person)",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 4,
    componentProps: {
      name: "name",
      label: "Fosterd young person's age",
    },
    component: RHFTextField,
    md: 3,
  },

  {
    id: 5,
    md: 6,
    child: [
      {
        id: 5.1,
        componentProps: {
          name: "HaveFosterCarerHelped",
          label: "How have foster carers helped you?",
          multiline: true,
          minRows: 5,
          fullWidth: true,
        },

        component: RHFTextField,
        md: 12,
        // mt: { xs: 0, md: 3 },
      },
      ,
    ],
  },
  {
    id: 6,
    componentProps: {
      name: "name",
      label: "Fosterd young person's age",
    },
    component: RHFTextField,
    md: 3,
    
  },
];
