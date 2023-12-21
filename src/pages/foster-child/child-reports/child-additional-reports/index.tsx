import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import ChildAdditionalReportsTable from "@root/sections/foster-child/child-reports/child-additional-reports/ChildAdditionalReportsTable";
import { useRouter } from "next/router";
import React from "react";

ChildAdditionalReports.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function ChildAdditionalReports() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Reports",
      href: "",
    },
  ];

  const PAGE_TITLE = "Child Additional Reports ";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ChildAdditionalReportsTable />
    </Box>
  );
}
