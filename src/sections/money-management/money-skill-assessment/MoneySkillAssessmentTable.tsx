import React from "react";
import { Box, Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import CustomTable from "@root/components/Table/CustomTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { useMoneySkillAssessmentTable } from "./useMoneySkillAssessmentTable";
import dayjs from "dayjs";

export const MoneySkillAssessmentTable = () => {
  const {
    router,
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    headerChangeHandler,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useMoneySkillAssessmentTable();

  const columns = [
    {
      accessorFn: (row: any) => row,
      id: "date",
      cell: (info: any) => {
        return dayjs(info.getValue().createdAt).format("MM/DD/YYYY");
      },
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row,
      id: "score",
      cell: (info: any) => {
        const obj = { ...info.getValue() };
        delete obj.ifaId;
        delete obj.updatedAt;
        delete obj.id;
        delete obj.fosterChildId;
        delete obj.createdAt;

        let score = 0;

        for (const prop in obj) {
          if (obj[prop]) score++;
        }

        return score;
      },
      header: () => <span>Score</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/money-management/money-skill-assessment/${info.getValue()}/edit`,
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/money-management/money-skill-assessment/${info.getValue()}/view`,
              })
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
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
          showAddBtn
          title="Money Skill Assessment"
          searchKey="search"
          onChanged={headerChangeHandler}
          onAdd={() =>
            router.push({
              pathname:
                "/money-management/money-skill-assessment/add-money-skill-assessment",
            })
          }
        />
        <CustomTable
          showSerialNo
          data={data?.money_skill_assessment}
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
