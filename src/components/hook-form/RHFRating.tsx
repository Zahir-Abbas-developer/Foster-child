// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Rating } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFRating({ name, fullWidth = true, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Rating {...field} {...other} />
      )}
    />
  );
}
