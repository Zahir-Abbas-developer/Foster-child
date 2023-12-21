import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import { useInventoryTableForm } from "./useApiInventoryForm";
import { FormProvider } from "@root/components/hook-form";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const ApiInventoryForm = () => {
  const { methods, FormData, handleSubmit, onSubmit, isSubmitting, action, isLoading } =
    useInventoryTableForm();
  const theme: any = useTheme();
  if (isLoading) return <SkeletonFormdata />;
  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={(theme) => style.title(theme)}>API Inventory</Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {FormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                fullWidth
                {...item.componentProps}
                disabled={action === "view"}
                size={"small"}
              >
                {item?.heading}
              </item.component>
            </Grid>
          ))}

          <Grid item xs={12} sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {action !== "view" && (
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </LoadingButton>
            )}

            <Link href={"/system-admin/api-inventory"} style={{ textDecoration: "none" }}>
              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": { backgroundColor: "#F6830F" },
                }}
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default ApiInventoryForm;
const style = {
  title: (theme: any) => ({
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 600,
    margin: "10px 0",
  }),
};
