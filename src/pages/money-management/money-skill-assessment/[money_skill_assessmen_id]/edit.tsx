import React from "react";
//  @mui icons
import { Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { MoneySkillAssessmentForm } from "@root/sections/money-management/money-skill-assessment/money-skill-assessment-form/MoneySkillAssessmentForm";
import { useGetMoneyAssessmentSkillByIdQuery } from "@root/services/money-management/money-skill-assessment/MoneySkillAssessmentAPI";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Money Management",
    href: `/money-management`,
  },
  {
    name: "All",
    href: "",
  },
];

const PAGE_TITLE = "Edit Money Skill Assessment List";

EditMoneySkillAssessment.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditMoneySkillAssessment() {
  const { query } = useRouter();
  const router = useRouter();
  const MoneySkillAssessmenId = query["money_skill_assessmen_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetMoneyAssessmentSkillByIdQuery(MoneySkillAssessmenId);
  console.log(data, "When Edit");

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query)}
        title={PAGE_TITLE}
      />
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
        <Paper elevation={3}>
          <MoneySkillAssessmentForm
            defaultValues={{ ...data[0], date: new Date(data[0]?.date) }}
          />
        </Paper>
      )}
    </Page>
  );
}
