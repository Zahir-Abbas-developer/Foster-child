import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import { columnsEducationKeyStageTable } from ".";
import { useRouter } from "next/router";
import { useGetEducationKeyStageReportListQuery } from "@root/services/foster-child/child-reports/education-key-stage-report/EducationKeyStageReportAPI";
import dayjs from "dayjs";

const useEducationKeyStageReportList = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const fosterChildId = router.query.fosterChildId

  const {data,isLoading} = useGetEducationKeyStageReportListQuery({params,fosterChildId});  
  

  const columnsEducationKeyStageTableFunction =
    columnsEducationKeyStageTable(router,fosterChildId);
  return {
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    columnsEducationKeyStageTableFunction,
    data,
    isLoading
  };
};

export default useEducationKeyStageReportList;
