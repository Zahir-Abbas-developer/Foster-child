import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ApiInventoryForm from "@root/sections/system-admin/api-inventory/api-inventory-form/ApiInventoryForm";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin/api-inventory",
  },
  {
    name: "Api Inventory",
    href: "",
  },
];

const PAGE_TITLE = "Api Inventory Form";
InventoryForm.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function InventoryForm() {
  return (
    <Page title={PAGE_TITLE}>
      <ApiInventoryForm />
    </Page>
  );
}
