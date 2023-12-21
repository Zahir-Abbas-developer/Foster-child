import { BackupTable } from "./backup";
import { DischargeTable } from "./discharge";
import { TransferTable } from "./transfer";

export const AccordianArray = [
  {
    title: "Placement / Discharge",
    component: <DischargeTable />,
  },
  {
    title: "Placement / Transfer",
    component: <TransferTable />,
  },
  {
    title: "Backup Carer Placement / Discharge",
    component: <BackupTable />,
  },
];

export { default as PlacementAndDischargeHistoryAccordion } from "./PlacementAndDischargeHistoryAccordion";
