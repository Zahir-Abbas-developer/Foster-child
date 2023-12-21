import React, { useState } from "react";
import { fosterCarerData } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useRespitePlacementTable } from "./useRespitePlacementTable";
import CustomTable from "@root/components/Table/CustomTable";
import Image from "next/image";
import { Box, Button, useTheme } from "@mui/material";
import documentIcon from "../../../../assets/img/documentIcon.png";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
// ============================================================================================

const RespitePlacementTable = () => {
  const [DeleteModal, setDeleteModal] = useState(false);
  const theme = useTheme();

  const SELECT_FILTERS = [
    {
      key: "selectCarer",
      label: "Select Carer",
      options: [
        { label: "Foster Carer", value: "CARER" },
        { label: "Foster Child", value: "CHILD" },
      ],
    },
  ];

  const {
    router,
    tableHeaderRefTwo,
    respitePlacementListIsloading,
    respitePlacementReferenceData,
    respitePlacementListIsfetching,
    respitePlacementListError,
    respitePlacementListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterChildId,
    headerChangeHandler,
  } = useRespitePlacementTable();
  // const { router} = useRespitePlacementTable();

  // const handleDeleteModal = () => setDeleteModal(!DeleteModal);

  // const handleAction = (action?: string, id?: any) => {
  //   switch (action) {
  //     case "edit":
  //       router.push({ pathname: `/placement/respite/placement-form/${id}` });
  //       break;
  //     case "delete":
  //       handleDeleteModal();
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const respitePlacementColumns = [
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.primaryCarer,
      id: "primaryCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Primary Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.respiteCarerName,
      id: "respiteCarerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Respite Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.respiteStartDate,
      id: "respiteStartDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Respite(Start Date)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.respiteEndDate,
      id: "respiteEndDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Respite(End Date)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.respitePlan,
      id: "respitePlan",
      cell: (info: any) => (
        <Box display="flex" justifyContent="center">
          <Image width={28} height={32} src={documentIcon} alt="" />
        </Box>
      ),
      header: () => <span>Respite Plan</span>,
    },
    {
      accessorFn: (row: any) => row.approvedBy,
      id: "approvedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved By(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.localAuthority,
      id: "localAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.localAuthoritySW,
      id: "localAuthoritySW",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority SW</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => (
        <Box>
          <Button variant="contained">{info.getValue()}</Button>
        </Box>
      ),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    // {
    //   id: "actions",
    //   cell: (info: any) => (
    //     <>
    //       <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
    //         {["edit", "delete"].map((action: string) => (
    //           <span key={action} style={{ flexShrink: 0 }}>
    //             <TableAction
    //               type={action}
    //               onClicked={() => handleAction(action, info.row.original.id)}
    //             />
    //           </span>
    //         ))}
    //       </Box>
    //       <DeleteModel
    //         open={DeleteModal}
    //         handleClose={handleDeleteModal}
    //         onDeleteClick={handleDeleteModal}
    //       />
    //     </>
    //   ),
    //   header: "Actions",
    //   isSortable: false,
    // },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname: "/placement/respite/placement-form/",
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
                pathname: "/placement/respite/placement-form/",
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
        title="Child Respite"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: "/placement/respite/placement-form",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={respitePlacementReferenceData}
        columns={respitePlacementColumns}
        isLoading={respitePlacementListIsloading}
        isFetching={respitePlacementListIsfetching}
        isError={respitePlacementListError}
        isSuccess={respitePlacementListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default RespitePlacementTable;
