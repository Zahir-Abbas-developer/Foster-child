import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";

export const partOfTeamFormData = [
  {
    id: 0,
    gridLength: 12,
    heading:
      "Summarise discussions around working as part of a team, that might include: working with the supervising social worker [2.1(c), 2.4[b), 2.5 (a), 4.2(c), 4.4(b), 7.3(a)(c)]; working with the child's social worker and other professionals [2.4(a)(b) (c), 2.1(b), 4.4[a)]; record keeping [4.5(a)(c)(d), 1.4(a)]. Discuss how delegated authority is working.",
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "discussionsWorkingOfTeam",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mt: -2 },
    },
    component: RHFTextField,
  },
];
