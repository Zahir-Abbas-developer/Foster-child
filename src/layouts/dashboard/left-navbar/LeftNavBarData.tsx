//Importing MUI Icons
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import OnDeviceTrainingOutlinedIcon from "@mui/icons-material/OnDeviceTrainingOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { ROLES } from "@root/constants";

// CONSTANTS
export const NAV_LINKS = [
  {
    id: 1,
    text: "Dashboard",
    img: <GridViewOutlinedIcon />,
    link: "/dashboard",
    pathtext: "/dashboard",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 2,
    text: "Carer Info",
    img: <PermIdentityOutlinedIcon />,
    link: "/carer-info",
    pathtext: "/carer-info",
    protectedRoute: true,
    accessibleRoles: [ROLES.FCR],
  },
  // {
  //   id: 3,
  //   text: "Personal Details",
  //   img: <AccountBoxOutlinedIcon />,
  //   link: "/personal-details",
  //   pathtext: "/personal-details",
  // },
  {
    id: 4,
    text: "Foster Carer",
    img: <EscalatorWarningOutlinedIcon />,
    link: "/foster-carer-list",
    pathtext: "/carer",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 5,
    text: "Foster Carer Recruitment",
    img: <PersonSearchOutlinedIcon />,
    link: "/foster-carer-recruitment",
    pathtext: "/recruitment",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 6,
    text: "Foster Child",
    img: <Diversity3OutlinedIcon />,
    link: "/foster-child-lists",
    pathtext: "/foster-child",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 7,
    text: "Child Info",
    img: <Diversity3OutlinedIcon />,
    link: "/foster-child",
    pathtext: "/foster-child",
    protectedRoute: true,
    accessibleRoles: [ROLES.FC],
  },
  {
    id: 8,
    text: "Matching & Placement",
    img: <SettingsOutlinedIcon />,
    link: "/matching",
    pathtext: "/matching",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
    sublist: [
      {
        list: "Matching",
        sublistlink: "/matching",
        pathtext: "/matching",
      },
      {
        list: "Placement",
        sublistlink: "/placement",
        pathtext: "/placement",
      },
    ],
  },
  {
    id: 9,
    text: "Deregister Foster Carer",
    img: <HowToRegOutlinedIcon />,
    link: "/de-registration",
    pathtext: "/de-registration",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 10,
    text: "Safeguarding",
    img: <VerifiedUserOutlinedIcon />,
    link: "/safeguarding",
    pathtext: "/safeguarding",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 11,
    text: "Referrals",
    img: <GroupsOutlinedIcon />,
    link: "/referral",
    pathtext: "/referral",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  // {
  //   id: 12,
  //   text: "Time Sheet Logging",
  //   img: <TimerOutlinedIcon />,
  //   link: "/Time",
  //   pathtext: "/Time",
  // },
  {
    id: 13,
    text: "Panel",
    img: <BallotOutlinedIcon />,
    link: "/panel",
    pathtext: "/panel",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 14,
    text: "Training",
    img: <OnDeviceTrainingOutlinedIcon />,
    link: "/training",
    pathtext: "/training",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 15,
    text: "Local Authority",
    img: <AssignmentOutlinedIcon />,
    link: "/local-authority",
    pathtext: "/local-authority",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 16,
    text: "Audits",
    img: <ContentPasteSearchOutlinedIcon />,
    link: "/audits",
    pathtext: "/audits",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 17,
    text: "Children's Guide",
    img: <ClassOutlinedIcon />,
    link: "/children-guides",
    pathtext: "/children-guides",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 18,
    text: "Advocacy",
    img: <GavelOutlinedIcon />,
    link: "/advocacy",
    pathtext: "/advocacy",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 19,
    text: "Compliance Management",
    img: <HandshakeOutlinedIcon />,
    link: "/compliance-management",
    pathtext: "/compliance-management",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 20,
    text: "Reports",
    img: <AssessmentOutlinedIcon />,
    link: "/reports",
    pathtext: "/reports",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 21,
    text: "Contact Directory",
    img: <ContactMailOutlinedIcon />,
    link: "/contact",
    pathtext: "/contact",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 22,
    text: "System Admin",
    img: <ManageAccountsOutlinedIcon />,
    link: "/system-admin",
    pathtext: "/system-admin",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 23,
    text: "Policies & Guidelines",
    img: <PolicyOutlinedIcon />,
    link: "/policies-and-guidelines",
    pathtext: "/policies-and-guidelines",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 24,
    text: "Marketing",
    img: <PolicyOutlinedIcon />,
    link: "/marketing",
    pathtext: "/marketing",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  {
    id: 25,
    text: "User Manual",
    img: <GroupRemoveOutlinedIcon />,
    link: "/user-manual",
    pathtext: "/user-manual",
    protectedRoute: true,
    accessibleRoles: [ROLES.IFA],
  },
  // {
  //   id: 26,
  //   text: "IT Help Desk",
  //   img: <SupportAgentOutlinedIcon />,
  //   link: "/ITHelp",
  //   pathtext: "/ITHelp",
  //   protectedRoute: true,
  //   accessibleRoles: [ROLES.IFA],
  // },
];
