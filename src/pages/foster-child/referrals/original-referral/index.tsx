import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ViewOriginalChild from "@root/sections/foster-child/referrals/original-child-referral/OriginalChildReferral";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

const PAGE_TITLE = "Original Child Referral";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditChildExclusionInfoPage() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs tabsDataArray={["Personal Info"]}>
        <ViewOriginalChild />
      </HorizaontalTabs>
    </Page>
  );
}
