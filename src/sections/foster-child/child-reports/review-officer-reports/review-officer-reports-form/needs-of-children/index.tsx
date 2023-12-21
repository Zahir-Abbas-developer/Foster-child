import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const needOfChildrenFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Summarise discussions around meeting the needs of children, that might include: individual needs of fostered children and young people [1.3(b), 4.1(a)]; equality and diversity [1.2(a)(b)(c), 5.7(b)]; confidentiality [1.4[a)(b)(c), 4.3(c)]; working with birth family [2.3(a)(b), 2.1(b), 4.3(a)(b), 5.6 (a)(b)]; healthy physical and emotional care [3.3(a)(b)(c), 5.7(a), 1.3(a), 3.3(a), 5.1(a), 5.6(c), 1.3(a), 5.3(a)(b)(c), 5.2]; managing behaviour [3.4(a)(b)(c)]; education [5.5(a)(b)(c)(d), 1.3(a)]; play and leisure [5.4(a)(b), 1.3(a), 2.5(b)]; disability [5.8(a)(b)(c)(d)]; keeping children safe [6.2(a)(b)(c), 1.3(a)(c), 3.5(a)]; and communicating with children [4.1(a)(b)(c)(d), 4.2(a)(b)(c), 5.1(a)(b)(c) *",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "discussionsNeedsOfChildren",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
