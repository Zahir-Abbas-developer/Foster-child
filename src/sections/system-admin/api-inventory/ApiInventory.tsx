import React from "react";
import CustomAccordian from "@root/components/CustomAccordian";
import { accordianData } from ".";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

const ApiInventoryList = () => {
  const route = useRouter();
  return (
    <Grid>
      <CustomAccordian
        addShowBtn
        data={accordianData}
        handleRowAdd={() =>
          route.push({
            pathname: `/system-admin/api-inventory/form`,
            query: { action: "add" },
          })
        }
      />
    </Grid>
  );
};

export default ApiInventoryList;
