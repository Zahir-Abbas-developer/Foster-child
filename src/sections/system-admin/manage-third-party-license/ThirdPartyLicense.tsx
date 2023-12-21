import React from "react";
import { Grid } from "@mui/material";
import CustomAccordian from "@root/components/CustomAccordian";
import { accordianDataFunction } from ".";
import { useThirdPartyLicence } from "./useThirdPartyLicense";

const ThirdPartyLicense = () => {
  const { router, data } = useThirdPartyLicence();
  accordianDataFunction(data);
  return (
    <Grid>
      <CustomAccordian
        addShowBtn
        data={accordianDataFunction(data)}
        handleRowAdd={(item: any) =>
          router.push({
            pathname: `/system-admin/manage-third-party-license/third-party-license-form`,
          })
        }
      />
    </Grid>
  );
};

export default ThirdPartyLicense;
