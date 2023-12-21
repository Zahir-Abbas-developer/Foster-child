import { Tabs, styled } from "@mui/material";
import IconAdvocacy from "@root/assets/svg/dashboard/IconAdvocacy";
import IconAudits from "@root/assets/svg/dashboard/IconAudits";
import IconContactDirectory from "@root/assets/svg/dashboard/IconContactDirectory";
import IconEducationCap from "@root/assets/svg/dashboard/IconEducationCap";
import IconPendingPanel from "@root/assets/svg/dashboard/IconPendingPanel";
import IconPlacement from "@root/assets/svg/dashboard/IconPlacement";
import IconReferrals from "@root/assets/svg/dashboard/IconReferrals";
import IconUserManagement from "@root/assets/svg/dashboard/IconUserManagement";
import { Splide } from "@splidejs/react-splide";
import { Theme } from "@mui/material";
export const cardData = [
  {
    text: "Foster Carer",
    bgcolor: "#F63D31",
    icon: <IconEducationCap />,
    link: "",
  },
  {
    text: "Audits",
    bgcolor: "#EB9411",
    icon: <IconAudits />,
    link: "",
  },
  {
    text: "New Advocacy",
    bgcolor: "#20BE60",
    icon: <IconAdvocacy />,
    link: "",
  },
  {
    text: "User Management",
    bgcolor: "#10B0C6",
    icon: <IconUserManagement />,
    link: "",
  },
  {
    text: "Pending Panel Interviews",
    bgcolor: "#EB9411",
    icon: <IconPendingPanel />,
    link: "",
  },
  {
    text: "referrals",
    bgcolor: "#20BE60",
    icon: <IconReferrals />,
    link: "",
  },
  {
    text: "Placement Consideration",
    bgcolor: "#10B0C6",
    icon: <IconPlacement />,
    link: "",
  },
  {
    text: "Contact Directory",
    bgcolor: "#EB9411",
    icon: <IconContactDirectory />,
    link: "",
  },
];

export const CustumeSplide = styled(Splide)`
  padding: 0px 0px;
  padding-bottom: 40px;
  padding-top: 10px;

  .splide__arrow {
    display: none;
  }
  .splide {
    padding: 0px !important;
  }
`;

export const cardDataSplide = [
  {
    title: "Active User",
    number: "03",
    color: "#F6460F",
    styles: {
      width: "138px",
      height: "138px",
      position: "absolute",
      top: "3%",
      left: "-284px",
      zIndex: 2,
      border: `8px solid #F6460F`,
    },
  },
  {
    title: "Terminated Carer",
    number: "03",
    color: "#F6830F",
    styles: {
      border: `8px solid #F6830F`,
      position: "absolute",
      top: "5%",
      left: "-25px",
    },
  },
  {
    title: "Staying Put",
    number: "03",
    color: "#2CB764",
    styles: {
      position: "absolute",
      top: "43%",
      left: "-235px",
      width: 150,
      height: 150,

      border: `8px solid #2CB764`,
    },
  },
  {
    title: "Placed",
    number: "03",
    color: "#F6460F",
    styles: {
      width: 138,
      height: 138,
      position: "absolute",
      top: "60%",
      left: "-75px",
      border: `8px solid #F6460F`,
    },
  },
  {
    title: "Approved Carer",
    number: "03",
    color: "#F6830F",
    styles: {
      border: `8px solid #F6830F`,
      position: "absolute",
      top: "38%",
      left: "45%",
    },
  },
  {
    title: "Applicant Stage 1",
    number: "03",
    color: "#2CB764",
    styles: {
      position: "absolute",
      top: "7%",
      left: "-175px",
      border: `8px solid #2CB764`,
      zIndex: 999,
    },
  },
  {
    title: "Backup Carer",
    number: "03",
    color: "#F6460F",
    styles: {
      border: `8px solid #F6460F`,
    },
  },
  {
    title: "TSD Completed Carer",
    number: "03",
    color: "#F6830F",
    styles: {
      position: "absolute",
      top: "32%",
      left: "60%",
      border: `8px solid #F6830F`,
    },
  },
  {
    title: "Application Rejected",
    number: "03",
    color: "#2CB764",
    styles: {
      border: `8px solid #2CB764`,
      position: "absolute",
      top: "18%",
      left: "-120px",
      zIndex: "-1",
    },
  },
  {
    title: "Application Withdrawn",
    number: "03",
    color: "#F6460F",
    styles: {
      border: `8px solid #F6460F`,
    },
  },
  {
    title: "Resigned Carer",
    number: "03",
    color: "#F6830F",
    styles: {
      position: "absolute",
      top: "1%",
      left: "93%",
      width: 145,
      height: 145,
      border: `8px solid #F6830F`,
    },
  },
];
export const chartTitles = [
  { title: "Backup carer", color: "#E07601", percentage: 12 },
  { title: "Resigned Carer", color: "#78BFAA", percentage: 30 },
  { title: "Approved Carer", color: "#4A797E", percentage: 10 },
  { title: "Child Complaints", color: "#FFB600", percentage: 18 },
  { title: "Rejected Application", color: "#5BA316", percentage: 10 },
  { title: "Application Enquiries", color: "#212529", percentage: 10 },
  { title: "Terminated Carer", color: "#2CB764", percentage: 10 },
];
export const Tab = styled(Tabs);
