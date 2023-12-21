import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { TransferForm } from "@root/sections/foster-child/other-information/placement-and-discharge-history/transfer/form";
import { useRouter } from "next/router";
import { useGetTransferIdQuery } from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "View Transfer";

Transfer.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function Transfer() {
  const { makePath } = usePath();
  const router: any = useRouter();
  const { transferId }: any = router.query;

  const { data, isLoading, isError } = useGetTransferIdQuery(transferId);

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Discharge List",
      href: makePath({
        path: "/foster-child/other-information/placement-and-discharge-history",
        skipQueries: ["transferId"],
      }),
    },
    {
      name: "View Transfer",
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"View Transfer"}
      />

      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <TransferForm
          disabled
          initialValueProps={{
            ...data[0],
            placementDate: new Date(data[0]?.placementDate),
            transferDate: new Date(data[0]?.transferDate),
          }}
        />
      )}
    </Page>
  );
}
