import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const viewEducationKeyStage = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      label: "Does this child have a School Placement?",
      name: "isChildHaveSchoolPlacement",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "noToAboveQuestion",
      label: "If no to above question, please give details",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "schoolType",
      label: "School",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      defaultValue: "Yes",
      label: "Is this Child's Current School?",
      name: "isThisChildSchool",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "school",
      label: "School Type",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "personalEducationPlan",
      label: "Personal Education Plan",
      fullWidth: true,
    },
    options: [{ value: "text", label: "Text" }],
    component: RHFSelect,
  },
  {
    id: 7,
    gridLength: 6,

    otherOptions: {
      label: "Is this School due to Foster Placement Change?",
      name: "isSchoolDueToFosterPlaceChange",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "classStudying",
      label: "Class Studying",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "schoolYear",
      label: "School Year",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "currentKeyStage",
      label: "Current Key Stage",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "expectedKeyStage",
      label: "Expected Key Stage",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "Attendance",
      label: "Attendance",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "schoolBusPhone",
      label: "School Bus Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      name: "teacherName",
      label: "Teacher's Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      name: "teacherRole",
      label: "Teacher's Role",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      name: "teacherPhone",
      label: "Teacher's Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 6,
    otherOptions: {
      name: "teacherEmailAddress",
      label: "Teacher's Email Address",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 18,
    gridLength: 6,
    otherOptions: {
      name: "designatedAuthority",
      label: "Designated Authority",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 19,
    gridLength: 6,
    otherOptions: {
      name: "stageOfEducation",
      label: "Stage Of Education",
      fullWidth: true,
    },
    options: [{ value: "abc", label: "Abc" }],
    component: RHFSelect,
  },
  {
    id: 20,
    gridLength: 12,
    otherOptions: {
      label: "Does the Child have a statement of special educational needs?",
      name: "childHaveAStatementEducationalNeeds",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 21,
    gridLength: 12,
    otherOptions: {
      name: "specialEducationNeeds",
      label: "Special Education Needs",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 22,
    gridLength: 12,
    otherOptions: {
      name: "arrangementsForEducationNeeds",
      label: "Arrangements for Special Educational Needs",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 23,
    gridLength: 12,
    otherOptions: {
      name: "achievements",
      label: "Achievements",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 24,
    gridLength: 12,
    otherOptions: {
      name: "awardsAndRewards",
      label: "Award amd Rewards",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 25,
    gridLength: 12,
    otherOptions: {
      name: "notes",
      label: "Notes",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
