import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import usePath from "@root/hooks/usePath";
import { PersonalInfoForm } from "@root/sections/foster-child/referrals/child-referral/personalInfo";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import LaDetails from "@root/sections/foster-child/referrals/child-referral/laDetails/LaDetails";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useChildReferralDocListQuery,
  useGetChildReferralIdQuery,
} from "@root/services/foster-child/referrals/child-referral/childReferralApi";
import { useRouter } from "next/router";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE = "View Child Referral";

ViewChildReferral.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewChildReferral() {
  const { makePath } = usePath();

  const router: any = useRouter();
  const { childReferralId } = router.query;

  const { data, isLoading, isError } =
    useGetChildReferralIdQuery(childReferralId);

  const [docParams, setDocParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
  });

  const {
    data: docData,
    isLoading: docLoading,
    isFetching: docFetching,
    isError: docError,
    isSuccess: docSuccess,
  }: any = useChildReferralDocListQuery({ childReferralId, params: docParams });

  const tableData: any = docData?.data?.child_refferal_docs;
  const metaData: any = docData?.data?.meta;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child/referrals/child-referral",
        skipQueries: ["childReferralId"],
      }),
    },
    {
      name: PAGE_TITLE,
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Personal Info", "LA-Details", "Document(s)"]}
      >
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <PersonalInfoForm
            disabled
            initialValueProps={{
              ...data?.data?.personalDetails,
              dob: new Date(data?.data?.personalDetails?.dob),
            }}
          />
        )}
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <LaDetails
            disabled
            initialValueProps={{
              ...data?.data?.laDetails,
              referalDate: new Date(data?.data?.laDetails?.referalDate),
              dateLaNotified: new Date(data?.data?.laDetails?.dateLaNotified),
            }}
          />
        )}

        <UploadDocuments
          readOnly
          searchParam={(searchedText: string) =>
            setDocParams((prev: any) => {
              return { ...prev, search: searchedText.search };
            })
          }
          tableData={tableData}
          isLoading={docLoading}
          isFetching={docFetching}
          isError={docError}
          isSuccess={docSuccess}
          column={["docFile", "docType", "date", "uploadedBy", "password"]}
          onPageChange={(page: any) =>
            setDocParams((prev: any) => {
              return { ...prev, offset: (page - 1) * 10 };
            })
          }
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Page>
  );
}
