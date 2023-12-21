import { Grid } from "@mui/material";
import Layout from "@root/layouts";
import About from "@root/sections/personal-details/about/About";
import JobProfile from "@root/sections/personal-details/job-profile/JobProfile";
import ViewProfile from "@root/sections/personal-details/view-profile/ViewProfile";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import ChangePasswordForm from "@root/sections/personal-details/change-password/ChangePasswordForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Page Layout
PersonalDetails.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Profile Details Settings",
    href: "",
  },
];

const PAGE_TITLE = "Personal Details";

export default function PersonalDetails() {
  return (
    <Page>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <Grid container columnSpacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} lg={4}>
          <ViewProfile />
          <Grid item xs={12} sx={{ mt: 3 }}>
            <ChangePasswordForm />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ mt: { xs: 3, lg: 0 } }}>
          <About />
          <Grid item xs={12} sx={{ mt: 3 }}>
            <JobProfile />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
}
