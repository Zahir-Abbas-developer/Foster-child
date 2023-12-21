import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import ChildDaylogEventsReportInfoCard from "@root/sections/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info/child-daylog-events-report-info-card/ChildDaylogEventsReportInfoCard";

// ----------------------------------------------------------------------
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Reports List",
    href: !!query?.fosterChildId
      ? `/foster-child/child-reports/child-daylog-events-report?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Child Report",
    href: "",
  },
];

const PAGE_TITLE = "VIEW DAY LOG EVENTS REPORTS";

// ----------------------------------------------------------------------

AllegationInfoPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AllegationInfoPage() {
  const router = useRouter();
  if (!!!router?.query?.fosterChildId) {
    router.push({
      pathname: "/foster-child-lists",
    });
    return;
  }
  if (router?.query?.action !== "view") {
    router.push({
      pathname: "/foster-child/child-reports/child-daylog-events-report",
      query: {
        fosterChildId: "e4aca742-3d05-47dc-a26c-df794c38c12e",
      },
    });
    return;
  }
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE}
        breadcrumbs={BREADCRUMBS(router?.query)}
      />
      <ChildDaylogEventsReportInfoCard />
    </Page>
  );
}
