import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { BackupForm } from "@root/sections/foster-child/other-information/placement-and-discharge-history/backup/form";
import { useRouter } from "next/router";
import { useGetBackupIdQuery } from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "View Backup";

Backup.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function Backup() {
  const { makePath } = usePath();
  const router: any = useRouter();
  const { backupId }: any = router.query;

  const { data, isLoading, isError } = useGetBackupIdQuery(backupId);

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Backup List",
      href: makePath({
        path: "/foster-child/other-information/placement-and-discharge-history",
        skipQueries: ["backupId"],
      }),
    },
    {
      name: "View Backup",
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"View Backup"}
      />

      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <BackupForm
          disabled
          initialValueProps={{
            ...data[0],
            placementDate: new Date(data[0]?.placementDate),
            dischargeDate: new Date(data[0]?.dischargeDate),
          }}
        />
      )}
    </Page>
  );
}
