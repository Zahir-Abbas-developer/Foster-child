import React from "react";
import TableHeader from "@root/components/TableHeader";
import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { data } from ".";
import { useChairSelfEvaluationForm } from "./useChairSelfEvaluationForm";

const ChairSelfEvaluationFormList = () => {
    const {
        columns,
        tableHeaderRefTwo,
    } = useChairSelfEvaluationForm();

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Panel Chair List"
            />
            <CustomTable
                data={data}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                currentPage={1}
                onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                }}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
            />
        </>
    );
}
export default ChairSelfEvaluationFormList