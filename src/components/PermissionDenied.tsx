import { Alert, AlertTitle, alpha, Box } from "@mui/material";

export default function PermissionDenied() {
  return (
    <Box
      sx={(theme) => ({
        p: "0 !important",
        "& .MuiPaper-root": {
          backgroundColor: alpha(theme.palette.error.main, 0.2),
          width: "100%",
        },
      })}
    >
      <Alert severity="error">
        <AlertTitle>Permission Denied</AlertTitle>
        You do not have permission to access this page
      </Alert>
    </Box>
  );
}
