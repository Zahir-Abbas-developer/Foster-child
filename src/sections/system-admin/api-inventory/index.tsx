import ApiInventoryTable from "./api-inventory-active-table/ApiInventoryTable";
import ApliInventoryDisableTable from "./api-inventory-disable-table/ApliInventoryDisableTable";


export const accordianData = [
  {
    title: "API Inventory",
    component: <ApiInventoryTable/>,
  },
  {
    title: "API Inventory ( disable )",
    component: <ApliInventoryDisableTable/>,
  },
]