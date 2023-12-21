import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ChildLivingInTheHouseholdCommentsForm } from "@root/sections/foster-child/child-reports/child-living-in-households-comments/form";
import { useRouter } from "next/router";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useGetLivingHouseholReportByIdQuery } from "@root/services/foster-child/child-reports/child-living-in-households-comments/ChildLivingHouseholdsCommentsApi";

const PAGE_TITLE = "View Child Living in the Households Comments";

ViewChildLivingInTheHouseholdsComments.getLayout = function getLayout(
  page: any
) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildLivingInTheHouseholdsComments() {
  const { makePath } = usePath();
  const router = useRouter();
  const { childCommentsId } = router.query;

  const { data, isLoading, isError } =
    useGetLivingHouseholReportByIdQuery(childCommentsId);

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child/child-reports/child-living-in-households-comments",
        skipQueries: ["childCommentsId"],
      }),
    },
    {
      name: "View Child Living",
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
        <ChildLivingInTheHouseholdCommentsForm
          disabled
          initialValueProps={{
            ...data?.data,
            dob: new Date(data?.data?.dob),
          }}
        />
      )}
    </Page>
  );
}
