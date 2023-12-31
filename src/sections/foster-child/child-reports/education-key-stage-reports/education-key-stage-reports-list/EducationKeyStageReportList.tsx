import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import useEducationKeyStageReportList from "./useEducationKeyStageReportList";
import IsFetching from "@root/components/loaders/IsFetching";

const EducationKeyStageReportList = () => {
  const {
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    columnsEducationKeyStageTableFunction,
    data,
    isLoading
  } = useEducationKeyStageReportList();
  return (
    <div>
      <TableHeader
        ref={tableHeaderRef}
        title="EDUCATION KEY STAGE REPORTS"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      {isLoading ? (
        <IsFetching isFetching={isLoading} />
      ) : (
        <>
          <CustomTable
            columns={columnsEducationKeyStageTableFunction}
            data={data?.data}
            onPageChange={pageChangeHandler}
            onSortByChange={sortChangeHandler}
            isSuccess={true}
            isError={false}
            isFetching={false}
            isLoading={false}
            isPagination={false}
            // totalPages={data?.data?.meta?.pages}
            // currentPage={data?.data?.meta?.page}
          />
        </>
      )}
    </div>
  );
};

export default EducationKeyStageReportList;
