import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { DischargeForm } from "@root/sections/foster-child/other-information/placement-and-discharge-history/discharge/form";
import usePath from "@root/hooks/usePath";
import { usePostDischargeMutation } from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";

const PAGE_TITLE = "Add Discharge";

Discharge.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function Discharge() {
  const { makePath } = usePath();

  const [postData, { isError, isSuccess }] = usePostDischargeMutation();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Discharge List",
      href: makePath({
        path: "/foster-child/other-information/placement-and-discharge-history",
      }),
    },
    {
      name: "Add Discharge",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"Add Discharge"}
      />

      <DischargeForm
        onSubmitHandler={postData}
        message={"Added"}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
