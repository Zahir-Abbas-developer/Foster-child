import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const SELECTFILTERS = [
  {
    key: "status",
    label: "Status",
    options: [
      { label: "All", value: "" },
      { label: "Placed", value: "placed" },
      { label: "Current Referral", value: "current_referral" },
    ],
  },
];

export const getColumnsChildReferral = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.laDetails?.referrerName ?? "-",
      id: "referrerName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Referee Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.personalDetails?.gender ?? "-",
      id: "gender",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Gender",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.personalDetails?.dob ?? "-",
      id: "dob",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date of Birth",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status ?? "-",
      id: "status",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.laDetails?.referalDate ?? "-",
      id: "referalDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Referral Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.refereeType ?? "-",
      id: "refereeType",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Referee Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.specialNeeds ?? "-",
      id: "specialNeeds",
      cell: (info: any) => (
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            width={"50%"}
            bgcolor={
              info.getValue()
                ? (theme: any) => theme.palette.error.lighter
                : (theme: any) => theme.palette.success.main
            }
            borderRadius={1}
          >
            {info.getValue() ? "Yes" : "No"}
          </Box>
        </Box>
      ),
      header: "Special Needs",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "id",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/referrals/child-referral/view-child-referral",
                  queryParams: { childReferralId: info.getValue() },
                })
              )
            }
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};

export { default as ChildReferralTable } from "./ChildReferralTable";
