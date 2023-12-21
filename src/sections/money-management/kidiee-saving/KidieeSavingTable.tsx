import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useKidieeSavingTable } from "./useKidieeSavingTable";
import dayjs from "dayjs";

export const KidieeSavingTable = () => {
  const {
    router,
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
    headerChangeHandler,
  } = useKidieeSavingTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.date,
      id: "date",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.amountPounds,
      id: "amountPounds",
      cell: (info: any) => info.getValue(),
      header: () => <span>Amount</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.category,
      id: "category",
      cell: (info: any) => info.getValue(),
      header: () => <span>Category</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.purposeComment,
      id: "purposeComment",
      cell: (info: any) => info.getValue(),
      header: () => <span>Comment</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.total,
      id: "total",
      cell: (info: any) => info.getValue(),
      header: () => <span>Total</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.subTotal,
      id: "subTotal",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sub Total</span>,
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
                pathname: `/money-management/kidiee-saving/${info.getValue()}/edit`,
                
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/money-management/kidiee-saving/${info.getValue()}/view`,
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
          title="Kidiee Saving"
          searchKey="search"
          onChanged={headerChangeHandler}
          onAdd={() =>
            router.push({
              pathname:
                "/money-management/kidiee-saving/add-kidiee-saving-form",
            })
          }
        />
        <CustomTable
          showSerialNo
          data={data?.kidiee_saving}
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
