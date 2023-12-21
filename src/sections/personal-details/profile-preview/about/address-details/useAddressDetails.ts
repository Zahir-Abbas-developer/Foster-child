import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import dayjs from "dayjs";

export const useAddressDetails = () => {
  const theme: any = useTheme();
  const { data: addressDetails, isLoading: addressIsLoading }: any =
    useGetAllProfileDetailsQuery({
      infoToget: "aboutCandidate.addressDetail",
    });

  const formattedDataAddress = addressDetails?.data;

  const toDate = dayjs(formattedDataAddress?.to);
  const fromDate = dayjs(formattedDataAddress?.from);

  const yearDiff = toDate.diff(fromDate, "year");
  const monthDiff = toDate.diff(fromDate, "month") % 12;

  return {
    addressIsLoading,
    formattedDataAddress,
    addressDetails,
    theme,
    yearDiff,
    monthDiff,
  };
};
