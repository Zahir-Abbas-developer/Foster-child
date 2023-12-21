import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { usePostSubstituteCarerMutation } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import VocationalCourseForm from "@root/sections/foster-child/vocational-course-info/vocational-course-form/VocationalCourseForm";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import {
  useAddVocationalInfoDocumentMutation,
  useAddVocationalInfoMutation,
  useDeleteVocationalInfoDocumentMutation,
  useEditVocationalInfoMutation,
  useVocationalInfoByIdQuery,
  useVocationalInfoDocumentsQuery,
} from "@root/services/foster-child/vocational-info-list/VocationalInfoListApi";
import { enqueueSnackbar } from "notistack";
import { formData } from "@root/sections/carer-info/personal-info/carer-address-history";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Vocational Course Info";

export const TABSDATA = ["Course Info", "Upload Documents"];

VocationalCourseInfoForm.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function VocationalCourseInfoForm() {
  const { makePath } = usePath();
  const router = useRouter();
  const formData = new FormData();
  const id = router?.query?.fosterChildId;
  const recordId = router?.query?.recordId;
  const viewMode = router?.query?.view;
  const todayDate = dayjs().format("MM/DD/YYYY");

  const [docParams, setDocParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
    fosterChildId: id,
  });

  const [postVocationalInfo, status] = useAddVocationalInfoMutation();
  const [postVocationalDoc] = useAddVocationalInfoDocumentMutation();
  const [deleteVocationalDoc] = useDeleteVocationalInfoDocumentMutation();
  const [editVocationalDoc] = useEditVocationalInfoMutation();

  const {
    data: docData,
    isLoading: isDocLoading,
    isFetching: isDocFetching,
    isError: hasDocError,
    isSuccess: isDocSuccess,
  } = useVocationalInfoDocumentsQuery(docParams);
  const {
    data: formValues,
    isLoading,
    isSuccess,
  } = useVocationalInfoByIdQuery(recordId, {
    skip: !!!recordId,
  });
  const BREADCRUMBS = [
    {
      name: "",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Vocational Course Info List",
      href: makePath({
        path: "/foster-child/education-records/vocational-course-info",
      }),
    },
    {
      name: "Course Info",
      href: "/foster-child/education-records/vocational-course-info/details",
    },
  ];

  const formSubmitHandler = async (formData: any) => {
    try {
      const res: any = await postVocationalInfo({
        body: formData,
        id,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/foster-child/education-records/vocational-course-info?fosterChildId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
    console.log(formData);
  };
  const documentSubmitHandler = async (data: any) => {
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("documentFile", data.chosenFile);
    try {
      const res: any = await postVocationalDoc({
        fosterChildId: id,
        recordId,
        body: formData,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
    console.log(formData);
  };
  const documentDeleteHandler = async (row: any) => {
    try {
      const res: any = await deleteVocationalDoc(row.id).unwrap();
      enqueueSnackbar(res?.message ?? `Document Deleted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  console.log("searching", docParams);

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizontalTabs tabsDataArray={!!recordId ? TABSDATA : ["Course Info"]}>
        <VocationalCourseForm
          onSubmit={(data: any) => {
            formSubmitHandler(data);
          }}
          status={status}
          gettingStatus={{ isLoading }}
          onEdit={(data: any) => console.log(data)}
          data={{
            ...formValues,
            startDate: new Date(formValues?.startDate || todayDate),
            endDate: new Date(formValues?.endDate || todayDate),
          }}
          disabled={viewMode}
          prevPath={`/foster-child/education-records/vocational-course-info?fosterChildId=${id}`}
        />

        {/* --------------------------------------//------------------------------------------ */}
        {!!recordId && (
          <UploadDocuments
            disabled={viewMode}
            searchParam={(searchedText: string) =>
              setDocParams((prev: any) => {
                return { ...prev, search: searchedText.search };
              })
            }
            tableData={docData?.vocationalInfoDocuments ?? []}
            isLoading={isDocLoading}
            isFetching={isDocFetching}
            isError={hasDocError}
            isSuccess={isDocSuccess}
            column={[
              "documentFile",
              "documentType",
              "documentDate",
              "personName",
              "password",
            ]}
            modalData={documentSubmitHandler}
            onDelete={documentDeleteHandler}
            onPageChange={(page: any) =>
              setDocParams((prev: any) => {
                return { ...prev, offset: (page - 1) * 10 };
              })
            }
            currentPage={docData?.meta?.page || "1"}
            totalPages={docData?.meta?.pages || "1"}
          />
        )}
      </HorizontalTabs>
    </Page>
  );
}
