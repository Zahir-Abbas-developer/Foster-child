import React from "react";
import { Box } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useDischargePlacement } from "./useDischargePlacement";

// ==============================================================

const DischargePlacement = () => {
  const {
    theme,
    router,
    dischargePlacementcolumns,
    SELECT_FILTERS,
    isDeleteModal,
    handleDeleteClose,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setPage,
    DISCHARGEPLACEMENTLISTPAGELIMIT,
    setSearchValue,
  } = useDischargePlacement();
  return (
    <Box>
      <TableHeader
        title="Child Discharge"
        rootSX={{ overflowX: "scroll" }}
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() => router.push("/placement/discharge/form")}
        onChanged={(data: any) => {
          setSearchValue(data?.search);
        }}
      />
      <CustomTable
        data={data?.data?.discharge_list_infos}
        columns={dischargePlacementcolumns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        onPageChange={(pageNo: any) => {
          setPage((pageNo - 1) * DISCHARGEPLACEMENTLISTPAGELIMIT);
        }}
      />
      {isDeleteModal && (
        <DeleteModel open={isDeleteModal} handleClose={handleDeleteClose} />
      )}
    </Box>
  );
};

export default DischargePlacement;

// =============================================
