import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import CarerSectionA from "@root/sections/carer-info/personal-info/chronology-of-events/supervisory-visit/carer-section-A/CarerSectionA";
import CarerSectionB from "@root/sections/carer-info/personal-info/chronology-of-events/supervisory-visit/carer-section-B/CarerSectionB";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteSupervisoryDocumentMutation,
  usePostSupervisoryVisitDocumentsMutation,
  useSupervisoryVisitUploadDocumentQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/supervisory-visit-api/superVisoryVisitDocuments";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import useAuth from "@root/hooks/useAuth";
import dayjs from "dayjs";

SupervisoryVisit.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function SupervisoryVisit() {
  const {
    user: { firstName, lastName },
  }: any = useAuth();
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
      name: "Supervisory Home Visit List",
      href: {
        pathname: "/carer-info/personal-info/carer-chronology-of-events",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Supervisory Home Visit",
      href: "",
    },
  ];

  const PAGE_TITLE = "Supervisory Home Visit";

  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching,
    isError: hasDocumentError,
    isSuccess,
  }: any = useSupervisoryVisitUploadDocumentQuery({
    params: {
      supervisoryHomeVisitId: id,
      search: search,
      limit: 10,
      offset: page,
    },
  });

  //Car Insurance Upload Modal API
  const [postDocuments] = usePostSupervisoryVisitDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteSupervisoryDocumentMutation();

  const tableData: any = documentData?.data?.supervisory_home_visit_doc;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("docType", data.documentType);
    formData.append("date", dayjs(data.documentDate).format("DD/MM/YYYY"));
    formData.append("password", data.password);
    formData.append("docFile", data.chosenFile);
    try {
      await postDocuments({
        params: {
          supervisoryHomeVisitId: id,
        },
        body: formData,
      }).unwrap();
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
        disabled={!id && ["Carer Section B"]}
        tabsDataArray={[
          "Carer Section A",
          "Carer Section B",
          "Upload Documents",
        ]}
      >
        {/* Carer Section A Component */}
        <CarerSectionA action={action} id={id} />
        {/* Carer Section B Component */}
        <CarerSectionB action={action} id={id} />
        {/* Upload Documents Component */}
        <UploadDocuments
          readOnly={action === "view" ? true : false}
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isFetching}
          isError={hasDocumentError}
          isSuccess={isSuccess}
          column={[
            "docName",
            "docType",
            "documentDate",
            "uploadedBy",
            "password",
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
