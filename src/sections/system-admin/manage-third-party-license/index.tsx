import LicenceDisableTable from "./third-party-license-disable-table/LicenseDisableTable";
import ThirdPartyLicenceTable from "./third-party-licence-table/ThirdPartyLicenseTable";

export const accordianDataFunction = (data: any) => [
  {
    title: "Manage Third Party License",
    component: <ThirdPartyLicenceTable data={data?.data?.active} />,
  },
  {
    title: "Manage Third Party License ( disable )",
    component: <LicenceDisableTable data={data?.data?.disabled} />,
  },
];
