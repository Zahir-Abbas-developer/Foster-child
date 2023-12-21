import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ReviewOfficerReportsForm } from "@root/sections/foster-child/child-reports/review-officer-reports/review-officer-reports-form/ReviewOfficerReportsForm";
import { useGetReviewOfficerRportsByIdQuery } from "@root/services/foster-child/child-reports/review-officer-reports/ReviewOfficerReportsAPI";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/review-officer-reports?fosterChildId=${query}`,
  },
  {
    name: "Child Reports list",
    href: "/foster-child/child-reports/review-officer-reports",
  },
];

const PAGE_TITLE = "View Reviewing Officer Reports";
// ----------------------------------------------------------------------

ViewReviewingOfficerForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewReviewingOfficerForm() {
  const { query } = useRouter();
  const router = useRouter();
  console.log(query);

  const reviewReportsId = query["review_officer_reports_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetReviewOfficerRportsByIdQuery(reviewReportsId);

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
          <ReviewOfficerReportsForm
            defaultValues={{
              ...data?.data,
              nextReviewMeeting: {
                date: new Date(data?.data?.nextReviewMeeting?.date),
                time: new Date(data?.data?.nextReviewMeeting?.time),
                venue: data?.data.nextReviewMeeting?.venue,
                dated: new Date(data?.data?.nextReviewMeeting?.dated),
              },
              file: data?.data?.file,
            }}
            fosterChildId={router?.query?.fosterChildId}
            ReportId={router?.query?.ReportId}
          />
        )}
      </Paper>
    </Page>
  );
}
