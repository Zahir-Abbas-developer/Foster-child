import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildOohReportForm from "@root/sections/foster-child/child-reports/child-ooh-report/ChildOohReportForm";

ViewChildReports.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewChildReports() {
  const router: any = useRouter();
  const { action, id, fosterChildId } = router.query;
  //If ID is not there
  if (!action && !id) {
    router.push({
      pathname: "/foster-child",
      query: {
        fosterChildId: fosterChildId,
      },
    });
  }
  // BREADCRUMBS
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: {
        pathname: "/foster-child/child-reports/child-ooh-report",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Report List",
      href: "",
    },
  ];
  const PAGE_TITLE = "VIEW CHILD OOH REPORTS";

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <ChildOohReportForm action={action} id={id} />
    </>
  );
}
