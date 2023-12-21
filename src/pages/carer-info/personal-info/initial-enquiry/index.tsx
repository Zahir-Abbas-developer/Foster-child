import React, { useState } from "react";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
//components import
import { Contact } from "@root/sections/enquiry-stage/initial-enquiry/contact";
import { FirstApplicant } from "@root/sections/enquiry-stage/initial-enquiry/first-applicant";
import { OtherDetails } from "@root/sections/enquiry-stage/initial-enquiry/other-details";

//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import {
  useGetInitialInquiryDataQuery,
  useGetInitialInquiryDocumentsDataQuery,
} from "@root/services/carer-info/personal-info/initial-enquiry/initial-inquiry-all";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeleteDocumentsMutation,
  useUploadDocumentsMutation,
} from "@root/services/carer-info/personal-info/initial-enquiry/documentsApi";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { usePost1stApplicantFormDataMutation } from "@root/services/carer-info/personal-info/initial-enquiry/firstApplicantApi";
import { usePostContactFormDataMutation } from "@root/services/carer-info/personal-info/initial-enquiry/contactApi";
import { usePostOtherDetailsFormDataMutation } from "@root/services/carer-info/personal-info/initial-enquiry/otherDetailsApi";

// ----------------------------------------------------------------------
// Constants

const PAGE_TITLE = "Initial Enquiry";

export const INITIALENQUIRYDATA = [
  "First Applicant",
  "Contact",
  "Other Details",
  "Documents",
];

// ----------------------------------------------------------------------

InitialEnquiry.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InitialEnquiry() {
  const [docParams, setDocParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
  });
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Initial Enquiry",
      href: "/carer-info/personal-info/initial-enquiry",
    },
  ];
  const docsData = new FormData();
  const formData = new FormData();

  const { data, isLoading, isError }: any = useGetInitialInquiryDataQuery({});

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useGetInitialInquiryDocumentsDataQuery(docParams);

  const [addFirstApplicant, firstApplicantStatus] =
    usePost1stApplicantFormDataMutation();
  const [postDocuments] = useUploadDocumentsMutation();
  const [postContacts] = usePostContactFormDataMutation();
  const [postOtherDetails] = usePostOtherDetailsFormDataMutation();
  const [deleteDocument] = useDeleteDocumentsMutation();

  const documentUploadHandler = (data: any) => {
    docsData.append("documentType", data.documentType);
    docsData.append("date", data.documentDate);
    docsData.append("password", data.password);
    docsData.append("document", data.chosenFile);
    postDocuments(docsData);
  };

  const tableData: any = documentData?.data?.documents;
  const metaData: any = documentData?.data?.meta;

  //---------------------// uncovering Data //-------------------------------//
  // --------------------------// Submit Handlers //----------------------------//
  const firstApplicantSubmitHandler = async (data: any) => {
    formData.append("image", data?.image);
    formData.append("isJointApplicant", data?.isJointApplicant);
    formData.append("dateOfEnquiry", data?.dateOfEnquiry);
    formData.append("areaOffice", data?.areaOffice);
    formData.append("whereHearAboutOutAgency", data?.whereHearAboutOutAgency);
    formData.append(
      "additionalSourceInformation",
      data?.additionalSourceInformation
    );
    formData.append("title", data?.title);
    formData.append("firstName", data?.firstName);
    formData.append("middleName", data?.middleName);
    formData.append("lastName", data?.lastName);
    formData.append("dateOfBirth", data?.dateOfBirth);
    formData.append("age", data?.age);
    formData.append("gender", data?.gender);
    formData.append("ethnicity", data?.ethnicity);
    formData.append("religion", data?.religion);
    formData.append("practicingStatus", data?.practicingStatus);
    formData.append("mobileNo", data?.mobileNo);
    formData.append("email", data?.email);
    formData.append("spareBedrooms", data?.spareBedrooms);
    formData.append("permanentResidencyInUk", data?.permanentResidencyInUk);
    formData.append("outStandingCourtOrders", data?.outStandingCourtOrders);
    try {
      const res: any = await addFirstApplicant({
        formData,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/personal-info/initial-enquiry?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  const contactSubmitHandler = async (data: any) => {
    try {
      const res: any = await postContacts({
        data,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/personal-info/initial-enquiry?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  const otherDetailsSubmitHandler = async (data: any) => {
    try {
      const res: any = await postOtherDetails({
        data,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/carer-info/personal-info/initial-enquiry?fosterCarerId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  const formEl = (
    <HorizontalTabs tabsDataArray={INITIALENQUIRYDATA}>
      {/*---------------------- First Tab---------------------- */}
      <FirstApplicant
        disabled={true}
        isLoading={isLoading || firstApplicantStatus?.isLoading}
        isError={isError}
        onSubmit={firstApplicantSubmitHandler}
        data={{
          ...data?.firstApplicant,
          dateOfEnquiry: new Date(dayjs().format("MM/DD/YYYY")),
          dateOfBirth: new Date(
            dayjs(data?.firstApplicant?.dateOfBirth).format("MM/DD/YYYY")
          ),
          image: { name: data?.firstApplicant?.image },
        }}
      />

      {/*---------------------- Second Tab---------------------- */}
      <Contact
        disabled={true}
        data={data?.contact}
        isError={isError}
        onSubmit={contactSubmitHandler}
      />

      {/*---------------------- Third Tab---------------------- */}
      <OtherDetails
        disabled={true}
        data={data?.otherDetails}
        isError={isError}
        onSubmit={otherDetailsSubmitHandler}
      />

      {/*---------------------- Fourth Tab---------------------- */}
      <UploadDocuments
        readOnly={true}
        searchParam={(searchedText: string) =>
          setDocParams((prev: any) => {
            return { ...prev, search: searchedText.search };
          })
        }
        tableData={tableData}
        // tableData={[
        //   {
        //     document: "bad.png",
        //     documentType: "png",
        //     date: "09/09/2009",
        //     personName: "My name",
        //     password: "password123",
        //   },
        // ]}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        column={["document", "documentType", "date", "personName", "password"]}
        modalData={documentUploadHandler}
        onDelete={(data: any) => deleteDocument(data?.id)}
        onPageChange={(page: any) =>
          setDocParams((prev: any) => {
            return { ...prev, offset: (page - 1) * 10 };
          })
        }
        currentPage={metaData?.page}
        totalPages={metaData?.pages}
      />
    </HorizontalTabs>
  );

  if (isLoading)
    return (
      <Page title={PAGE_TITLE}>
        <Box sx={{ position: "relative" }}>
          <SkeletonFormdata />
        </Box>
      </Page>
    );
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {formEl}
    </Page>
  );
}
