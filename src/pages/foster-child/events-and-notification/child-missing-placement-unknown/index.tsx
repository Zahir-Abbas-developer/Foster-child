import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import MissingFormUnKnown from "@root/sections/foster-child/event-and-notification/child-exploitation/child-missing-placement/MissingFormUnknown/MissingFormUnKnown";
import {
  useDeleteChildMissingPlacementDocsMutation,
  useGetChildMissingPlacementDocsQuery,
  useGetChildMissingPlacementUnKnownFormQuery,
  usePostChildMissingPlacementDocsMutation,
  usePostChildMissingPlacementUnKnownMutation,
} from "@root/services/foster-child/events-and-notification/childMissingReportApi";
import { enqueueSnackbar } from "notistack";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE: string = "Child Missing Placement";
const CHILD_MISSING_TABS_DATA: string[] = ["Allegation", "Upload Documents"];
ChildMissingPlacement.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildMissingPlacement() {
  const docsData = new FormData();
  const { makePath } = usePath();
  const router = useRouter();
  const id: any = router?.query?.fosterChildId;

  const [params, setParams] = useState({
    limit: "10",
    offset: "0",
    search: undefined,
    fosterChildId: id,
    formName: "unknown_missing_placement",
  });
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "child missing placement",
      href: "/foster-child/child-missing-placement",
    },
  ];

  //--------------------------APIS-----------------------//
  //getting documents List
  const {
    data: tableData,
    isLoading: isDocumentLoading,
    isFetching,
    isSuccess,
    isError: hasDocumentError,
  }: any = useGetChildMissingPlacementDocsQuery(params);

  //getting formData by Id
  const { data: formData, isLoading } =
    useGetChildMissingPlacementUnKnownFormQuery(id);

  //posting form
  const [postUnKnownMissingPlacement] =
    usePostChildMissingPlacementUnKnownMutation();

  // posting documents
  const [postDocuments] = usePostChildMissingPlacementDocsMutation();

  //deleting document
  const [deleteDocs] = useDeleteChildMissingPlacementDocsMutation();
  //-----------------submit handlers------------------------//
  //posting document
  const documentUploadHandler = async (data: any) => {
    docsData.append("formName", "UNKNOWN_MISSING_PLACEMENT");
    docsData.append("documentType", data.documentType);
    docsData.append("documentDate", data.documentDate);
    docsData.append("documentPassword", data.password);
    docsData.append("file", data.chosenFile);
    docsData.append("fosterChildId", id);
    try {
      const res: any = await postDocuments(docsData).unwrap();
      enqueueSnackbar(res?.message ?? `Document Submitted Successfully`, {
        variant: "success",
      });
      router.push(`/foster-child?fosterChildId=${id}`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  //posting form
  const missingFormSubmitHandler = async (data: any) => {
    try {
      const res: any = await postUnKnownMissingPlacement({
        body: data,
        fosterChildId: id,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(`/foster-child?fosterChildId=${id}`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  let formEl = (
    <HorizontalTabs tabsDataArray={CHILD_MISSING_TABS_DATA}>
      <MissingFormUnKnown
        onSubmit={missingFormSubmitHandler}
        prevPath={`/foster-child?fosterChildId=${id}`}
        data={formData?.data?.child_missing_unknown_placement?.[0]}
      />
      <UploadDocuments
        // readOnly={true}
        searchParam={(searchedText: string) =>
          setParams((prev: any) => {
            return { ...prev, search: searchedText.search };
          })
        }
        tableData={tableData?.data?.missing_placement_documents}
        isLoading={isDocumentLoading}
        isFetching={isFetching}
        isError={hasDocumentError}
        isSuccess={isSuccess}
        column={[
          "file",
          "documentType",
          "documentDate",
          "personUploaded",
          "documentPassword",
        ]}
        modalData={documentUploadHandler}
        onDelete={(data: any) => deleteDocs(data?.id)}
        onPageChange={(page: any) =>
          setParams((prev: any) => {
            return { ...prev, offset: (page - 1) * 10 };
          })
        }
        currentPage={tableData?.data?.metaData?.page}
        totalPages={tableData?.data?.metaData?.pages}
      />
    </HorizontalTabs>
  );

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {isLoading ? <SkeletonFormdata /> : formEl}
    </Page>
  );
}
