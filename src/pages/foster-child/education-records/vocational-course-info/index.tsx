import VocationalCourseInfoTable from "@root/sections/foster-child/vocational-course-info/vocational-course-info-table/VocationalCourseInfoTable";
import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import SubstituteCarerTable from "@root/sections/carer-info/substitute-cares/SubstituteCarerTable";
import { useGetSelectedSubstituteCarerQuery } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Page from "@root/components/Page";
import usePath from "@root/hooks/usePath";
import {
  useDeleteVocationalInfoMutation,
  useVocationalInfoAllListQuery,
} from "@root/services/foster-child/vocational-info-list/VocationalInfoListApi";
import { enqueueSnackbar } from "notistack";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Vocational Course Info";

VocationalCourseInfo.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function VocationalCourseInfo() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterChildId;

  const [params, setParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
    fosterChildId: id,
  });

  const { data, isLoading, isFetching, isSuccess, isError } =
    useVocationalInfoAllListQuery({
      params,
    });
  const [deleteEntry] = useDeleteVocationalInfoMutation();

  const deleteEntryHandler = async (data: any) => {
    try {
      const res: any = await deleteEntry(data?.id).unwrap();
      enqueueSnackbar(res?.message ?? `Details Deleted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Foster Child",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "Vocational Course Info List",
      href: "/foster-child/education-records/vocational-course-info",
    },
  ];
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <VocationalCourseInfoTable
        tableData={data?.vocationalInfoList}
        meta={data?.meta}
        searchedText={(searchedText: any) =>
          setParams((prev: any) => {
            return { ...prev, search: searchedText.search };
          })
        }
        apiStatus={{ isLoading, isFetching, isSuccess, isError }}
        onPageChange={(page: any) =>
          setParams((prev: any) => {
            return { ...prev, offset: page };
          })
        }
        route={`/foster-child/education-records/vocational-course-info/details${
          id ? "?fosterChildId=" + id : ""
        }`}
        onDelete={deleteEntryHandler}
      />
    </Page>
  );
}
