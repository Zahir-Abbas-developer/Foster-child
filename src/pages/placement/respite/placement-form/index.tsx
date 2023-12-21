import React, { useState } from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import RespitePlacementForm from "@root/sections/matching-and-placement/placement/respite-placement/respite-placement-form/RespitePlacementForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AddPlacementForm() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const router: any = useRouter();
  const { action, id, fosterChildId } = router.query;

  // if (!action && !id) {
  //   router.push({
  //     pathname: "/carer-info/background-checks/statutory-checks-list",
  //     query: { fosterChildId: fosterChildId },
  //   });
  // }

  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Respite List",
      href: {
        pathname: "/respite-placement",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Child Respite",
      href: "",
    },
  ];

  const PAGE_TITLE = "Child Respite";

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <RespitePlacementForm action={action} id={id} />
    </>
  );
}
