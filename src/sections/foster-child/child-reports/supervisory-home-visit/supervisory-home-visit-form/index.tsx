import { CarerSectionA } from "./carer-section-a/CarerSectionA";
import { CarerSectionB } from "./carer-section-b/CarerSectionB";
import { SupervisoryUploadDocuments } from "./supervisory-upload-documents/SupervisoryUploadDocuments";

export const SupervisoryHomeVisitFormData = [
  {
    id: 1,
    title: "Carer Section A",
    component: <CarerSectionA />,
  },
  {
    id: 2,
    title: "Carer Section B",
    component: <CarerSectionB />,
  },
  {
    id: 3,
    title: "Uploaded Documents",
    component: <SupervisoryUploadDocuments />,
  },
];

export const defaultValuesSupervisoryHomeVisit = {
  addedBy: "",
  carerSectionA: {
    category: "",
    homeVisitType: "",
    homeVisitStatus: "",
    dateOfVisit: "",
    natureOfVisit: "",
    detailsOfPlacements: "",
    notifications: "",
  },
  carerSectionB: {
    caringForChilds: "",
    workingWithTeam: "",
    trainingAndDevelopment: "",
    commendations: "",
    carerPersonalIssue: "",
    agencyIssue: "",
    safeCarerIssue: "",
    dayCare: "",
    fosterCarerCommments: "",
    lineManagerComments: "",
  },
};
