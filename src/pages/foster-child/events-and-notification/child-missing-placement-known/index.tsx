import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import MissingFormKnown from "@root/sections/foster-child/event-and-notification/child-exploitation/child-missing-placement/MissingFormKnown/MissingFormKnown";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import MissingFormUnKnown from "@root/sections/foster-child/event-and-notification/child-exploitation/child-missing-placement/MissingFormUnknown/MissingFormUnKnown";
import {
  useDeleteChildMissingPlacementDocsMutation,
  useGetChildMissingPlacementDocsQuery,
  useGetChildMissingPlacementKnownFormQuery,
  usePostChildMissingPlacementDocsMutation,
  usePostChildMissingPlacementKnownMutation,
} from "@root/services/foster-child/events-and-notification/childMissingReportApi";
import { enqueueSnackbar } from "notistack";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const PAGE_TITLE: string = "Child Missing Placement";
const CHILD_MISSING_TABS_DATA: string[] = ["Allegation", "Upload Documents"];
ChildMissingPlacement.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildMissingPlacement() {
  const { makePath } = usePath();
  const router = useRouter();
  const id: any = router?.query?.fosterChildId;
  const docsData = new FormData();
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
  const [params, setParams] = useState({
    limit: "10",
    offset: "0",
    search: undefined,
    fosterChildId: id,
    formName: "known_missing_placement",
  });
  //--------------------------APIS-----------------------//

  // getting documents list
  const {
    data: tableData,
    isLoading: isDocumentLoading,
    isFetching,
    isSuccess,
    isError: hasDocumentError,
  }: any = useGetChildMissingPlacementDocsQuery(params);

  //getting form values by ID
  const { data: formData, isLoading } =
    useGetChildMissingPlacementKnownFormQuery(id);

  // posting Form
  const [postKnownMissingPlacement] =
    usePostChildMissingPlacementKnownMutation();

  //posting Documents
  const [postDocuments] = usePostChildMissingPlacementDocsMutation();

  //deleting documents
  const [deleteDocs] = useDeleteChildMissingPlacementDocsMutation();

  //-----------------submit handlers------------------------//
  //document posting
  const documentUploadHandler = async (data: any) => {
    docsData.append("formName", "KNOWN_MISSING_PLACEMENT");
    docsData.append("documentType", data.documentType);
    docsData.append("documentDate", data.documentDate);
    docsData.append("documentPassword", data.password);
    docsData.append("fosterChildId", id);
    docsData.append("file", data.chosenFile);
    try {
      const res: any = await postDocuments(docsData).unwrap();
      enqueueSnackbar(res?.message ?? `Document Submitted Successfully`, {
        variant: "success",
      });
      // router.push(`/foster-child?fosterChildId=${id}`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  //posting form handler
  const formSubmitHandler = async (data: any) => {
    try {
      const res: any = await postKnownMissingPlacement({
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
      <MissingFormKnown
        onSubmit={formSubmitHandler}
        prevPath={`/foster-child?fosterChildId=${id}`}
        data={formData?.data?.child_missing_known_placement?.[0]}
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
