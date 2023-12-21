import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AnnualReviewA from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-A/AnnualReviewA";
import { AnnualReviewB } from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-B";
import AnnualReviewC from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-C/AnnualReviewC";
import { AnnualReviewD } from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-D";
import AnnualReviewE from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-E/AnnualReviewE";
import PlacementReview from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/placement-review/PlacementReview";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { enqueueSnackbar } from "notistack";
import {
  useUploadDocumentListQuery,
  usePostReportDocumentsMutation,
  useDeleteDocumentListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/annual-review-api/annualReviewDocumentsApi";

AnnualReview.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AnnualReview() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const router: any = useRouter();
  const { action, id, fosterCarerId } = router.query;
  if (!action && !id) {
    router.push({
      pathname: "/carer-info/personal-info/carer-chronology-of-events",
      query: { fosterCarerId: fosterCarerId },
    });
  }

  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Review List",
      href: {
        pathname: "/carer-info/personal-info/carer-chronology-of-events",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Annual Review",
      href: "",
    },
  ];

  const PAGE_TITLE = "Annual Review";

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useUploadDocumentListQuery({
    params: {
      recordId: id,
      search: search,
      limit: 10,
      offset: page,
    },
  });

  //OOH ReportUpload Modal API
  const [postDocuments] = usePostReportDocumentsMutation();

  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDocumentListMutation();

  const tableData: any = documentData?.data?.carer_chronology_document;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "ANNUAL_REVIEW");
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);
    formData.append("recordId", id);
    try {
      await postDocuments(formData).unwrap();
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const deleteDocument = async (id: any) => {
    deleteDocumentList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        disabled={
          !id && [
            "Annual Review B",
            "Annual Review C",
            "Annual Review D",
            "Placement Review",
          ]
        }
        tabsDataArray={[
          "Annual Review A",
          "Annual Review B",
          "Annual Review C",
          "Annual Review D",
          "Annual Review E",
          "Placement Review",
          "Documents",
        ]}
      >
        {/* Annual Review A Component */}
        <AnnualReviewA action={action} id={id} />
        {/* Annual Review B Component */}
        <AnnualReviewB action={action} id={id} />
        {/* Annual Review C Component */}
        <AnnualReviewC action={action} id={id} />
        {/* Annual Review D Component */}
        <AnnualReviewD action={action} id={id} />
        {/* Annual Review E Component */}
        <AnnualReviewE />
        {/* Placement Review Component */}
        <PlacementReview action={action} id={id} />
        {/* Documents Component */}
        <UploadDocuments
          readOnly={action === "view" ? true : false}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isFetching}
          isError={hasDocumentError}
          isSuccess={isSuccess}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          searchParam={(searchedText: any) => setSearch(searchedText.search)}
          onPageChange={(page: any) => setPage((page - 1) * 10)}
          modalData={(data: any) => documentUploadHandler(data)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
          onDelete={(data: any) => {
            deleteDocument(data.id);
          }}
          disabled={
            !!id && (action === "add" || action === "edit") ? false : true
          }
        />
      </HorizaontalTabs>
    </>
  );
}
