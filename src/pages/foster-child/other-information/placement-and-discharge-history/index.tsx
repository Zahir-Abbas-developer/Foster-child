import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { PlacementAndDischargeHistoryAccordion } from "@root/sections/foster-child/other-information/placement-and-discharge-history";

const PAGE_TITLE = "Placement and Discharge History";

PlacementAndDischargeHistory.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function PlacementAndDischargeHistory() {
  const { makePath } = usePath();

  let BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <PlacementAndDischargeHistoryAccordion />
    </Page>
  );
}
