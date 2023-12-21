import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");

interface DefaultValues {
  isGasFiresAndGassWaterHeatersServiced: boolean;
  dateToBeCarriedOut1: any;

  improvementsReq1: string;

  isAllLargeAreaOfGlasFittedWithSafety: boolean;
  dateToBeCarriedOut2: any;

  improvementsReq2: string;

  isAnyLooseOrUnevenFloorCoverings: boolean;
  dateToBeCarriedOut3: any;

  improvementsReq3: string;

  isSoftFurnishingsConfirmToBritish: boolean;
  dateToBeCarriedOut4: any;

  improvementsReq4: string;

  areYouCommittedToEnsuringsThatNewFurnitureConfirmsToBritishStandards: boolean;
  dateToBeCarriedOut5: any;

  improvementsReq5: string;

  isFurnitureSave: boolean;

  dateToBeCarriedOut6: any;

  improvementsReq6: string;

  isWindowLocks: boolean;
  dateToBeCarriedOut7: any;

  improvementsReq7: string;

  isAllWindowAndDoorKeysEasilyAvailble: boolean;

  dateToBeCarriedOut8: any;

  improvementsRequire8: string;
}

export const defaultValues: any = {
  isGasFiresAndGassWaterHeatersServiced: false,
  dateToBeCarriedOut1: new Date(),

  improvementsReq1: "",

  isAllLargeAreaOfGlasFittedWithSafety: false,
  dateToBeCarriedOut2: new Date(),

  improvementsReq2: "",

  isAnyLooseOrUnevenFloorCoverings: false,
  dateToBeCarriedOut3: new Date(),

  improvementsReq3: "",

  isSoftFurnishingsConfirmToBritish: false,
  dateToBeCarriedOut4: new Date(),

  improvementsReq4: "",

  areYouCommittedToEnsuringsThatNewFurnitureConfirmsToBritishStandards: false,
  dateToBeCarriedOut5: new Date(),

  improvementsReq5: "",

  isFurnitureSave: false,

  dateToBeCarriedOut6: new Date(),

  improvementsReq6: "",

  isWindowLocks: false,
  dateToBeCarriedOut7: new Date(),

  improvementsReq7: "",

  isAllWindowAndDoorKeysEasilyAvailble: false,

  dateToBeCarriedOut8: new Date(),

  improvementsRequire8: "",
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
  // improvementsReq7: Yup.string().required("Required"),
  // dateToBeCarriedOut8: Yup.date().required("Required"),
  // improvementsRequire8: Yup.string().required("Required"),
});

export const safetyFactorsIndoorsB_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `General Safety Factors - Indoors B`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isGasFiresAndGassWaterHeatersServiced",
      label: "Are gas fires and gas water heaters serviced annually?",
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
      name: "isAllLargeAreaOfGlasFittedWithSafety",
      label: "Are all large areas of glass fitted with safety glass?",
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
      name: "isAnyLooseOrUnevenFloorCoverings",
      label: "Are there any loose or uneven floor coverings?",
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
      name: "isSoftFurnishingsConfirmToBritish",
      label: "Do soft furnishings confirm to British Standard BS:5852:2006?",
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
      name: "areYouCommittedToEnsuringsThatNewFurnitureConfirmsToBritishStandards",
      label:
        "Are you committed to ensurings that any new furniture confirms to the British Standards?",
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
      name: "isFurnitureSave",
      label: "Is furniture save?",
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
      name: "isWindowLocks",
      label: "Do windows have locks/restrictors?",
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
      name: "improvementsReq7",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAllWindowAndDoorKeysEasilyAvailble",
      label:
        "Are all windows and door keys easily available in the event of a fire?",
    },
    component: RHFCheckbox,
  },
  {
    id: 23,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut8",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 24,
    componentProps: {
      name: "improvementsRequire8",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
