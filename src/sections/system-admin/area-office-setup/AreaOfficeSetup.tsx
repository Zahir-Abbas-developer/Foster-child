import React from "react";
import { Card } from "@mui/material";
import { useAreaOfficeSetup } from "./useAreaOfficeSetup";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const AreaOfficeSetup = () => {
  const {
    data,
    areaOfficeTableColumns,
    router,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useAreaOfficeSetup();

  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          title={"Area Office Name"}
          searchKey="search"
          showAddBtn
          onAdd={() =>
            router.push({
              pathname: "/system-admin/area-office-setup/form",
            })
          }
          onChanged={headerChangeHandler}
        />
        <CustomTable
          isLoading={isLoading}
          showSerialNo
          isFetching={isFetching}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          data={data?.data?.area_offices}
          columns={areaOfficeTableColumns}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
      {isRecordSetForDelete && (
        <DeleteModel
          open={isRecordSetForDelete}
          handleClose={() => setIsRecordSetForDelete(false)}
          onDeleteClick={() => onDeleteConfirm?.()}
        />
      )}
    </>
  );
};

export default AreaOfficeSetup;
