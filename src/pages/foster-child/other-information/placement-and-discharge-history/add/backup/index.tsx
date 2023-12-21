import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { BackupForm } from "@root/sections/foster-child/other-information/placement-and-discharge-history/backup/form";
import { usePostBackupMutation } from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";

const PAGE_TITLE = "Add Backup";

Backup.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function Backup() {
  const { makePath } = usePath();

  const [postData, { isError, isSuccess }] = usePostBackupMutation();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Discharge List",
      href: makePath({
        path: "/foster-child/other-information/placement-and-discharge-history",
      }),
    },
    {
      name: "Add Backup",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"Add Backup"}
      />

      <BackupForm
        onSubmitHandler={postData}
        message={"Added"}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
