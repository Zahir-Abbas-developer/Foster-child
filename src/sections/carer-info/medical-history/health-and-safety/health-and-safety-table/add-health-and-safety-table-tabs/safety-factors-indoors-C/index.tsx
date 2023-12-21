import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");

interface DefaultValues {
  isAdequateArticialLightToIlluminate: boolean;
  dateToBeCarriedOut1: any;

  improvementsReq1: string;

  isAllBanistersFilled: boolean;
  dateToBeCarriedOut2: any;

  improvementsReq2: string;

  isStairGateFitted: boolean;
  dateToBeCarriedOut3: any;

  improvementsReq3: string;

  isHighChairsBuggies: boolean;
  dateToBeCarriedOut4: any;

  improvementsReq4: string;

  isAnAccessibleFirstAidBox: boolean;
  dateToBeCarriedOut5: any;

  improvementsReq5: string;

  areGlasswareChinaAndOtherFragileObjectsKeptOutOfReach: boolean;

  dateToBeCarriedOut6: any;

  improvementsReq6: string;

  isAlcohalCigarettesAndLighter: boolean;
  dateToBeCarriedOut7: any;

  improvementsRequire7: string;
}

export const defaultValues: any = {
  isAdequateArticialLightToIlluminate: false,
  dateToBeCarriedOut1: new Date(),

  improvementsReq1: "",

  isAllBanistersFilled: false,
  dateToBeCarriedOut2: new Date(),

  improvementsReq2: "",

  isStairGateFitted: false,
  dateToBeCarriedOut3: new Date(),

  improvementsReq3: "",

  isHighChairsBuggies: false,
  dateToBeCarriedOut4: new Date(),

  improvementsReq4: "",

  isAnAccessibleFirstAidBox: false,
  dateToBeCarriedOut5: new Date(),

  improvementsReq5: "",

  areGlasswareChinaAndOtherFragileObjectsKeptOutOfReach: false,

  dateToBeCarriedOut6: new Date(),

  improvementsReq6: "",

  isAlcohalCigarettesAndLighter: false,
  dateToBeCarriedOut7: new Date(),

  improvementsRequire7: "",
};

export const FormSchema = Yup.object().shape({
  // dateToBeCarriedOut1: Yup.date().required("Required"),

  // improvementsReq1: Yup.string().required("Required"),

  // dateToBeCarriedOut2: Yup.date().required("Required"),

  // improvementsReq2: Yup.string().required("Required"),

  // dateToBeCarriedOut3: Yup.date().required("Required"),

  // improvementsReq3: Yup.string().required("Required"),

  // dateToBeCarriedOut4: Yup.date().required("Required"),

  // improvementsReq4: Yup.string().required("Required"),

  // dateToBeCarriedOut5: Yup.date().required("Required"),

  // improvementsReq5: Yup.string().required("Required"),

  // dateToBeCarriedOut6: Yup.date().required("Required"),

  // improvementsReq6: Yup.string().required("Required"),

  // dateToBeCarriedOut7: Yup.date().required("Required"),

  // improvementsRequire7: Yup.string().required("Required"),
});

export const safetyFactorsIndoorsC_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `General Safety Factors - Indoors C`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAdequateArticialLightToIlluminate",
      label:
        "Is there adequate artificial/natural light to illuminate any steps?",
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut1",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    componentProps: {
      name: "improvementsReq1",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAllBanistersFilled",
      label:
        "Are all banisters filled in or have a maximum gap between ralls of 4 inches?",
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut2",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "improvementsReq2",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isStairGateFitted",
      label: "Is the stair gate fitted?",
    },
    component: RHFCheckbox,
  },
  {
    id: 8,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut3",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 9,
    componentProps: {
      name: "improvementsReq3",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isHighChairsBuggies",
      label:
        "Do high chairs, buggies and child equipment confirm to British Standards?",
    },
    component: RHFCheckbox,
  },
  {
    id: 11,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut4",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 12,
    componentProps: {
      name: "improvementsReq4",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAnAccessibleFirstAidBox",
      label: "Is there an accessible First Aid box?",
    },
    component: RHFCheckbox,
  },
  {
    id: 14,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut5",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 15,
    componentProps: {
      name: "improvementsReq5",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areGlasswareChinaAndOtherFragileObjectsKeptOutOfReach",
      label:
        "Are glassware, china and other fragile objects kept out of reach?",
    },
    component: RHFCheckbox,
  },

  {
    id: 17,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut6",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  {
    id: 18,
    componentProps: {
      name: "improvementsReq6",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAlcohalCigarettesAndLighter",
      label: "Are alcohol, cigarettes and lighters kept out of reach?",
    },
    component: RHFCheckbox,
  },
  {
    id: 20,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut7",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 21,
    componentProps: {
      name: "improvementsRequire7",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
