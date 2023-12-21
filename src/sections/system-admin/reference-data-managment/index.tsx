import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const ReferenceDataManagementCategoriesdefaultValues = {
  code: "",
  name: "",
  description: "",
};
export const ReferenceDataManagementCategoriesFormSchema = Yup.object().shape({
  code: Yup.string().trim().required("Ref. Data Code is Required"),
  name: Yup.string().required("Ref. Data Name is Required"),
  description: Yup.string().required("Description is Required"),
});
export const ReferenceDataManagementCategoriesFormData = [
  {
    id: 1,
    componentProps: { name: "code", label: "Ref. Data Code:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: { name: "name", label: "Ref. Data name:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: { name: "description", label: "Description:" },
    component: RHFTextField,
    md: 6,
  },
];
