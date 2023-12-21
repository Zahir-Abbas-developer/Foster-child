import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { useSupervisoryVisit } from "./useSupervisoryVisit";

const AllegationTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    supervisoryVisits,
    supervisoryVisitIsloading,
    supervisoryVisitIsfetching,
    supervisoryVisitError,
    supervisoryVisitIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    setSearch,
    fosterCarerId,
  } = useSupervisoryVisit();

  const columns = [
    {
      accessorFn: (row: any) => row?.nameOfSupervising ?? "-",
      id: "supervisingSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.visitDate ?? "-",
      id: "dateOfVisit",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerSectionA?.homeVisitType ?? "-",
      id: "visitType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Visit Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerSectionA?.homeVisitStatus ?? "-",
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.locked ?? "-",
      id: "locked",
      cell: (info: any) => info.getValue(),
      header: () => <span>Locked</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.childOutCome ?? "-",
      id: "childOutCome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Outcome</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.fcSignature ?? "-",
      id: "fcSignature",
      cell: (info: any) => info.getValue(),
      header: () => <span>Fc Signature</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/personal-info/carer-chronology-of-events/supervisory-visit",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />

          {/* Calling Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/personal-info/carer-chronology-of-events/supervisory-visit",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Supervisory Home Visit"
          searchKey="search"
          showAddBtn
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/supervisory-visit",
              query: { action: "add", fosterCarerId: fosterCarerId },
            });
          }}
        />
      </Box>
      <CustomTable
        data={supervisoryVisits}
        columns={columns}
        isLoading={supervisoryVisitIsloading}
        isFetching={supervisoryVisitIsfetching}
        isError={supervisoryVisitError}
        isSuccess={supervisoryVisitIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default AllegationTable;
