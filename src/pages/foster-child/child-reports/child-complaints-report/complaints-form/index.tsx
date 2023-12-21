import Page from "@root/components/Page";
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { NextRouter, useRouter } from "next/router";
import ChildComplaintsForm from "@root/sections/foster-child/child-reports/child-complaints-reports/child-complaints-form/child-complaints-form";
import { useGetSingleComplaintsDataQuery } from "@root/services/foster-child/child-reports/child-complaints-report/ChildComplaintsReport";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Complaints Report",
    href: !!query?.fosterChildId
      ? `/foster-child/child-reports/child-complaints-report?fosterChildId=${query?.fosterChildId}`
      : "/foster-child/child-reports/child-complaints-report",
  },
  {
    name: "Child Report List",
    href: "",
  },
];

const PAGE_TITLE = (action: any = "") =>
  `${action?.[0]?.toUpperCase() ?? ""}${action?.slice?.(
    1
  )} Child Complaints Reports`;

// ----------------------------------------------------------------------

ComplaintsReport.getLayout = function getLayout(
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

export default function ComplaintsReport() {
  const { query } = useRouter();

  const { data, isLoading } = useGetSingleComplaintsDataQuery(
    {
      complaintsId: query?.id,
    },
    {
      skip: !!!query?.id,
    }
  );
  return (
    <Page title={PAGE_TITLE(query?.action)}>
      <ChildComplaintsForm data={data} isLoading={isLoading} onSubmitHanlder={(data:any) => {}}/>
      
    </Page>
  );
}
