import { Box, Button, Card, Fade, Modal } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import Image from "next/image";
import RefData from "../../../assets/svg/ref-data.svg";
import ReferenceDataManagementForm from "./ReferenceDataManagementForm";
import { useRouter } from "next/router";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};
export default function ReferenceDataManagementTable(props: any) {
  const router = useRouter();
  const {
    readOnly,
    gettingStatus,
    tableData,
    editedData,
    editingStatus,
    deletingStatus,
    onDelete,
    onPageChange,
    modalStatus,
  } = props;

  //modal states
  const [openDeleteModal, setOpenDeleteModal] = useState<any>(false);
  const [openFormModalWithData, setOpenFormModalWithData] =
    useState<any>(false);

  useEffect(() => {
    // close modal upon successful deletion otherwise leave it open
    deletingStatus?.isSuccess && setOpenDeleteModal(false);
  }, [deletingStatus?.isSuccess]);
  //-------------------------------------Table Column--------------------------------------

  const columns = [
    {
      accessorFn: (row: any) => row?.code,
      id: "code",
      cell: (info: any) => info.getValue(),
      header: "Ref. Data Code",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.name,
      id: "name",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Ref. Data Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.principalName,

      id: "principalName",
      cell: (info: any) => {
        return (
          <Button
            onClick={() => {
              router.push({
                pathname: "reference-data-managment/add-reference-data",
                query: {
                  name: info?.row?.original?.name,
                  id: info?.row?.original?.id,
                },
              });
            }}
          >
            <Image src={RefData} alt="ref-data-val" />
          </Button>
        );
      },
      header: "Ref. Data Value",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.description,
      id: "description",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Description",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.updatedAt,
      id: "updatedAt",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Last Updated Date",
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="add"
            onClicked={() => {
              router.push({
                pathname: "reference-data-managment/add-reference-data",
                query: {
                  name: info?.row?.original?.name,
                  id: info?.row?.original?.id,
                },
              });
            }}
            size="small"
          />
          <TableAction
            type="edit"
            onClicked={() => {
              setOpenFormModalWithData(info.row?.original);
            }}
            size="small"
          />
          <TableAction
            type="delete"
            onClicked={() => {
              setOpenDeleteModal(info.row?.original);
            }}
            size="small"
          />

          {/* Can move it outside of the table if need arises */}
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <DeleteModel
        open={openDeleteModal}
        onDeleteClick={() => {
          onDelete(openDeleteModal?.id);
          setOpenDeleteModal(false);
        }}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
      />
      <ReferenceDataManagementForm
        openModal={openFormModalWithData}
        content={openFormModalWithData}
        status={editingStatus}
        modalStatus={modalStatus}
        closeModal={() => {
          setOpenFormModalWithData(false);
        }}
        formData={(data: any) =>
          editedData({
            id: openFormModalWithData?.id,
            body: data,
          })
        }
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={gettingStatus?.isLoading}
        isFetching={gettingStatus?.isFetching}
        isError={gettingStatus?.isError}
        isSuccess={gettingStatus?.isSuccess}
        totalPages={tableData?.meta?.pages}
        currentPage={tableData?.meta?.page}
        onPageChange={onPageChange}
        showSerialNo
        // onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
