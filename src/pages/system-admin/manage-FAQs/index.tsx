import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ManageFaqsTabs from "@root/sections/system-admin/manage-FAQs/manage-faqs-tabs/ManageFaqsTabs";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Manage FAQs",
    href: "",
  },
];

const PAGE_TITLE = "Manage FAQs";
ManageFaqsPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function ManageFaqsPage() {
  return (
    <Page title={PAGE_TITLE}>
      <ManageFaqsTabs />
    </Page>
  );
}
