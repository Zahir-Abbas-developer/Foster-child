import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useGetChildAlligationRportsByIdQuery } from "@root/services/foster-child/child-reports/child-allegation-reports/ChildAllegationReportsApi";
import { ChildAllegationReportsForm } from "@root/sections/foster-child/child-reports/child-allegation-reports/child-allegation-reports-form/ChildAllegationReportsForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/child-allegations-report?fosterChildId=${query}`,
  },
  {
    name: "Child Reports list",
    href: "/foster-child/child-reports/child-allegations-report",
  },
];

const PAGE_TITLE = "View Allegation report";
// ----------------------------------------------------------------------

ViewChildAllegationsForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildAllegationsForm() {
  const router = useRouter();
  const ChildAllegationstId = router?.query["child_allegation_report_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetChildAlligationRportsByIdQuery(ChildAllegationstId);

  console.log("Is loading: ", data);

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
          <ChildAllegationReportsForm
            defaultValues={{
              ...data?.data,
              nextAlertDate: new Date(data?.data?.nextAlertDate),
              allegationDate: new Date(data?.data?.allegationDate),
              agencyReportedDate: new Date(data?.data?.agencyReportedDate),
              reviewDate: new Date(data?.data?.reviewDate),
              registeredManagerInformedDate: new Date(
                data?.data?.registeredManagerInformedDate
              ),
              ofstedNotifiedDate: new Date(data?.data?.ofstedNotifiedDate),
              closureDate: new Date(data?.data?.closureDate),
            }}
            fosterChildId={router?.query?.fosterChildId}
            ReportId={router?.query?.ReportId}
          />
        )}
      </Paper>
    </Page>
  );
}
