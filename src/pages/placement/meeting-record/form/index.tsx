import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import MeetingRecordForm from "@root/sections/matching-and-placement/placement/placement-meeting-record/form/MeetingRecordForm";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const PAGE_TILE = "Placement Meeting Record";

PlacementModule.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function PlacementModule() {
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
      name: "Placement Meeting Record List",
      href: {
        pathname: "/placement/meeting-record",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Placement Meeting Record",
      href: "",
    },
  ];

  const PAGE_TITLE = "Placement Meeting Record";

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <MeetingRecordForm action={action} id={id} />
    </>
  );
}
