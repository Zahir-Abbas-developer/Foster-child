import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetSupervisoryHomeVisitDocumentQuery } from "@root/services/foster-child/child-reports/supervisory-home-visit/SupervisoryHomeVisitAPI";
import { useState } from "react";

export const useSupervisoryUploadDocuments = () => {
  const router = useRouter();
  const [docParams, setDocParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
  });
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const supervisoryHomeVisitId = router?.query["supervisory_home_visit_id"];
  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetSupervisoryHomeVisitDocumentQuery<any>({
      params: docParams,
      supervisoryHomeVisitId,
    });
  console.log("documents,,,,,,,,,,,,", data);
  return {
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setDocParams,
  };
};
