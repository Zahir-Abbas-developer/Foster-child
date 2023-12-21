import { Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
const SidebarHeader = () => {
  return (
    <Grid container alignItems="center">
      <Grid item sm={1}>
        <Link href="/personal-details" style={{ color: "unset" }}>
          <HomeIcon />
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">PROFILE & AUDIT VIEW</Typography>
      </Grid>
    </Grid>
  );
};

export default SidebarHeader;
