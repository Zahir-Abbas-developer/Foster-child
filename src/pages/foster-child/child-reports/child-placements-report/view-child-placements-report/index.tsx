import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildPlacementsReportForm } from "@root/sections/foster-child/child-reports/child-placements-report/form";
import { useRouter } from "next/router";
import { useGetPlacementReportByIdQuery } from "@root/services/foster-child/child-reports/child-placements-report/ChildPlacementsReportApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "View Child Placement Reports";

ViewChildPlacementsReport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildPlacementsReport() {
  const { makePath } = usePath();
  const router = useRouter();
  const { childReportsId } = router.query;

  const { data, isLoading, isError } =
    useGetPlacementReportByIdQuery(childReportsId);

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child/child-reports/child-placements-report",
        skipQueries: ["childReportsId"],
      }),
    },
    {
      name: "View Child Report",
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <ChildPlacementsReportForm
          disabled
          initialValueProps={{
            ...data?.data,
            dateOfPlacement: new Date(data?.data?.dateOfPlacement),
            placementEndDate: new Date(data?.data?.placementEndDate),
            uploadFile1: { name: data?.data?.uploadFile1 },
            uploadFile2: { name: data?.data?.uploadFile2 },
          }}
        />
      )}
    </Page>
  );
}
