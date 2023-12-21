import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { SELECT_FILTERS } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useRejection } from "./useRejection";

const Rejection = () => {
  const {
    data,
    router,
    thirdPartyColumnTableColumns,
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
  } = useRejection();

  return (
    <Card sx={styles.card}>
      <TableHeader
        title={"Placement Rejections"}
        showAddBtn
        onAdd={() =>
          router.push({
            pathname: "/placement/rejections/form",
          })
        }
        showSelectFilters
        selectFilters={SELECT_FILTERS}
      />
     <CustomTable
          isLoading={isLoading}
          showSerialNo
          isFetching={isFetching}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          data={data?.data?.placement_rejection}
          columns={thirdPartyColumnTableColumns}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
     {isRecordSetForDelete && (
        <DeleteModel
          open={isRecordSetForDelete}
          handleClose={() => setIsRecordSetForDelete(false)}
          onDeleteClick={() => onDeleteConfirm?.()}
        />
      )}
    </Card>
  );
};

export default Rejection;

const styles = {
  card: {
    py: 2,
    px: 1,
    "& .MuiStack-root": {
      "& .MuiButtonBase-root": {
        marginLeft: "15px",
      },
    },
  },
};
