import { CarerDevelopmentOne } from "./carers-own-development-one/CarerDevelopmentOne";
import { CarerDevelopmentTwo } from "./carers-own-development-two/CarerDevelopmentTwo";
import { ChangeApprovalTerm } from "./change-approval-term/ChangeApprovalTerm";
import { CheckMedicals } from "./check-medicals/CheckMedicals";
import { Exemptions } from "./exemptions/Exemptions";
import { ImpactFostring } from "./impact-fostering/ImpactFostering";
import { NeedsOfChildren } from "./needs-of-children/NeedsOfChildren";
import { OtherDocuments } from "./other-documents/OtherDocuments";
import { PartOfTeam } from "./part-of-team/PartOfTeam";
import { PresenrForm } from "./present-form/PresenrForm";
import { LastReviewMeeting } from "./last-review-meeting/LastReviewMeeting";
import { ReviewMeeting } from "./review-meeting/ReviewMeeting";
import { Summery } from "./summary/Summery";
import { Recommendation } from "./recommendation/Recommendation";
import { NextReviewMeeting } from "./next-review-meeting/NextReviewMeeting";

export const ReviewOfficerReportFromData = [
  {
    id: 1,
    title: "Present",
    component: <PresenrForm />,
  },
  {
    id: 2,
    title: "Reports informing the review meeting",
    component: <ReviewMeeting />,
  },
  {
    id: 3,
    title: "Checks and medicals",
    component: <CheckMedicals />,
  },
  {
    id: 4,
    title: "Other documents",
    component: <OtherDocuments />,
  },
  {
    id: 5,
    title: "Recommendations of last review meeting",
    component: <LastReviewMeeting />,
  },
  {
    id: 6,
    title: "Exemptions/placements outside terms of approval",
    component: <Exemptions />,
  },
  {
    id: 7,
    title: "SUMMARY AND DISCUSSION",
    isHeading: true,
  },
  {
    id: 8,
    title: "Impact of fostering",
    component: <ImpactFostring />,
  },
  {
    id: 9,
    title: "Needs of children",
    component: <NeedsOfChildren />,
  },
  {
    id: 10,
    title: "Working as part of a team",
    component: <PartOfTeam />,
  },
  {
    id: 11,
    title: "Carer's own development (carer 1)",
    component: <CarerDevelopmentOne />,
  },
  {
    id: 12,
    title: "Carer's own development (carer 2)",
    component: <CarerDevelopmentTwo />,
  },
  {
    id: 13,
    title: "SUMMARY AND RECOMMENDATION",
    isHeading: true,
  },
  {
    id: 14,
    title: "Summary",
    component: <Summery />,
  },
  {
    id: 15,
    title: "Changes to approval terms",
    component: <ChangeApprovalTerm />,
  },
  {
    id: 16,
    title: "Recommendation",
    component: <Recommendation />,
  },
  {
    id: 17,
    title: "Next Review meeting",
    component: <NextReviewMeeting />,
  },
];

export const defaultValuesReviewOfficerReport = {
  addedBy: "",
  changesToApprovalTerms: {
    approvalAppropriate: "",
    approvalBeingRecommended: "",
  },
  checksAndMedicals: {
    dbsFosterCarers: "",
    commentsForCarers: "",
    dbsHouseholdMembers: "",
    commentsForMembers: "",
    dbsNonHouseholdMembers: "",
  },
  createdAt: "",
  dateOfReviewMeeting: "",
  discussionsFosterCarer1: "",
  discussionsFosterCarer2: "",
  discussionsFostering: "",
  discussionsNeedsOfChildren: "",
  discussionsWorkingOfTeam: "",
  exemptionsOutsideApproval: {
    details: "",
    unlawfulPlacements: "",
  },
  nextReviewMeeting: {
    date: "",
    dated: "",
    time: "",
    venue: "",
  },
};
