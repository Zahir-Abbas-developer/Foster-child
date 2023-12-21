import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { HealthAndSafetyMain } from "@root/sections/carer-info/medical-history/health-and-safety/HealthAndSafetyMain";
import React from "react";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

HealthAndSafety.getLayout = function getLayout(page: any) {
  return <Layout title={"Health & Safety"}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HealthAndSafety() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Health & Safety",
    },
  ];

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"Health & Safety"}
      />
      <HealthAndSafetyMain />
    </>
  );
}
