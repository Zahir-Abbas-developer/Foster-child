import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import ViewIfaParticipationForChild from "@root/sections/foster-child/other-information/ifa-participation-policy-child/view-ifa-participation-policy-child/ViewIfaParticipationChild";


const PAGE_TITLE = "IFA Participation Policy for Child";

ViewIfaParticipationChild.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA Participation Policy List",
          href: "",
        },
        {
          name: "IFA Participation Policy for Child",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewIfaParticipationChild() {
  return (
    <Page title={PAGE_TITLE}>
        <ViewIfaParticipationForChild />
    </Page>
  );
}
