import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildsSocialWorkerReportTable } from "@root/sections/foster-child/child-reports/childs-social-worker-report";

const PAGE_TITLE = "Child's Social Worker Report";

ChildsSocialWorkerReport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildsSocialWorkerReport() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "Child Reports",
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

      <ChildsSocialWorkerReportTable />
    </Page>
  );
}
