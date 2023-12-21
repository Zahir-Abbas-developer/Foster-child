import Layout from "@root/layouts";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import UpsertChildIncidentsReport from "@root/sections/foster-child/child-reports/child-incidents-report/ChildIncidentsReportForm";

const BREADCRUMBS = (fosterChildId: any) => {
  return [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: `/foster-child/child-reports/child-incidents-report?fosterChildId=${fosterChildId}`,
    },
    {
      name: "Child Reports List",
    },
  ];
};

const PAGE_TITLE = "VIEW CHILD INCIDENTS REPORTS";
ChildIncidentsReportForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildIncidentsReportForm() {
  const router = useRouter();
  const { fosterChildId }: any = router.query;
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE}
        breadcrumbs={BREADCRUMBS(fosterChildId)}
      />
      <UpsertChildIncidentsReport />
    </>
  );
}
