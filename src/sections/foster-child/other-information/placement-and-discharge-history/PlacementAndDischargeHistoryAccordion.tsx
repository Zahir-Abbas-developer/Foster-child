import { Box, Button } from "@mui/material";
import React from "react";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomAccordian from "@root/components/CustomAccordian";
import { AccordianArray } from "./";

export default function PlacementAndDischargeHistoryAccordion() {
  return (
    <div>
      <Box sx={{ display: "flex", gap: "12px", justifyContent: "end" }}>
        <Button variant="contained">
          <ImportExportIcon /> Placement Type <ArrowDropDownIcon />
        </Button>
      </Box>
      <CustomAccordian data={AccordianArray} />
    </div>
  );
}
