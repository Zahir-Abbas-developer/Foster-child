import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const manageFaqsInitialValues = {
  category_name: "",
  question: "",
  answer: "",
};

export const defaultValueManageFaqsForm = (
  data: any = manageFaqsInitialValues
) => {
  return {
    category_name: data?.category_name,
    question: data?.question,
    answer: data?.answer,
  };
};
export const manageFaqsFormSchema = Yup.object().shape({
  category_name: Yup.string().required("Field is required"),
  question: Yup.string().trim().required("Field is required"),
  answer: Yup.string().trim().required("Field is required"),
});

export const manageFaqsFormFieldsFunction = (
  FaqsCategories: any = [{ title: "Loading" }]
) => [
  {
    id: 1,
    component: RHFSelect,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "category_name",
      label: "Who is the FAQ for?",
      select: true,
      options: FaqsCategories?.map((cat: any, index: any) => ({
        id: index + cat?.baseRole,
        label: cat?.title,
        text: cat?.title,
      })),
    },
  },
  {
    id: 2,
    componentProps: {
      fullWidth: true,
      name: "question",
      label: "Question",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      fullWidth: true,
      name: "answer",
      label: "Answer",
      multiline: true,
      minRows: 3,
      maxRows: 6,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
