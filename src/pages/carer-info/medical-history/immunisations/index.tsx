import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import  {ImmunisationMain}  from "@root/sections/carer-info/medical-history/immunisations/Immunisations";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------

// Immunisations.getLayout = function getLayout(page: any) {
//   return <Layout variant="dashboard">{page}</Layout>;
// };

// ----------------------------------------------------------------------

export default function Immunisations() {
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
      name: "Immunisations List",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={'Immunisation'}
      >
      <ImmunisationMain />
      </Layout>
    
  );
}
