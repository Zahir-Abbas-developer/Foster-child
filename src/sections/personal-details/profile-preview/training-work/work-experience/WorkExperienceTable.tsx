import React from "react";
import { Box, Typography } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { useWorkExperienceTable } from "./useWorkExperienceTable";
import dayjs from "dayjs";

const WorkExperienceTable = () => {
  const {
    experiences,
    experienceListIsloading,
    experiencelistIsfetching,
    experienceListError,
    experienceListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useWorkExperienceTable();

  const columns = [
    {
      accessorFn: (row: any) => row.employerName ?? "-",
      id: "employeeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of Employer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.position ?? "-",
      id: "position",
      cell: (info: any) => info.getValue(),
      header: () => <span>Position</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.experience ?? "-",
      id: "experience",
      cell: (info: any) => info.getValue(),
      header: () => <span>Experience</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.leavingReason ?? "-",
      id: "leavingReason",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reason for Leaving</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.startDate ?? "-",
      id: "startDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Start Date</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 3 }}
        component={"div"}
      >
        Work Experience
      </Typography>
      <CustomTable
        data={experiences}
        columns={columns}
        isLoading={experienceListIsloading}
        isFetching={experiencelistIsfetching}
        isError={experienceListError}
        isSuccess={experienceListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default WorkExperienceTable;
