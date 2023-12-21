import React, { useState } from "react";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import StudySupportInfoForm from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoForm";
import { useGetUploadDocumentsStudySupportInfoQuery } from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";
import ChildAdditionalReportForm from "@root/sections/foster-child/child-reports/child-additional-reports/ChildAdditionalReportsForm";

ViewChildAdditionalReport.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewChildAdditionalReport() {
  const Router: any = useRouter();
  const { fosterChildId, id } = Router.query;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "View Child Additional Reports",
      href: {
        pathname: "/foster-child/child-reports/child-additional-reports",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Reports List",
      href: "",
    },
  ];

  const PAGE_TITLE = "Child Additional Reports";

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <ChildAdditionalReportForm disabled />
    </Box>
  );
}
