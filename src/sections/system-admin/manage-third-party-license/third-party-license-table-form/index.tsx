import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";

export const FormData = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 2,
    componentProps: {
      name: "type",
      label: "Type of License",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "description",
      label: "Description",
      sx: { mb: 4 },
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 4,
    componentProps: {
      name: "guide_link_name",
      label: "Guide",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "guide_link",
      label: "Guide Link",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "email",
      label: "Email",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "phone",
      label: "Phone",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const FormDataValues = {
  name: "",
  type: "",
  description: "",
  guide_link_name: "",
  guide_link: "",
  email: "",
  phone: "",
};
export const defaultValueThirdPartyLicenseForm = (
  data: any = FormDataValues
) => {
  return {
    name: data?.name,
    type: data?.type,
    description: data?.description,
    guide_link_name: data?.guide_link_name,
    guide_link: data?.guide_link,
    email: data?.email,
    phone: data?.phone,
  };
};

export const FormValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Field is Required"),
  type: Yup.string().trim().required("Field is Required"),
  description: Yup.string().trim().required("Field is Required"),
  guide_link_name: Yup.string().trim().required("Field is Required"),
  guide_link: Yup.string().trim().required("Field is Required"),
  email: Yup.string().trim().required("Field is Required"),
  phone: Yup.string().trim().required("Field is Required"),
});
