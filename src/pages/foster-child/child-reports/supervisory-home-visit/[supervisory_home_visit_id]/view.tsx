import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { SupervisoryHomeVisitForm } from "@root/sections/foster-child/child-reports/supervisory-home-visit/supervisory-home-visit-form/SupervisoryHomeVisitForm";
import { useGetSupervisoryHomeVisitByIdQuery } from "@root/services/foster-child/child-reports/supervisory-home-visit/SupervisoryHomeVisitAPI";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/supervisory-home-visit?fosterChildId=${query}`,
  },
  {
    name: "Child Reports list",
    href: "/foster-child/child-reports/supervisory-home-visit",
  },
];

const PAGE_TITLE = "View Supervisory Home Visit";
// ----------------------------------------------------------------------

ViewSupervisoryHomeVisitForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewSupervisoryHomeVisitForm() {
  const { query } = useRouter();
  const router = useRouter();
  console.log(query);

  const supervisoryHomeVisitId = query["supervisory_home_visit_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetSupervisoryHomeVisitByIdQuery(supervisoryHomeVisitId);
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
        sx={{ mb: 2 }}
      />
      <Paper elevation={3}>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <SupervisoryHomeVisitForm
            defaultValues={data?.data?.getSupervisoryHomeVisitRes}
            fosterChildId={router?.query?.fosterChildId}
            ReportId={router?.query?.ReportId}
          />
        )}
      </Paper>
    </Page>
  );
}
