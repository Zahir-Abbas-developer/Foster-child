import { Box, Card, Link, Typography } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { usePlacementMeetingRecord } from "./usePlacementMeetingRecordTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const PlacementMeetingRecord = () => {
  const {
    router,
    tableHeaderRefTwo,
    placementReferenceListIsloading,
    placementReferenceData,
    placementReferenceListIsfetching,
    placementReferenceListError,
    placementReferenceListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    fosterChildId,
    headerChangeHandler,
    SELECT_FILTERS,
    theme,
  } = usePlacementMeetingRecord();

  const columns = [
    {
      accessorFn: (row: any) => row.childName ?? "-",
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.carerName ?? "-",
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingDate ?? "-",
      id: "meetingDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>;
      },
      header: () => <span>Meeting Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingAttendeesRole ?? "-",
      id: "meetingAttendee",
      cell: (info: any) => {
        return <Box>{info.getValue().length > 0 ? info.getValue() : "-"}</Box>;
      },
      header: () => <span>Meeting Attendees (Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingAgenda ?? "-",
      id: "meetingAgenda",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Agenda</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.socialWorker ?? "-",
      id: "socialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Agency Social Worker (SSW)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.localAuthority ?? "-",
      id: "localAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority SW</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingMinutesFileName ?? "-",
      id: "voiceMemo",
      cell: (info: any) => {
        return (
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.main,
              fontWeight: 600,
            }}
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info?.row?.original?.meetingMinutes}`}
            target="__blank"
          >
            {info?.getValue()}
          </Link>
        );
      },
      header: () => <span>Voice Memo on Rejection</span>,
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
                pathname: "/placement/meeting-record/form",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname: "/placement/meeting-record/form",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
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
      <TableHeader
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={headerChangeHandler}
        ref={tableHeaderRefTwo}
        title="Placement Meeting Record"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: "/placement/meeting-record/form",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={placementReferenceData}
        columns={columns}
        isLoading={placementReferenceListIsloading}
        isFetching={placementReferenceListIsfetching}
        isError={placementReferenceListError}
        isSuccess={placementReferenceListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default PlacementMeetingRecord;
