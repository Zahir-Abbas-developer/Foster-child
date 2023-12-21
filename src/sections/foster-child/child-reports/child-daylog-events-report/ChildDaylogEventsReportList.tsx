import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useChildDaylogEventsReportList } from "./useChildDaylogEventsReportList";
const ChildDaylogEventsReportList = () => {
  const {
    childDaylogEventsReportInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT,
  }: any = useChildDaylogEventsReportList();
  return (
    <>
      <Box>
        <TableHeader
          title="DAY LOG EVENTS REPORTS"
          searchKey="search"
          showAddBtn={false}
          onAdd={() =>
            router.push({
              pathname: `/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info`,
              query: {
                ...(!!router?.query?.fosterChildId && {
                  fosterChildId: router?.query?.fosterChildId,
                }),
              },
            })
          }
          onChanged={(data: any) => {
            setSearchValue(data?.search);
          }}
        />

        <CustomTable
          data={data?.data?.cc_day_log}
          columns={childDaylogEventsReportInfoTableColumns}
          isLoading={isLoading}
          showSerialNo
          isFetching={isFetching}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={(pageNo: any) => {
            setPage((pageNo - 1) * CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT);
          }}
        />
      </Box>
    </>
  );
};

export default ChildDaylogEventsReportList;
