import { Box, Card } from "@mui/material";
import { useSupervisoryHomeVisitTable } from "./useSupervisoryHomeVisitTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useRouter } from "next/router";
import dayjs from "dayjs";
export const SupervisoryHomeVisitTable = (props: any) => {
  const router = useRouter();
  const { fosterChildId } = props;
  const {
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useSupervisoryHomeVisitTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.nameOfSupervising,
      id: "nameOfSupervising",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerSectionA.dateOfVisit,
      id: "dateOfVisit",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerSectionA.homeVisitType,
      id: "homeVisitType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Visit Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerSectionA.homeVisitStatus,
      id: "homeVisitStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Visit Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerSectionA.category,
      id: "category",
      cell: (info: any) => info.getValue(),
      header: () => <span>Category</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdAt,
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.createdBy || "---",
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span> Created By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/supervisory-home-visit/${info.getValue()}/view`,
                query: {
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          <TableAction type="print" onClicked={() => window.print()} />
          <TableAction
            type="share"
            onClicked={() =>
              router.push({
                query: { fosterChildId: fosterChildId },
              })
            }
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Card>
        <TableHeader
          title="SUPERVISORY HOME VISIT"
          searchKey="search"
          onChanged={headerChangeHandler}
        />
        <CustomTable
          showSerialNo
          data={data?.data?.["supervisory_home_visit"]}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          currentPage={data?.meta?.page}
          totalPages={data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
};
