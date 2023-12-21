import React from "react";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import FosteredYoungPersonsCommentForm from "@root/sections/foster-child/child-reports/fostered-young-persons-comments/FosteredYoungPersonsCommentForm";

ViewFosteredYoungPersonsComments.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewFosteredYoungPersonsComments() {
  const Router: any = useRouter();
  const { fosterChildId, id } = Router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: {
        pathname: "/foster-child/child-reports/fostered-young-persons-comments",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Reports List",
      href: "",
    },
  ];

  const PAGE_TITLE = "View Fostered Young Person's Comments";

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <FosteredYoungPersonsCommentForm disabled />
    </Box>
  );
}
