// layouts
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
// sections

// --------Leaving this import as and example ------------
// import {
//   HomeHero,
//   HomeDarkMode,
//   HomeLookingFor,
//   HomeColorPresets,
//   HomePricingPlans,
//   HomeAdvertisement,
//   HomeCleanInterfaces,
//   HomeHugePackElements,
// } from '../sections/home';
// -------------------------------------------------------

// next-i18
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import DashboardSection from "@root/sections/dashboard/DashboardSection";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/dashboard",
  },
];

const PAGE_TITLE = "Dashboard";

// ----------------------------------------------------------------------
// Page Layout
Dashboard.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs={true}
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  // const { t } = useTranslation(["common", "footer"]);

  return (
    <Page title={PAGE_TITLE}>
      <DashboardSection />
    </Page>
  );
}

// export const getServerSideProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
//   },
// });
