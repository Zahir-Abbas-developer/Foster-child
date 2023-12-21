import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { SupervisoryHomeVisitTable } from "@root/sections/foster-child/child-reports/supervisory-home-visit/SupervisoryHomeVisitTable";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/supervisory-home-visit?fosterChildId=${query}`,
  },
  {
    name: "Child Reports",
    href: "/foster-child",
  },
];

const PAGE_TITLE = "Supervisory Home Visit";
// ----------------------------------------------------------------------

SupervisoryHomeVisitList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function SupervisoryHomeVisitList() {
  const router = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <SupervisoryHomeVisitTable
          fosterChildId={router?.query?.fosterChildId}
        />
      </Paper>
    </Page>
  );
}
