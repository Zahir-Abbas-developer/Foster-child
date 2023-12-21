import React from "react";
import { Box, Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { useGetBusinessContinutyPlanListQuery } from "@root/services/system-admin/business-Continuity-plan/bcp/BusinessContinutyPlanApi";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import Image from "next/image";
import dayjs from "dayjs";
import { useGetBusinessContinutyPlanHistoryListQuery } from "@root/services/system-admin/business-Continuity-plan/history/businessContinutyplanHistoryApi";
import UploadModelHistory from "./UploadModelHistory";
import useBusinessContinuityPlanHistoryForm from "./useBusinessContinuityPlanHistoryForm";

const BusinessContinuityPlanHistoryTable = () => {
  //API HANDLERS
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetBusinessContinutyPlanHistoryListQuery({});
  //ADD UPDATE AND DELETE HOOK
  const {
    onUploadSubmit,
    onUpdateSubmit,
    onDeleteHander,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  } = useBusinessContinuityPlanHistoryForm();
  //TABLES COLUMNS
  const columns = [
    {
      accessorFn: (row: any) => row?.invoked_at ?? "-",
      id: "invoked_at",
      cell: (info: any) => dayjs(info.getValue()).format("YYYY-MM-DD"),
      header: () => <span>Date Invoked</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.steps_taken ?? "-",
      id: "steps_taken",
      cell: (info: any) => info.getValue(),
      header: () => <span>Steps Taken</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.outcome_name,
      id: "outcome_name",
      cell: (info: any) => (
        <>
          {info.getValue() && (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={0.5}
            >
              <Image src={pdfIcon} alt="icon" width={24} height={20} />
              {info.getValue()}
            </Box>
          )}
          {!info.getValue() && "-"}
        </>
      ),
      header: () => <span>Outcome</span>,
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
          <UploadModelHistory
            defaultValues={info.row.original}
            showActions={true}
            onSubmit={(data: any) => onUpdateSubmit(data, info.row.original.id)}
            action="edit"
            isFetching={isFatching}
          />
          <UploadModelHistory
            defaultValues={info.row.original}
            showActions={true}
            action="view"
            isFetching={isFatching}
          />

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
            <UploadModelHistory
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

export default BusinessContinuityPlanHistoryTable;
