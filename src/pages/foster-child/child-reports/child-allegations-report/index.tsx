import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildAllegationReportsTable } from "@root/sections/foster-child/child-reports/child-allegation-reports/ChildAllegationReportsTable";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/child-allegations-report?fosterChildId=${query}`,
  },
  {
    name: "Child Reports",
    href: "/foster-child",
  },
];

const PAGE_TITLE = "Allegation report";
// ----------------------------------------------------------------------

ChildAllegationsList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildAllegationsList() {
  const router = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <ChildAllegationReportsTable
          fosterChildId={router?.query?.fosterChildId}
        />
      </Paper>
    </Page>
  );
}
