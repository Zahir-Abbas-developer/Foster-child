import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import ProfilePreview from "@root/sections/personal-details/profile-preview/ProfilePreview";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

// Page Layout
Profile.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Profile Details",
    href: "/personal-details",
  },
  {
    name: "View Profile",
    href: "",
  },
];

const PAGE_TITLE = "Profile Preview";

export default function Profile() {
  return (
    <Page>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ProfilePreview />
    </Page>
  );
}
