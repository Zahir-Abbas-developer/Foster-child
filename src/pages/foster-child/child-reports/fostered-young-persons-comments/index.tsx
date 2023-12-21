import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import FosteredYoungPersonsCommentTable from "@root/sections/foster-child/child-reports/fostered-young-persons-comments/FosteredYoungPersonsCommentTable";
import React from "react";
import { useRouter } from "next/router";

FosteredYoungPersonsComments.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function FosteredYoungPersonsComments() {
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

  const PAGE_TITLE = "Fostered Young Person's Comments ";
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <FosteredYoungPersonsCommentTable />
    </Box>
  );
}
