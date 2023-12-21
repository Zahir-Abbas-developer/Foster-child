import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { DischargeForm } from "@root/sections/foster-child/other-information/placement-and-discharge-history/discharge/form";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import {
  useGetDischargeIdQuery,
  usePatchDischargeIdMutation,
} from "@root/services/foster-child/other-information/placement-and-discharge-history/placementAndDischargeHistoryApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "Edit Discharge";

Discharge.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function Discharge() {
  const { makePath } = usePath();
  const router: any = useRouter();
  const { dischargeId }: any = router.query;

  const { data, isLoading, isError } = useGetDischargeIdQuery(dischargeId);

  const [updateData, { isSuccess, isError: isErrorPatch }] =
    usePatchDischargeIdMutation();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Discharge List",
      href: makePath({
        path: "/foster-child/other-information/placement-and-discharge-history",
        skipQueries: ["dischargeId"],
      }),
    },
    {
      name: "Edit Discharge",
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"Edit Discharge"}
      />

      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <DischargeForm
          initialValueProps={{
            ...data[0],
            placementDate: new Date(data[0]?.placementDate),
            dischargeDate: new Date(data[0]?.dischargeDate),
          }}
          onSubmitHandler={updateData}
          message={"Updated"}
          isError={isErrorPatch}
          isSuccess={isSuccess}
        />
      )}
    </Page>
  );
}
