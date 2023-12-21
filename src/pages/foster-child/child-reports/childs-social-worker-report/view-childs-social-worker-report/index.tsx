import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildsSocialWorkerReportForm } from "@root/sections/foster-child/child-reports/childs-social-worker-report/form";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useGetSocialWorkerReportByIdQuery } from "@root/services/foster-child/child-reports/childs-social-worker-report/ChildSocialWorkerReportApi";
import { useRouter } from "next/router";

const PAGE_TITLE = "View Childs Social Worker Report";

ViewChildsSocialWorkerReport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildsSocialWorkerReport() {
  const { makePath } = usePath();
  const router = useRouter();
  const { childSocialId } = router.query;

  const { data, isLoading, isError } =
    useGetSocialWorkerReportByIdQuery(childSocialId);

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child/child-reports/childs-social-worker-report",
        skipQueries: ["childSocialId"],
      }),
    },
    {
      name: "View Child's Social Report",
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
        <ChildsSocialWorkerReportForm
          disabled
          initialValueProps={{
            ...data?.data,
            signedDate: new Date(data?.data?.signedDate),
          }}
        />
      )}
    </Page>
  );
}
