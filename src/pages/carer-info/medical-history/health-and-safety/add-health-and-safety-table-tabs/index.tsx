import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Layout from "@root/layouts";
import { HouseholdConditionA } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/household-condition-A/HouseholdConditionA";
import { HouseholdConditionB } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/household-condition-B/HouseholdConditionB";
import { SafetyFactorsIndoorsA } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-A/SafetyFactorsIndoorsA";
import { SafetyFactorsIndoorsB } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-B/SafetyFactorsIndoorsB";
import { SafetyFactorsIndoorsC } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-C/SafetyFactorsIndoorsC";
import { SafetyFactorsIndoorsD } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-D/SafetyFactorsIndoorsD";
import { SafetyFactorsIndoorsE } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-indoors-E/SafetyFactorsIndoorsE";
import { SafetyFactorsOutdoors } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/safety-factors-outdoors/SafetyFactorsOutdoors";
import { UploadDocument } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/add-health-and-safety-table-tabs/upload-document/UploadDocument";
import {
  useHealthAndSafetyDataPatchMutation,
  useHouseHoldConditionAPostMutation,
} from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function AddHealthAndSafetyTableTabs() {
  const route = useRouter();
  const { healthAndSafetyId } = route.query;
  const [breadCrumbData, setBreadCrumbData] = useState(
    "Household Condition - A"
  );
  const [householdA] = useHouseHoldConditionAPostMutation();
  const [postAllApi] = useHealthAndSafetyDataPatchMutation();

  const tabsData = [
    "Household Condition-A",
    "B",
    "Safety Factors - Indoors A",
    "B \u00a0\u00a0",
    "C",
    "D",
    "E",
    "Safety Factors - Outdoor",
    "Upload Documents",
  ];
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: "/carer-info/",
    },
    {
      name: "Health & Safety",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={breadCrumbData}
    >
      <HorizaontalTabs tabsDataArray={tabsData}>
        <HouseholdConditionA
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={householdA}
          message={"Added"}
          isAdding
        />
        <HouseholdConditionB
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        <SafetyFactorsIndoorsA
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        <SafetyFactorsIndoorsB
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        <SafetyFactorsIndoorsC
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        <SafetyFactorsIndoorsD
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        <SafetyFactorsIndoorsE
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        <SafetyFactorsOutdoors
          breadCrumbData={setBreadCrumbData}
          onSubmitHandler={postAllApi}
          message={"Added"}
        />
        {healthAndSafetyId ? (
          <UploadDocument breadCrumbData={setBreadCrumbData} />
        ) : (
          <h4 style={{ textAlign: "center" }}>
            Fill Household Condition A First!
          </h4>
        )}
      </HorizaontalTabs>
    </Layout>
  );
}
