import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import YoungPersonsList from "@root/sections/foster-child/child-reports/young-person/YoungPersonsList";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Child Reports",
    href: "",
  },
];

const PAGE_TITLE = "Young Person Living in the houseHold's comments";

YoungPersonLivingInHouseholdsComments.getLayout = function getLayout(
  page: any
) {
  return <Layout title={PAGE_TITLE}>{page}</Layout>;
};

export default function YoungPersonLivingInHouseholdsComments() {
  const { query } = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(query)}
        title={PAGE_TITLE}
      />
      <YoungPersonsList />
    </Page>
  );
}
