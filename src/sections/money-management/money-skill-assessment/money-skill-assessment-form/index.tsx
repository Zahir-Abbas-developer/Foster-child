import { Typography } from "@mui/material";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const MoneySkillAssessmentData = [
  // {
  //   id: 18,

  //   componentProps: {
  //     name: "involvementInGangs",
  //     text: "Involvement in Gangs",
  //     Component: RHFRadioGroup,
  //     options: ["Yes", "No", "Not Known", "Possibly"],
  //     getOptionLabel: ["Yes", "No", "Not Known", "Possibly"],
  //   },
  //   gridProps: {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     mx: "5em",
  //   },
  //   gridLength: 12,
  //   component: RHFInputWithLabel,
  // },
  {
    heading: <h4>Area &gt; Cash Handling</h4>,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can name all coins</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "competencyNameCoins",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Recognises coins and notes</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "competencyRecognizeCoinsNotes",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can use small amounts of money</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "competencyUseSmallMoney",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can count change</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "competencyCountChange",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>When spending money, is aware when change is needed</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      name: "competencyAwareChangeNeeded",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can use cash machine</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 6,
    gridLength: 6,
    componentProps: {
      name: "competencyUseCashMachine",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can pay cash for purchases </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 7,
    gridLength: 6,
    componentProps: {
      name: "competencyPayCashPurchases",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Is aware how to make online purchases</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 8,
    gridLength: 6,
    componentProps: {
      name: "competencyAwareOnlinePurchases",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Takes care of cash and valuable items in their possession
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 9,
    gridLength: 6,
    componentProps: {
      name: "competencyManageValuables",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: <h4 style={{ color: "#0E918C" }}>Area &gt; Money Awareness</h4>,
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    id: 21,
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Understands that money can be exchanged for goods and services:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 10,
    gridLength: 6,
    componentProps: {
      name: "competencyMoneyForGoodsServices",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Aware once spent money is no longer available to them or other
          purchases
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 11,
    gridLength: 6,
    componentProps: {
      name: "competencyAwareSpentMoneyUnavailable",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Understands what they can buy for the money they have</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 12,
    gridLength: 6,
    componentProps: {
      name: "competencyUnderstandWhatCanBuy",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong> can make good choices about their money</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 13,
    gridLength: 6,
    componentProps: {
      name: "competencyMakeGoodChoices",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can consider and understands alternative options</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 14,
    gridLength: 6,
    componentProps: {
      name: "competencyConsiderAlternativeOptions",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Has a realistic of the cost of basic items (e.g. food)</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 15,
    gridLength: 6,
    componentProps: {
      name: "competencyRealisticCostBasicItems",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Understands the concept of saving and its purpose</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 16,
    gridLength: 6,
    componentProps: {
      name: "competencyUnderstandSaving",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Understands the concept of earning money</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 17,
    gridLength: 6,
    componentProps: {
      name: "competencyUnderstandEarningMoney",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Knows difference between disposable cash and savings</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 18,
    gridLength: 6,
    componentProps: {
      name: "competencyDifferenceDisposableCashSavings",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Understands buying on credit, loans, interest and charges.:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 19,
    gridLength: 6,
    componentProps: {
      name: "competencyUnderstandCreditLoansInterest",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: <h4 style={{ color: "#0E918C" }}>Area &gt; Budgeting</h4>,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Can set up a monthly budget covering regular expenses with assistance:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "competencySetupMonthlyBudget",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Can make budget allowance last for a week</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 21,
    gridLength: 6,
    componentProps: {
      name: "competencyMakeBudgetLastWeek",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          can read monthly bank statements and make adjustments it necessary:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      name: "competencyReadBankStatementsAdjustments",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Understands the need to budget for unexpected emergencies and seasonal
          spending:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 23,
    gridLength: 6,
    componentProps: {
      name: "competencyUnderstandBudgetEmergenciesSeasonal",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: <h4 style={{ color: "#0E918C" }}>Area &gt; Saving</h4>,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Has a savings account or a savings program, or a money box):
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 24,
    gridLength: 6,
    componentProps: {
      name: "competencyHasSavingsAccount",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Has a savings plan</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 25,
    gridLength: 6,
    componentProps: {
      name: "competencyHasSavingsPlan",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>Motivated to save tor a partiacular item</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 26,
    gridLength: 6,
    componentProps: {
      name: "competencyMotivatedSaveItem",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    heading: (
      <li style={{ marginLeft: 15 }}>
        <strong>
          Has had an opportunity to use their savings to purchase a particular
          item:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 27,
    gridLength: 6,
    componentProps: {
      name: "competencyUsedSavingsPurchaseItem",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
];

export const defaultValuesMoneySkillAssessment = {
  competencyNameCoins: "",
  competencyRecognizeCoinsNotes: "",
  competencyUseSmallMoney: "",
  competencyCountChange: "",
  competencyAwareChangeNeeded: "",
  competencyUseCashMachine: "",
  competencyPayCashPurchases: "",
  competencyAwareOnlinePurchases: "",
  competencyManageValuables: "",
  competencyMakeGoodChoices: "",
  competencyConsiderAlternativeOptions: "",
  competencyRealisticCostBasicItems: "",
  competencyUnderstandSaving: "",
  competencyUnderstandEarningMoney: "",
  competencyDifferenceDisposableCashSavings: "",
  competencyUnderstandCreditLoansInterest: "",
  competencyMoneyForGoodsServices: "",
  competencyAwareSpentMoneyUnavailable: "",
  competencyUnderstandWhatCanBuy: "",
  competencySetupMonthlyBudget: "",
  competencyMakeBudgetLastWeek: "",
  competencyReadBankStatementsAdjustments: "",
  competencyUnderstandBudgetEmergenciesSeasonal: "",
  competencyHasSavingsAccount: "",
  competencyHasSavingsPlan: "",
  competencyMotivatedSaveItem: "",
  competencyUsedSavingsPurchaseItem: "",
};
