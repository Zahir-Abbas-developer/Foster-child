import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { NextRouter, useRouter } from "next/router";
import { useGetSingleYoungPersonDataQuery } from "@root/services/foster-child/child-reports/young-person/YoungPerson";
import YoungPersonForm from "@root/sections/foster-child/child-reports/young-person/young-person-form/YoungPersonForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Young Person Household List",
    href: !!query?.fosterChildId
      ? `/foster-child/child-reports/young-person-living-in-households-comments?fosterChildId=${query?.fosterChildId}`
      : "/foster-child/child-reports/young-person-living-in-households-comments",
  },
  {
    name: "Child Report List",
    href: "",
  },
];

const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} Young Person Living in the household's comments`;

// ----------------------------------------------------------------------

YoungPersonReport.getLayout = function getLayout(
  page: any,
  { query }: NextRouter
) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS(query)}
      title={PAGE_TITLE(query?.action)}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function YoungPersonReport() {
  const { query } = useRouter();

  const { data, isLoading } = useGetSingleYoungPersonDataQuery(
    {
      id: query?.id,
    },
    {
      skip: !!!query?.id,
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <Page title={PAGE_TITLE(query?.action)}>
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <YoungPersonForm
          data={{ ...data?.data, personAge: new Date(data?.data?.personAge) }}
          isLoading={isLoading}
          onSubmitHanlder={(data: any) => {}}
        />
      )}
    </Page>
  );
}
