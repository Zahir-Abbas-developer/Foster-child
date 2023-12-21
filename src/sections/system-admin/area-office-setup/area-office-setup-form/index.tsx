import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const areaOfficeFormSchema = Yup.object().shape({
  office_name: Yup.string().required("Field is required."),
  agency_name: Yup.string().required("Field is required."),
  address: Yup.string().required("Field is required."),
  city: Yup.string().required("Field is required."),
  telephone: Yup.string().required("Field is required."),
  office_no: Yup.string().required("Field is required."),
  mobile_no: Yup.string().required("Field is required."),
  email: Yup.string().required("Field is required."),
  county: Yup.string().required("Field is required."),
  country: Yup.string().required("Field is required."),
  postal_code: Yup.string().required("Field is required."),
});

export const AreaOfficeFormDataFucntion = (isFieldDisable = false) => [
  {
    gridLength: 12,
    head: "Area Office Setup",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Area Office Name",
      name: "office_name",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Agency Name",
      name: "agency_name",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Contact Details",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Address",
      name: "address",
      fullWidth: true,
      minRows: 3,
      multiline: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Town City",
      name: "city",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "telephone",
      name: "telephone",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Office phone",
      name: "office_no",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Mobile phone",
      name: "mobile_no",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Email",
      name: "email",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "County",
      name: "county",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
      disabled: isFieldDisable,
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Country",
      name: "country",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
      disabled: isFieldDisable,
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Postal Code",
      name: "postal_code",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
];
export const initialValues = {
  office_name: "",
  agency_name: "",
  address: "",
  city: "",
  telephone: "",
  office_no: "",
  mobile_no: "",
  email: "",
  county: "",
  country: "",
  postal_code: "",
};

export const defaultValueAreaOfficeForm = (data: any = initialValues) => {
  return {
    office_name: data?.office_name,
    agency_name: data?.agency_name,
    address: data?.address,
    city: data?.city,
    telephone: data?.telephone,
    office_no: data?.office_no,
    mobile_no: data?.mobile_no,
    email: data?.email,
    county: data?.county,
    country: data?.country,
    postal_code: data?.postal_code,
  };
};
