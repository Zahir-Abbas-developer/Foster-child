import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import { KidieeSavingForm } from "@root/sections/money-management/kidiee-saving/kidiee-saving-form/KidieeSavingForm";
import { useGetKidieeSavingByIdQuery } from "@root/services/money-management/kidiee-saving/KidieeSavingAPI";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Money Management",
    href: `/money-management`,
  },
  {
    name: "Kidiee Saving List",
    href: "",
  },
];

const PAGE_TITLE = "Edit Kidiee Saving";
// ----------------------------------------------------------------------

EditKidieeSavingList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditKidieeSavingList() {
  const { query } = useRouter();
  const router = useRouter();
  const kidieeSavingId = query["kidiee_saving_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetKidieeSavingByIdQuery(kidieeSavingId);
  console.log(data, "When Edit");

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <KidieeSavingForm
            defaultValues={{ ...data[0], date: new Date(data[0]?.date) }}
          />
        )}
      </Paper>
    </Page>
  );
}
