import Layout from "@root/layouts";
import { useRouter } from "next/router";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useGetFostringServiceManagerReportByIdQuery } from "@root/services/foster-child/child-reports/fostring-service-manager-reports/FostringServiceManagerReportAPi";
import { FostringServiceManagerReportForm } from "@root/sections/foster-child/child-reports/fostring-service-manager-reports/fostring-service-manager-reports-form/FostringServiceManagerReportForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-reports/fostering-service-manager-report?fosterChildId=${query}`,
  },
  {
    name: "Child Reports list",
    href: "/foster-child/child-reports/fostering-service-manager-report",
  },
];

const PAGE_TITLE = "View Foster Service Manager report";
// ----------------------------------------------------------------------

ViewFostringServiceManagerReportForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewFostringServiceManagerReportForm() {
  const router = useRouter();
  const FostringServiceManagerReportId =
    router?.query["fostering_service_manager_report_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetFostringServiceManagerReportByIdQuery(FostringServiceManagerReportId);
  console.log("fostering service manager report ", data);

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
          <FostringServiceManagerReportForm
            defaultValues={{
              ...data[0],
              createdDate: new Date(data[0]?.createdDate),
              dateOfReview: new Date(data[0]?.dateOfReview),
            }}
            fosterChildId={router?.query?.fosterChildId}
          />
        )}
      </Paper>
    </Page>
  );
}
