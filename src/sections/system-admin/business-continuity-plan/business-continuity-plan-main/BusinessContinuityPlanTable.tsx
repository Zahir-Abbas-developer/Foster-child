import React from "react";
import { Box, Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { useGetBusinessContinutyPlanListQuery } from "@root/services/system-admin/business-Continuity-plan/bcp/BusinessContinutyPlanApi";
import UploadModel from "./UploadModel";
import useBusinessContinuityPlanForm from "./useBusinessContinuityPlanForm";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import Image from "next/image";
const BusinessContinuityPlanTable = () => {
  //API HANDLERS
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetBusinessContinutyPlanListQuery({});
  //ADD UPDATE AND DELETE HOOK
  const {
    onUploadSubmit,
    onUpdateSubmit,
    onDeleteHander,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  } = useBusinessContinuityPlanForm();
  //TABLES COLUMNS
  const columns = [
    {
      accessorFn: (row: any) => row?.type ?? "-",
      id: "bcptype",
      cell: (info: any) => info.getValue(),
      header: () => <span>BCP Type</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.document_name ?? "-",
      id: "Marketing",
      cell: (info: any) => (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={0.5}
        >
          <Image src={pdfIcon} alt="icon" width={24} height={20} />
          {info.getValue()}
        </Box>
      ),
      header: () => <span>Marketing Plan</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.approved_by ?? "-",
      id: "ApprovedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved By</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.approved_at ?? "-",
      id: "ApprovedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved Date</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.manager ?? "-",
      id: "Manager",
      cell: (info: any) => info.getValue(),
      header: () => <span>BCP Manager (Role)</span>,
      isSortable: false,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <UploadModel
            defaultValues={info.row.original}
            showActions={true}
            onSubmit={(data: any) => onUpdateSubmit(data, info.row.original.id)}
            action="edit"
            isFetching={isFatching}
          />
          <UploadModel
            defaultValues={info.row.original}
            showActions={true}
            action="view"
            isFetching={isFatching}
          />
          {/* Calling Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => onDeleteHander(info.row.original.id)}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Box sx={{ mb: 0.0 }}>
              <TableHeader
                // ref={tableHeaderRefTwo}
                hideSearch
                title=""
                showAddBtn
                onAdd={() => setModelOpen(true)}
              />
            </Box>
            <UploadModel
              action={"add"}
              modelOpen={modelOpen}
              setModelOpen={setModelOpen}
              isFetching={false}
              onSubmit={(data: any) => onUploadSubmit(data)}
            />
            <CustomTable
              data={data?.data ?? []}
              columns={columns}
              isLoading={isLoading}
              isFetching={isFetching}
              isError={isError}
              isSuccess={isSuccess}
              isPagination={false}
              showSerialNo={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessContinuityPlanTable;
