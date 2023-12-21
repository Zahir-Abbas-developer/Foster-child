import BcpHistory from "./bcp-history-accordin/BcpHistory";
import BusinessContinuityPlanHistoryTable from "./business-continuity-plan-history/BusinessContinuityPlanHistoryTable";
import BusinessContinuityPlanTable from "./business-continuity-plan-main/BusinessContinuityPlanTable";

export const data = [
  {
    title: "Business Continuity Plan",
    component: <BusinessContinuityPlanTable />,
  },
  {
    title: "BCP History",
    component: <BusinessContinuityPlanHistoryTable />,
  },
];
